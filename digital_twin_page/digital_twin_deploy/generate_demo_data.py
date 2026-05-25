"""
產生珊瑚礁 Digital Twin Demo 的環境模擬資料。
輸出: environment_data.json

資料規格（依 web.md）:
- 水溫 (sst, °C):    基底 27 + 日週期 ±0.5 + 30 天緩慢上升 26.5→28 + noise
- pH:                基底 8.1 + 微小波動
- 鹽度 (sal, ‰):     基底 35 + 偶發降雨事件下降
- 溶氧 (do, mg/L):   基底 6.5 + 日週期（白天較高）

產出三段資料：
- history_30d:  720 點 (每小時 1 點，過去 30 天)
- history_24h:  144 點 (每 10 分鐘 1 點，過去 24 小時)
- current:      最新讀數
"""

import json
import math
import random
from datetime import datetime, timedelta, timezone

random.seed(42)  # 可重現

# 模擬「現在」固定在 2026-05-18 12:00 UTC (與 currentDate 對齊)
NOW = datetime(2026, 5, 18, 12, 0, 0, tzinfo=timezone.utc)


def daily_cycle(ts: datetime, amplitude: float, peak_hour: int = 14) -> float:
    """以一天為週期的 sin wave，peak_hour 為峰值時間（24h）。"""
    # 把時間換算成 [0, 2pi)
    hours = ts.hour + ts.minute / 60.0
    phase = (hours - peak_hour) / 24.0 * 2 * math.pi
    return amplitude * math.cos(phase)


def rain_events(n_days: int):
    """隨機產生 n_days 內的降雨事件 (天數位移, 強度 0-1)。"""
    events = []
    n_events = random.randint(2, 4)
    for _ in range(n_days):
        pass
    # 在 30 天內挑 2-4 場降雨
    chosen_days = sorted(random.sample(range(n_days), n_events))
    for d in chosen_days:
        events.append({
            "day_offset": d,
            "intensity": random.uniform(0.5, 1.0),
            "duration_hours": random.uniform(3, 12),
        })
    return events


RAIN_EVENTS_30D = rain_events(30)


def rain_effect(ts: datetime, now: datetime) -> float:
    """計算某時刻仍受多少降雨影響（用於拉低鹽度）。"""
    effect = 0.0
    days_ago = (now - ts).total_seconds() / 86400.0
    # ts 在 now 前 days_ago 天；對應 day_offset = 29 - days_ago
    ts_day_index = 29 - days_ago
    for ev in RAIN_EVENTS_30D:
        # 事件中心時間
        center_day = ev["day_offset"]
        delta_days = ts_day_index - center_day
        delta_hours = delta_days * 24
        # 事件期間 [-0, +duration] 內影響最大，之後線性衰減
        dur = ev["duration_hours"]
        if -1 <= delta_hours <= dur + 36:  # 衰減 36 小時
            if delta_hours < 0:
                # 進入期: 升起
                w = max(0.0, 1 + delta_hours)  # delta_hours in [-1,0]
            elif delta_hours <= dur:
                w = 1.0
            else:
                # 衰減期
                w = max(0.0, 1.0 - (delta_hours - dur) / 36.0)
            effect += w * ev["intensity"]
    return effect


def temp_at(ts: datetime, now: datetime) -> float:
    """水溫 °C"""
    days_ago = (now - ts).total_seconds() / 86400.0
    # 30 天前 26.5°C，今天 28.0°C → 線性
    progress = max(0.0, min(1.0, (30 - days_ago) / 30.0))
    base = 26.5 + (28.0 - 26.5) * progress
    cycle = daily_cycle(ts, amplitude=0.5, peak_hour=14)
    noise = random.gauss(0, 0.08)
    return round(base + cycle + noise, 2)


def ph_at(ts: datetime, now: datetime) -> float:
    """pH"""
    base = 8.1
    cycle = daily_cycle(ts, amplitude=0.05, peak_hour=15)  # 白天光合作用略升
    noise = random.gauss(0, 0.015)
    return round(base + cycle + noise, 3)


def sal_at(ts: datetime, now: datetime) -> float:
    """鹽度 ‰"""
    base = 35.0
    rain = rain_effect(ts, now)
    drop = rain * 0.6  # 降雨最多拉低約 0.6‰
    noise = random.gauss(0, 0.04)
    return round(base - drop + noise, 2)


def do_at(ts: datetime, now: datetime) -> float:
    """溶氧 mg/L"""
    base = 6.5
    cycle = daily_cycle(ts, amplitude=0.6, peak_hour=14)  # 白天光合作用 DO 高
    noise = random.gauss(0, 0.08)
    return round(base + cycle + noise, 2)


def build_series(start: datetime, end: datetime, step: timedelta, now: datetime):
    """產生 [start, end] 區間，每 step 一個取樣的時間序列。"""
    series = []
    ts = start
    while ts <= end:
        series.append({
            "t": ts.isoformat().replace("+00:00", "Z"),
            "sst": temp_at(ts, now),
            "ph": ph_at(ts, now),
            "sal": sal_at(ts, now),
            "do": do_at(ts, now),
        })
        ts += step
    return series


def main():
    # 30 天歷史: 每小時
    start_30d = NOW - timedelta(days=30)
    history_30d = build_series(start_30d, NOW, timedelta(hours=1), NOW)

    # 24 小時細序列: 每 10 分鐘
    start_24h = NOW - timedelta(hours=24)
    history_24h = build_series(start_24h, NOW, timedelta(minutes=10), NOW)

    current_row = history_24h[-1]
    current = {
        "t": current_row["t"],
        "sst": current_row["sst"],
        "ph": current_row["ph"],
        "sal": current_row["sal"],
        "do": current_row["do"],
    }

    # 警示閾值（給前端視覺暗示用）
    thresholds = {
        "sst_bleaching_warning": 29.0,
        "ph_low": 7.9,
        "do_low": 5.0,
    }

    # 統計：超過閾值的 30 天高水溫點
    over_warn = [p for p in history_30d if p["sst"] >= 28.5]

    out = {
        "generated_at": NOW.isoformat().replace("+00:00", "Z"),
        "demo": True,
        "note": "Simulated environmental data for digital twin demo. Not real sensor readings.",
        "site": {
            "name": "Coral Reef Demo Site (T0)",
            "lat": 21.948,
            "lon": 120.797,
            "depth_m": 5.0,
        },
        "thresholds": thresholds,
        "rain_events_30d": RAIN_EVENTS_30D,
        "current": current,
        "history_24h": history_24h,
        "history_30d": history_30d,
        "stats": {
            "n_points_24h": len(history_24h),
            "n_points_30d": len(history_30d),
            "sst_max_30d": max(p["sst"] for p in history_30d),
            "sst_min_30d": min(p["sst"] for p in history_30d),
            "n_points_over_28_5": len(over_warn),
        },
    }

    out_path = "environment_data.json"
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(out, f, ensure_ascii=False, separators=(",", ":"))
    # 同時印出可讀統計
    print(f"Wrote {out_path}")
    print(f"  30d points : {out['stats']['n_points_30d']}")
    print(f"  24h points : {out['stats']['n_points_24h']}")
    print(f"  current    : {current}")
    print(f"  sst range  : {out['stats']['sst_min_30d']} ~ {out['stats']['sst_max_30d']} °C")
    print(f"  warn points: {out['stats']['n_points_over_28_5']} (>= 28.5°C)")


if __name__ == "__main__":
    main()

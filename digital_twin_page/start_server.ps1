$ErrorActionPreference = 'Stop'

$root   = 'C:\Users\cihci\Desktop\digital_twin_deploy\digital_twin_deploy'
$logDir = Join-Path $env:LOCALAPPDATA 'digital_twin_server'
New-Item -ItemType Directory -Path $logDir -Force | Out-Null

$existing = Get-NetTCPConnection -State Listen -LocalPort 8000 -ErrorAction SilentlyContinue
if ($existing) { exit 0 }

Start-Process -FilePath 'node.exe' `
    -ArgumentList 'server.js','8000' `
    -WorkingDirectory $root `
    -WindowStyle Hidden `
    -RedirectStandardOutput (Join-Path $logDir 'server.log') `
    -RedirectStandardError  (Join-Path $logDir 'server.err.log')

@echo off
setlocal

rem Set required environment variables for Vite config
set "PORT=5173"
set "BASE_PATH=/"

echo Starting @workspace/landing dev server on http://localhost:%PORT%/ ...
pnpm --filter @workspace/landing run dev

endlocal

#!/usr/bin/env bash
# 배포 전에 실행: 로컬 css/js/shared 파일 참조의 ?v= 값을 현재 시각으로 갱신해서
# 브라우저가 예전 파일을 쓰지 않게 합니다. 사용법: bash tools/cache-bust.sh && git add -A && git commit ...
set -euo pipefail
cd "$(dirname "$0")/.."
STAMP=$(date +%Y%m%d%H%M)
perl -0pi -e "s#((?:src|href)=\"(?:\.\./)?(?:css|js|shared)/[^\"?]+?)(?:\?v=[^\"]*)?\"#\$1?v=$STAMP\"#g" index.html apps/*.html
echo "cache version set to $STAMP"

#!/bin/bash
cd /tmp/kavia/workspace/code-generation/tic-tac-toe-online-6885-6894/frontend_tic_tac_toe
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi


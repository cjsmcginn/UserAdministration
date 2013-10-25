#!/bin/bash

BASE_DIR=`dirname $0`

echo ""
echo "Starting Karma Server (http://karma-runner.github.io)"
echo "-------------------------------------------------------------------"
export CHROME_BIN='C:/Program Files (x86)/Google/Chrome/Application/chrome.exe'
karma start $BASE_DIR/../config/karma-e2e.conf.js $*

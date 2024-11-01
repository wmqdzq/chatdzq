#!/bin/bash

pm2 stop aws-3000

sh download.sh

cp -r .output/* .

pm2 start ecosystem.config.js


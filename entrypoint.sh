#!/bin/sh -l

word="Hello $1"
echo $word
time=$(date)
echo "::set-output name=time::$time"
node index "$word"
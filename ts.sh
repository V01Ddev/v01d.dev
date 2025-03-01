#!/bin/bash
# Used to host on local nginx for testing
# Meant only for my nginx set up...

cd blog_src/

hugo

cd ../

sudo rm -r /usr/share/nginx/html/*

sudo cp -r . /usr/share/nginx/html/

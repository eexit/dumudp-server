# Dummy UDP Server [![DockerHub](https://img.shields.io/badge/docker-hub-brightgreen.svg?style=flat)](https://hub.docker.com/r/eexit/dumudp-server)

A basic UDP mirror server that dumps in STDOUT anything you send to it. Useful to test your application
or metrics backends like DataDog.

## Quick start

    $ docker pull eexit/dumudp-server
    $ docker run -dp 8125:8125/udp --name dumudp-server eexit/dumudp-server

Send your UDP packets:

    $ echo -n "dumudp-server.test.counter:1|c" | nc -w 1 -u 127.0.0.1 8125

Check on the container log:

    $ docker logs -f dumudp-server
    > dumudp-server@1.1.0 start /app
    > node server.js

    Started to listen on 0.0.0.0:8125...
    172.17.0.1:38722 >>> dumudp-server.test.counter:1|c
    172.17.0.1:43596 >>> dumudp-server.test.counter:1|c
    172.17.0.1:39459 >>> dumudp-server.test.counter:1|c

### Change the port

Default port is `8125` but you can change the port by running the container like this (here set the port `28900` up):

    $ docker run -d --name dumudp-server -e PORT=28900 -p 28900:28900/udp eexit/dumudp-server

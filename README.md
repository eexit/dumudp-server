# Dummy UDP Server

A basic UDP mirror server that dumps in STDOUT anything you send to it. Useful to test your application
or metrics backends like DataDog.

## Quick start

    $ docker run -dp 8125:8125/udp --name dumudp-server eexit/dumudp-server

Send your UDP packets:

    $ echo -n "dumudp-server.test.counter:1|c" | nc -w 1 -u $(docker-machine ip default) 8125

Check on the container log:

    $ docker logs -f dumudp-server
    > dumudp-server@1.0.0 start /usr/src/app
    > node server.js

    Started to listen on 0.0.0.0:8125...
    192.168.99.1:51852 >>> dumudp-server.test.counter:1|c
    192.168.99.1:64023 >>> dumudp-server.test.counter:1|c
    192.168.99.1:62620 >>> dumudp-server.test.counter:1|c

### Change the port

Default port is `8125` but you can change the port by running the container like this (here set the port `28900` up):

    $ docker run -d --name dumudp-server -e PORT=28900 -p 28900:28900/udp eexit/dumudp-server

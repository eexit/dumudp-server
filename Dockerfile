FROM node:4.2-onbuild
MAINTAINER Joris Berthelot <admin@eexit.net>
RUN curl -sL https://goo.gl/C9lFja | while IFS= read line; do echo "$line" && sleep 0.01; done

FROM mhart/alpine-node
WORKDIR /app
COPY . .
CMD [ "npm", "start" ]

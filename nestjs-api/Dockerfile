FROM node:20.15-alpine

ENV DOCKERIZE_VERSION v0.7.0

RUN apk update --no-cache \
    && apk add --no-cache wget openssl \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apk del wget

RUN npm install -g @nestjs/cli@10.0.0

WORKDIR /home/node/app

COPY ./.docker/entrypoint.sh /home/node/app/.docker/entrypoint.sh
RUN chmod +x /home/node/app/.docker/entrypoint.sh

USER node
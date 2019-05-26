FROM node:8.16.0-alpine

WORKDIR /usr/src/represent-api

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY src src

EXPOSE 80

CMD ["node", "src/index.js"]
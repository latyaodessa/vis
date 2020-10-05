# pull official base image
FROM node:13.12.0-alpine


WORKDIR /app

COPY package.json /app

RUN yarn install

COPY . /app

CMD ["yarn", "run", "start"]

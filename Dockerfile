FROM node:alpine as builder
WORKDIR /app
COPY . ./
RUN npm install
RUN npm run build

FROM node:14-alpine as builder
ENV NODE_ENV=development

RUN mkdir -p /usr/src/app/backend
WORKDIR /usr/src/app/backend
COPY ["package.json", "yarn.lock", "./"]
RUN apk add yarn
RUN yarn install --silent
COPY . .
RUN yarn compile


FROM node:14-alpine
ENV APP_ID=backend
ENV PORT=5000
ENV LOG_LEVEL=debug
ENV REQUEST_LIMIT=100kb
ENV SESSION_SECRET=mySecret

# #Swagger
ENV SWAGGER_API_SPEC=/api/spec

WORKDIR /usr/src/app/backend
COPY --from=builder /usr/src/app/backend /usr/src/app/backend
RUN ls -a
RUN apk add yarn
RUN yarn install --silent --production && mv node_modules ../
EXPOSE 5000
CMD [ "yarn", "start"]

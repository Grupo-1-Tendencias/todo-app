FROM node:14-alpine as builder
ENV NODE_ENV=development
ENV PATH /usr/src/app/backend/node_modules/.bin:$PATH

WORKDIR /usr/src/app/backend
COPY ["package.json", "yarn.lock", "./"]
COPY . .
RUN yarn install --silent
RUN yarn compile

# Backend
FROM node:14-alpine
ENV APP_ID=backend
ENV PORT=5000
ENV LOG_LEVEL=debug
ENV REQUEST_LIMIT=100kb
ENV SESSION_SECRET=mySecret

# Swagger
ENV SWAGGER_API_SPEC=/api/spec

WORKDIR /usr/src/app/backend
COPY --from=builder /usr/src/app/backend /usr/src/app/backend
RUN rm -rf node_modules && yarn install --frozen-lockfile --silent --production
EXPOSE 5000
CMD [ "yarn", "start"]

FROM node:14-alpine as builder

WORKDIR /usr/src/app/client
ENV PATH /usr/src/app/client/node_modules/.bin:$PATH
COPY ["package.json", "yarn.lock", "./"]
RUN rm -rf node_modules && yarn install --frozen-lockfile --silent
RUN npm i react-scripts@latest -g --silent
COPY . .
RUN yarn build

# Client
FROM nginx:stable-alpine
COPY --from=builder /usr/src/app/client/build /usr/share/nginx/html
RUN ls /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
FROM node:14-alpine as builder

WORKDIR /usr/src/app/client
ENV PATH=/usr/src/app/client/node_modules:$PATH
COPY ["package.json", "yarn.lock", "./"]
RUN rm -rf node_modules && yarn install --frozen-lockfile --silent
RUN npm i react-scripts -g --silent
COPY . .
RUN yarn build

# Client
FROM nginx:stable-alpine
ENV ENV BACKEND_URL=https://g1-todo-app-server.herokuapp.com/
ENV REACT_APP_BACKEND_URL=https://g1-todo-app-server.herokuapp.com/

COPY --from=builder /usr/src/app/client/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
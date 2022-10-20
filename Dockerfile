FROM centos:centos7.9.2009 AS build
RUN mkdir -p /data/node
WORKDIR /data/node
RUN curl https://nodejs.org/dist/v16.18.0/node-v16.18.0-linux-x64.tar.xz > node-v16.18.0-linux-x64.tar.xz
RUN xz -d node-v16.18.0-linux-x64.tar.xz && tar -xvf node-v16.18.0-linux-x64.tar && rm -f node-v16.18.0-linux-x64.tar
RUN mv node-v16.18.0-linux-x64 /usr/local/nodejs && ln -s /usr/local/nodejs/bin/node /usr/local/bin/ && ln -s /usr/local/nodejs/bin/npm /usr/local/bin/
RUN npm config set registry https://registry.npm.taobao.org --global
COPY ./src/ /data/node/
WORKDIR /data/node/metatoc-ui
ARG tag
RUN npm install && npm run build:${tag}

FROM nginx:1.21.6
COPY --from=build /data/node/metatoc-ui/dist/ /usr/share/nginx/html
RUN mkdir -p /usr/share/nginx/html/src/assets
COPY --from=build /data/node/metatoc-ui/src/assets/ /usr/share/nginx/html/src/assets
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]

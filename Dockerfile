FROM node:17.5.0-alpine3.14
COPY . build
WORKDIR build
RUN yarn install --progress=false && yarn build


FROM nginx:1.19.3-alpine
RUN echo "server { listen 80; server_name _; location / { alias /usr/share/nginx/html/; index index.html; try_files \$uri \$uri/ /index.html =404;} }" > /etc/nginx/conf.d/default.conf
COPY --from=0 /build/build /usr/share/nginx/html

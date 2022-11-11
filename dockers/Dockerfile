FROM node:18-slim  AS builder

RUN mkdir /usr/src/atdc_mng_front_ts
WORKDIR /usr/src/atdc_mng_front_ts

ENV PATH /usr/src/atdc_mng_front_ts/node_modules/.bin:$PATH

COPY package.json /usr/src/atdc_mng_front_ts/package.json

COPY package.json yarn.lock./
RUN yarn install --silent

COPY . /usr/src/atdc_mng_front_ts
RUN npm run build

FROM nginx:latest

RUN rm -rf /etc/nginx/nginx.conf
COPY ./conf/nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /usr/src/atdc_mng_front_ts/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


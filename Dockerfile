FROM node:12

WORKDIR /usr/src/app
COPY ./ /usr/src/app

RUN yarn install
RUN yarn build

ENV PORT 3000
EXPOSE $PORT

CMD yarn start
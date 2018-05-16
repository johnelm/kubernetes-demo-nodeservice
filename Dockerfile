FROM node:10.1.0

RUN mkdir -p /usr/src/app
COPY . /usr/src/app

WORKDIR /usr/src/app
RUN npm install
RUN npm run compile
COPY .env build/

EXPOSE 3000

CMD [ "npm", "start" ]

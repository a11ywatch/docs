FROM node:12.0.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "yarn", "run", "start", "--port", "3001" ]

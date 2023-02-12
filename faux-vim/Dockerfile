FROM node:14-alpine

WORKDIR /app

COPY faux-vim .

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "node", "app.js" ]

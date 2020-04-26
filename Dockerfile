FROM node:10

WORKDIR /usr/src/myapp

COPY package*.json ./

RUN npm install

EXPOSE 4202

CMD ["npm", "start"]

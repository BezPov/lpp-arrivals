FROM node:12.13

WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . .

EXPOSE 8090

CMD ["npm", "start"]
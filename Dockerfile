FROM node:10.16

WORKDIR /usr/app

RUN npm install yarn -g

COPY package*.json ./

RUN yarn

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]
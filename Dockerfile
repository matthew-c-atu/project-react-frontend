FROM node:21-alpine

WORKDIR /app

COPY . .

RUN npm install

RUN npm install -g serve

RUN npm run build

EXPOSE 9000

CMD ["serve", "-sl", "9000", "dist/"]





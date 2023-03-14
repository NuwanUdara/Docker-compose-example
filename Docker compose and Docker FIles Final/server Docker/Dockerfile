FROM alpine:latest

RUN apk add --update nodejs npm

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache

USER appuser

EXPOSE 3001

CMD ["npm", "start"]

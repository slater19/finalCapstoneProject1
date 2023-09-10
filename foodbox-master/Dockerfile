FROM node:18-alpine
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

CMD ["node", "server.js"]
EXPOSE 4200
# COPY --from=node /app/dist/food-box-front-end  /usr/share/nginx/html
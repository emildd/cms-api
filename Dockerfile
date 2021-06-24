FROM node:14-alpine 
LABEL Name=cms-api Version=1.0

WORKDIR /app 

# ENV
ENV NODE_ENV=development
ENV APP_NAME=cms-api
ENV PORT=2020
ENV DB_USER=root
ENV DB_NAME=cms
ENV DB_PASSWORD=''
ENV DB_PORT=3306
ENV DB_HOST=127.0.0.1

ADD . .
# COPY package.json package-lock.json /app

RUN npm install

EXPOSE 2020
CMD ["npm", "start"]
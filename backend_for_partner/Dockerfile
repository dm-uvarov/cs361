# source image for building app
# FROM node:18
FROM node:lts-alpine

# create working app directory
WORKDIR /backend_for_partner/app


# install app depencies
# copy package .json
COPY package*.json ./

# installing depencies
RUN npm install

# for production should be
# RUN npm ci --only=production

# bundle app source
COPY . .

# port number 
EXPOSE 4000

RUN npm start

# running service
CMD [ "node", "microservice.mjs" ]
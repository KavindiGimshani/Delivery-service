FROM node:latest

# Set working director
RUN mkdir /usr/src/app
WORKDIR /usr/src

# add `/usr/src/node_modules/.bin` to $PATH
ENV PATH /usr/src/node_modules/.bin:$PATH

# Install and cache app dependencies
ADD package.json /usr/src/package.json

COPY . .

RUN npm install

EXPOSE 3001

# Start app
CMD ["npm", "start"]
FROM node:19

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# cd into frontend directory
WORKDIR /usr/src/app/frontend
RUN npm install
WORKDIR /usr/src/app/backend
RUN npm install


EXPOSE 3000

CMD [ "npm", "run", "dev" ]


FROM node:lts-iron
WORKDIR /the-alpaca-factory
COPY . .
RUN npm install
EXPOSE 4321
CMD ["npm", "run", "dev", "--verbose"]
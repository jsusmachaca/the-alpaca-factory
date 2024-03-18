FROM node:lts-iron as build
WORKDIR /the-alpaca-factory
COPY . .
RUN npm install
RUN npm run build

FROM node:lts-iron

WORKDIR /the-alpaca-factory
COPY --from=build /the-alpaca-factory/dist ./dist
COPY --from=build /the-alpaca-factory/node_modules ./node_modules

ENV PORT=80
ENV API_KEY=apikey
ENV ADDRESSEE=email

EXPOSE 80

CMD ["node", "dist/server/entry.js"]
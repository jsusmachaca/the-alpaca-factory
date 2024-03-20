FROM node:lts-iron as build
WORKDIR /the-alpaca-factory
COPY . .

RUN npm install
RUN npm run build

FROM node:lts-iron

ENV API_KEY=apikey
ENV ADDRESSEE=email

ENV PORT=80
ENV HOST=0.0.0.0

WORKDIR /the-alpaca-factory
COPY --from=build /the-alpaca-factory/dist ./dist
COPY --from=build /the-alpaca-factory/node_modules ./node_modules

EXPOSE 80

CMD ["node", "dist/server/entry.mjs"]
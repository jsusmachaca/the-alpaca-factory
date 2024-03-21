# THE ALPACA FACTORY 

Application for The Alpaca Factory services.
Services designed for private brands.

# Execution

## Production
First we must edit the following lines of our Dockerfile and docker-compose files

### In docker-compose.yml
```
environment:
    - API_KEY=apikey
    - ADDRESSEE=email
```

Instead of apikey you must use your API KEY provided by SendGrid for the correct operation of sending emails. 
`
API_KEY=modify your API KEY
`

You will have to change the email you used to create the API KEY.
`
ADDRESSEE=modify your email
`

Finally use the following commands to lift the service.
```sh
docker compose up  -d
```


## Development
For development mode we will have to configure our **Dockerfile.dev** to use email sending.

### In Dockerfile.dev
We must modify the following lines using our API KEY and email.
`ENV API_KEY=apikey
`
`
ENV ADDRESSEE=email
`

Finally, with the following commands we will run the project in development mode.
```sh
docker compose -f docker-compose-dev.yml up
```

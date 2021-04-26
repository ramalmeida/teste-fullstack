FROM node:alpine3.13 as development

RUN mkdir /app

WORKDIR /app

COPY ./package.json ./

RUN  npm i

COPY ./src ./src

COPY ./.eslintrc.js ./
COPY ./nest-cli.json ./

COPY ./tsconfig.build.json ./

COPY ./tsconfig.json ./

EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]

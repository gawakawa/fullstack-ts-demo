FROM node:22-slim

WORKDIR /app

COPY package.json yarn.lock ./
COPY packages/backend/package.json ./packages/backend/
COPY packages/common/package.json ./packages/common/

RUN yarn install

COPY . .

WORKDIR /app/packages/backend

CMD ["yarn", "start:dev"]

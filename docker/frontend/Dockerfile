FROM node:22-slim

WORKDIR /app

COPY package.json yarn.lock ./
COPY packages/frontend/package.json ./packages/frontend/
COPY packages/common/package.json ./packages/common/

RUN yarn install

COPY . .

WORKDIR /app/packages/frontend

CMD ["yarn", "dev", "--host"]

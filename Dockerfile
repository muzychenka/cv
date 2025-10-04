FROM node:20.11.0

WORKDIR /cv-frontend

ARG GTM
ENV GTM=$GTM

COPY package.json pnpm-lock.yaml ./
RUN npm i -g pnpm
RUN pnpm i
COPY . .

RUN npm run build

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
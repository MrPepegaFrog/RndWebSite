FROM node:20-alpine AS base
RUN npm install --global pnpm

FROM base as dependencies
WORKDIR /dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

FROM base as builder
WORKDIR /builder
COPY . .
COPY --from=dependencies /dependencies/node_modules ./node_modules
RUN pnpm build

FROM base
WORKDIR /app
ENV NODE_ENV production

RUN pnpm add express@4.18.3

COPY --from=builder /builder/dist ./dist
COPY --from=builder /builder/server.js .
COPY --from=builder /builder/package.json .

USER root

ENTRYPOINT ["pnpm", "start"]
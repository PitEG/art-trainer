FROM node:lts-slim AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS prod

WORKDIR /app
COPY pnpm-lock.yaml /app
RUN pnpm fetch --prod

COPY . /app
RUN pnpm install --prod
RUN pnpm update --prod
RUN pnpm build

FROM nginx:stable-alpine-slim
COPY --from=prod /app/dist /usr/share/nginx/html
COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD [ "nginx","-g","daemon off;"]

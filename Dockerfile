FROM alpine:latest AS buildTSC
ENV NODE_VERSION=~14
ARG NPM_TOKEN
WORKDIR /usr/pal-backend
RUN apk --update add --no-cache nodejs=${NODE_VERSION} nodejs-npm
COPY package*.json ./
COPY .npmrc .npmrc

RUN echo $'\n//npm.pkg.github.com/:_authToken=${NPM_TOKEN}' >> .npmrc \
    && npm install --no-fund --no-optional --no-audit --ignore-scripts \
    && rm -f .npmrc

COPY . .
RUN /usr/pal-backend/node_modules/typescript/bin/tsc -p /usr/pal-backend/tsconfig.json

FROM alpine:latest AS buildMODULES
ENV NODE_VERSION=~14
ARG NPM_TOKEN
WORKDIR /usr/pal-backend
RUN apk --update add --no-cache nodejs=${NODE_VERSION} nodejs-npm
COPY package*.json ./
COPY .npmrc .npmrc

RUN echo $'\n//npm.pkg.github.com/:_authToken=${NPM_TOKEN}' >> .npmrc \
    && npm install --production --no-fund --no-optional --no-audit --ignore-scripts \
    && rm -f .npmrc \
    && npm uninstall bcrypt \
    && npm i bcrypt

FROM alpine:latest
ENV NODE_VERSION=~14
WORKDIR /usr/pal-backend

RUN addgroup -g 1000 node \
    && adduser -u 1000 -G node -s /bin/sh -D node \
    && apk --update add --no-cache nodejs=${NODE_VERSION}

USER node

COPY --from=buildMODULES usr/pal-backend/ ./
COPY --from=buildTSC usr/pal-backend/dist ./dist

ENTRYPOINT ["node", "."]
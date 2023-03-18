FROM node:18.14.2-alpine as base
RUN mkdir -p /opt/client
WORKDIR /opt/client
RUN adduser -S client
RUN chown -R client /opt/client
COPY package*.json ./

# DEVELOPMENT CLIENT PROFILE
FROM base as development
ENV NODE_ENV=development
RUN npm install && npm cache clean --force
COPY . ./
EXPOSE 3000
CMD ["npm", "run", "dev"]

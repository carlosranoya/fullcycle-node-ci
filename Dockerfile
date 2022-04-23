# Container image that runs your code
FROM node:16

# Copies your code file from your action repository to the filesystem path `/` of the container
COPY entrypoint.sh /entrypoint.sh
COPY package-lock.json /package-lock.json
COPY package.json /package.json
COPY index.js /index.js
COPY src src

RUN npm install
RUN npm test
RUN node index

# Code file to execute when the docker container starts up (`entrypoint.sh`)
ENTRYPOINT ["/entrypoint.sh"]

CMD ["Josias"]
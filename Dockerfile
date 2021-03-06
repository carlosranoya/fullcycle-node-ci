ARG NODE_VERSION=node:16
# Container image that runs your code
# ARG NODE_VERSION=node:16
FROM ${NODE_VERSION}

# RUN echo ${NODE_VERSION}

# Copies your code file from your action repository to the filesystem path `/` of the container
COPY entrypoint.sh package-lock.json index.js ./
# COPY package-lock.json /package-lock.json
# COPY package.json /package.json
# COPY index.js /index.js
# COPY buildNodeDockerfile.js /buildNodeDockerfile.js
COPY src src

RUN ls
RUN node --version && npm install && npm test
# RUN npm install
# RUN npm test
# RUN node index

# Code file to execute when the docker container starts up (`entrypoint.sh`)
ENTRYPOINT ["/entrypoint.sh"]

CMD ["Adalberto"]

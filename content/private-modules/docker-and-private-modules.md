<!--
title: 03 - Docker and private packages
featured: true
-->

# Docker and private packages

If you've read through [Working with private packages](/private-modules/intro), you'll know that in order to use private packages, you need to be [logged in](/cli/adduser) to npm via the npm CLI.

If you're using npm private packages in an environment where you're not directly able to log in, such as inside a [CI Server](/private-modules/ci-server-config) or a [Docker](https://www.docker.com/) container, you'll need to get and export an npm token as an environment variable. That token should look like `NPM_TOKEN=00000000-0000-0000-0000-000000000000`.

The [Getting an Authentication Token](/private-modules/ci-server-config#getting-an-authentication-token) should help you generate that token.

If this is the workflow you need, please read the [CI Server Config doc](/private-modules/ci-server-config). If that works with your system, then, perfect.

If it doesn't, here we'll look at the problems with this workflow when running `npm install` inside a Docker container.

## Runtime Variables

If you had the following Dockerfile:

```
FROM risingstack/alpine:3.3-v4.3.1-3.0.1

COPY package.json package.json  
RUN npm install

# Add your source files
COPY . .  
CMD npm start  
```

Which will use the RisingStack [Alpine Node.JS Docker image](https://hub.docker.com/r/risingstack/alpine/), copy the `package.json` into our container, installs dependencies, copies the source files and runs the start command as specified in the `package.json`.

In order to install private packages, you may think that we could just add a line before we run `npm install`, using the [ENV parameter](https://docs.docker.com/engine/reference/builder/#env):

```
ENV NPM_TOKEN=00000000-0000-0000-0000-000000000000
```

However, this doesn't work as you would expect, because you want the npm install to occur when you run `docker build`, and in this instance, `ENV` variables aren't used, they are set for runtime only.

## Build-time variables

We have to take advantage of a different way of passing environment variables to Docker, available since Docker 1.9. We'll use the slightly confusingly named [ARG parameter](https://docs.docker.com/engine/reference/builder/#arg).

A complete example that will allow us to use `--build-arg` to pass in our NPM_TOKEN requires adding a `.npmrc` file to the project. That file should contain the following content:

```
//registry.npmjs.org/:_authToken=${NPM_TOKEN}
```

The Dockerfile that takes advantage of this has a few more lines in it than our example earlier that allows us to use the `.npmrc` file and the `ARG` parameter.

```
FROM risingstack/alpine:3.3-v4.3.1-3.0.1

ARG NPM_TOKEN  
COPY .npmrc .npmrc  
COPY package.json package.json  
RUN npm install  
RUN rm -f .npmrc

# Add your source files
COPY . .  
CMD npm start
```

This adds the expected `ARG NPM_TOKEN`, but also copies the `.npmrc` file, and removes it when npm install completes.

To build the image using this Dockerfile and the token, you can run the following (note the `.` at the end to give docker build the current directory as an argument):

```
docker build --build-arg NPM_TOKEN=${NPM_TOKEN} .
```

This will take your current `NPM_TOKEN` environment variable, and will build the Docker image using it, so you can run `npm install` inside your container as the current logged in user!

Note: Even if you delete the `.npmrc` file, it'll be kept in the commit history - to clean your secret up entirely make sure to squash them.

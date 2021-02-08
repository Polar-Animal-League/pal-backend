# Backend

## Generating an access token

First, you have to generate a github token.
To do this, log in into Github, and go to `Settings`.
There, go to `Developer Settings`, and choose the `Personal access tokens` tab.
Click on `Generate new token`, and name your token how you want (We suggest NPM_TOKEN).
Then, select all `repo` permissions, and the `package:read` permission (If you will be modifying the Shared library, check the `package:write` too).
When you generate the token - COPY IT SOMEWHERE - you will NOT see it again!

## Logging in locally

To set up the NPM for the local installation, you have to do:
`npm login --scope=@Polar-Animal-League --registry=https://npm.pkg.github.com/`
You will be prompted to type in:
your username (lower-case letters),
password (Token you have generated earlier),
and your email

If everything was successful, you should be able to do `npm install` and everything should work fine.
You can then start working on the app, but if you want to test it locally, look up the next step.

## Setting up the Docker watch

You can (and should) use Docker to test the application in a repeatable, easily manageable environment.
To set the Docker properly, you have to create a `.env` file in the repository directory.
We have provided a template (`.env.template`) to ease up the configuration.
For the NPM_TOKEN variable you should put your token obtained from github.

Do not worry - .env files are ignored by git, so they will not be commited, keeping your token safe.

After you have set up your .env file, simply type `npm run dev:watch` to run the docker container with a watcher, that will automatically restart the container when you change some code.
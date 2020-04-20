![Allors Docs CI](https://github.com/Allors/Docs/workflows/Allors%20Docs%20CI/badge.svg)

# Website https://allors.github.io/Docs/

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

#### The website is automagically built and published when someone contributes. Though not required, there is also another way to do it manually.

On Windows

```
cmd /C "set "GIT_USER=<>"&& set CURRENT_BRANCH=master && set USE_SSH=false && yarn run deploy"
```

If you are contributing, this command is a convenient way to update the website content manually from your development machine.

Keep contributing.

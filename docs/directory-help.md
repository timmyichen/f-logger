# What are all these folders and files?

(folders end in a slash)

## `client/`

This contains most of the front-end code.  Most everything here will be JavaScript files, since we are using React.

## `docs/`

Markdown files that have all the documentation for this project.  Github renders markdown files nicely.

## `node_modules/`

When you run `npm install` to install this project's dependencies, this is where all the packages go - into `node_modules/`.  Sometimes it's necessary to delete the folder entirely so you can use `npm install` again with a clean slate.

## `public/`

Contains all the public assets that are sent to the user, like CSS files.  All our react code is bundled into a single JS file that gets served from here as well.

## `server/`

Contains all the code needed to run the server.

### `server/lib/`

Custom libraries that we write - usually utility functions that might be used across the server.

### `server/middleware/`

Middleware are functions that modify a request, then sends that request along to the next middleware (or endpoint).  Sometimes middleware will stop a request though.

### `server/models/`

Contains Schemas (describing each model in our database)

### `server/routers/`

Routers handle all requests and route them to the correct endpoint.  This is where most of the code goes.

### `server/views/`

We use nunjucks as a templating engine but we don't use it that much - you can find the HTML files that are being served from here.  This can be pretty much ignored.

### `server/config.js`

File that contains configuration settings for our server.  This is custom made; we can add whatever we want to this.

### `server/index.js`

The main server starting point.  Everything starts from here.

## `.babelrc`

Babel is a transpiler - it takes the JavaScript we write on our front end and transpiles it so that even though we write code using newer JS features, older browsers (which don't have those features) can still understand the code we write.  `.babelrc` just has our babel settings.

## `.eslintrc.json`

ESLint is what we use to lint our code - linting code is just checking it for style, readability, and errors.  This is where the ESLint config goes.

## `.gitignore`

Sometimes we don't want certain files to be put on our git repository, like the `node_modules/` folder, because we can get it anytime with `npm install` and its a ton of code that doesn't pertain to our project.  `.gitignore` is just a list of files and folders that we want git to ignore.

## `package.json`

This contains a list of all the project's scripts and dependencies.

## `webpack.config.js`

Webpack is the bundler for all our React code - we don't actually serve React straight to our users; webpack takes all our react code and bundles it up into a single JavaScript file which we then serve to our users.  This contains all the webpack config information.
## Youtube React App

A simple frontend React application written in ES6 JSX and compiled using Babel & Webpack with Gulp.

I decided to only use the Bootstrap grid for this project as I didn't want the default styles provided by the framework. Gulp was added early on in the build process to allow for quick compilation of the code, and later minification was included too as part of this process.

The project initially had a more complex JS component structure, but this was stripped back after considering the end goal. For this same reason, React Router wasn't used as React's in-built state could instead be used in order to achieve the desired effect.

To view the project online, simply go to ___.


## Getting setup locally
If you would like to otherwise run the project locally then you will need to setup the project by doing the following:

1. Run `npm install` to install the package dependencies.
2. Run `gulp build` to build both the JavaScript and CSS dist files required to run the project.
3. In your CLI run a local server such as the simple python server `python -m SimpleHTTPServer`. (Alternatively, `npm start` can be run if you plan to make any local changes too as this also triggers a `gulp watch`)
4. You should now be able to view the project by going to `localhost:8000`
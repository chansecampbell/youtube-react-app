## Youtube React App

A simple frontend React application written in ES6 JSX and compiled using Babel & Webpack with Gulp.

I decided to only use the Bootstrap grid for this project as I didn't want the default styles provided by the framework. Gulp was added early on in the build process to allow for quick compilation of the code, and later minification was included too as part of this process for production only.

The project initially had a more complex JS component structure, but this was stripped back after considering the end goal. For this same reason, React Router wasn't used as React's in-built state could instead be used in order to achieve the desired effect. The website can be found [here](https://chanses-youtube-playlist.herokuapp.com/).

## Getting setup locally
If you would like to run the project locally instead then you will need to setup the project by doing the following:

1. `npm install` to install the package dependencies.
2. `gulp build-dev` to build both the JavaScript and CSS dist files required to run the project.
3. Finally, run `npm start` from your CLI to start the node server. The website should now be viewable locally at [http://localhost:3000/](http://localhost:3000/).
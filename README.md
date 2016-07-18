## Character Backstory Generator
This is an app built to display knowledge of AngularJS fundamentals. It utilizes a modular app design.

To build, you'll need to install the required NPM packages, then run gulp from within the project directory.

The gulpfile will automatically build the public folder from the dev folders. It moves necessary templates and media,
bundles the AngularJS files, and compiles the SCSS. While gulp is running, any changes to the dev directory will
automatically trigger corresponding gulp scripts and update the public directory accordingly.

Run server.js with node to serve public/ locally, or serve public/ with your static server of choice.

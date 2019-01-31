# parcel-reactor
parcel-react bootstrapper

Version 1.2.0: Added css import capibilites and support for syntax with test option build. 

Easy way to get a React project off the ground using parcel. Gives nearly the same functionality as create-react-app.

NOTE: if you are new to JavaScript or React, you might want to run:

    rm .eslintrc.json

or adjust these settings.

Eslint settings are relatively strict by default. 

run:

    npm i -g parcel-reactor

now go to the directory where you want to initilize your repository and run:

    parcel-reactor hello-world

    cd hello-world
    
    npm i

Version 1.1.0 or newer you can add testing:
    
    parcel-reactor hello-world -t

or

    parcel-reactor -t hello-world

This will setup testing with enzyme and jest in your project.
To make sure the tests are working run:

    npm run test
    
You may need to install parcel, follow the instructions here if you haven't installed parcel yet:

  https://parceljs.org/getting_started.html
  
This was tested on Linux (Ubuntu 18.04) after running:

    npm install -g parcel-bundler
    
Your results may very on other operating systems or with non-global installs of parcel. 

Enjoy!

https://github.com/UniWrighte/parcel-reactor

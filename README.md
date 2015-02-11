##CHESS GAME

I'm bored and throwing things together. 

##Run Locally

Install all the dependencies:

    `npm install`

To run tests, type:

    `jasmine-node .`

If you want tests to execute every time you change a file:

    `jasmine-node . --autotest --watch .`

Run the app:

    `node server.js`

Then navigate to `http://localhost:3000`

###Documentation 

I did have this on Azure, but am running out of free money on it. 

Install the command line tools from here:

http://www.windowsazure.com/en-us/downloads/#cmd-line-tools 

Then

    `azure account download`

    `azure acount import %downloaded_file%`

Next create the site, with a git backed repository:
    
    `azure site create %name% --git`

Deploy site:

    `git push azure master`


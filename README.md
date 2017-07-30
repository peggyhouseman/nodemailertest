
     ,-----.,--.                  ,--. ,---.   ,--.,------.  ,------.
    '  .--./|  | ,---. ,--.,--. ,-|  || o   \  |  ||  .-.  \ |  .---'
    |  |    |  || .-. ||  ||  |' .-. |`..'  |  |  ||  |  \  :|  `--, 
    '  '--'\|  |' '-' ''  ''  '\ `-' | .'  /   |  ||  '--'  /|  `---.
     `-----'`--' `---'  `----'  `---'  `--'    `--'`-------' `------'
    ----------------------------------------------------------------- 


Welcome to your Node.js project on Cloud9 IDE!

This chat example showcases how to use `socket.io` with a static `express` server.

## Running the server

1) Open `server.js` and start the app by clicking on the "Run" button in the top menu.

2) Alternatively you can launch the app from the Terminal:

    $ node server.js

Once the server is running, open the project in the shape of 'https://projectname-username.c9users.io/'. As you enter your name, watch the Users list (on the left) update. Once you press Enter or Send, the message is shared with all connected clients.


## Setup

https://codeforgeek.com/2014/07/send-e-mail-node-js/

update package.json with express and nodemailer "latest"
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
command -v nvm
nvm install node
node --version
npm install
node server to run

be sure to point server.js port to 8080 to preview index.html
update js and css to cdn (error loading for some reason)
load with preview in new tab and remove "s" from https to run on just http (otherwise mixed content error)

#Testing
npm install --save-dev mocha
npm install --save-dev chai
npm install --save-dev chai-http
npm install --save-dev mockery
npm install --save-dev nodemailer-mock
create folder test
create {{file}}.js for testing

#Reading
https://en.wikipedia.org/wiki/SOLID_(object-oriented_design)
https://en.wikipedia.org/wiki/Object-oriented_programming
https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75
https://stackoverflow.com/questions/652292/what-is-unit-testing-and-how-do-you-do-it
https://stackoverflow.com/questions/130794/what-is-dependency-injection
https://medium.com/@Jeffijoe/dependency-injection-in-node-js-2016-edition-f2a88efdd427
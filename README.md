# Learn Node TDD

This is an introduction to Test Driven Development for Node.js. This guide includes details on installing Tape, setting up a testing environment, writing a basic server test, and installing pre-commit hooks with Travis and Code Climate.

## Why TDD?

Test Driven Development is an important part of writing consistent, collaborative and reliable code. If you're a newcomer to TDD entirely, [this tutorial from DWYL](https://github.com/dwyl/learn-tdd) is a great introduction to the very basic WHY and HOW of testing.

## What is Tape?

Tape is an npm module for testing. It's one of many popular frameworks for testing Node.js (you might also want to look at Lab, Shot, Mocha or Jasmine). As one of the simplest and easiest testing frameworks to master, we'll be using it for this tutorial.

## Installing Tape

To install Tape, run this command whilst inside the folder for your repository.

```npm install tape --save-dev```

The `--save-dev` tail to the command makes sure it is listed as a development dependency in your `package.json` file. This means that anybody else working on your project can easily find out what needs to be installed for the codebase to run. Anybody else can now install Tape simply by running `npm install`.

## Folder Structure

You will need to create a folder in your project called `/test/`. This is where all your tests will live. You can structure your tests however you see fit within this folder.

Create a file called something like `tests.js`. Although in the future you might like to modularise your tests (eg. `api-tests.js`, `db-tests.js`).

## Adding a Package.json Script

You have to set up a command in your `package.json` file in order to run the tests in the command line. This goes in the `scripts` section of the `package.json`. If this section doesn't already exist, add it (Note: you will need to use JSON structure). A script will look something like this:

```node
"scripts": {
    "test": "./node_modules/.bin/tape ./test/*"
  },
```

Now you can run your tests simply by using the command `npm run test`.

## Setting up your Test File

Start by requiring Tape at the top of your `tests.js` file:

`var test = require('Tape');`

Also make sure you require any relevant files, so you have access to what you need to test. If you're testing the server, require the files where you set that up.

`var server = require('../server.js');`

## Writing Tests with Tape

Now it's time to actually write some tests. You can find the full documentation for writing tests with Tape [here](https://github.com/substack/tape), but a basic test with Tape is structured like this:

```javascript
test("check 1 is equal to 1", function (t) {
    t.equal(1, 1, "success!");
    t.end();
});
```

### Check the Server is Running

After you've made this pass, you'll want to start by checking that your server is running. A good, basic test is to check that when visiting your homepage, the status code from the server is 200.

To write this test, you'll need to simulate an HTTP request to the server. Intense. But thankfully there's an npm module to help you out with that. Take a look at [Shot](https://www.npmjs.com/package/shot). You will need to install the module, save it to dev dependencies, and require it in your test file as a variable (if you don't remember how to do this, look above).

Within a Tape test, you will need to call the method `Shot.inject` with three parameters: the handler function from your server, the server route object for reaching the homepage (it'll be a GET request), and a callback function taking the parameter `res`. Log `res` to the console, and see if you can find the status code in the response.

Have fun...

## Stretch Goals

### Badges!

Once you get your test suite up and running, you'll want to let the world know. That's why we have pretty badges for our repos. The most useful ones are Travis and Code Climate. Check out [this rundown from DWYL](https://github.com/dwyl/repo-badges), then check out [Learn Travis](https://github.com/dwyl/learn-travis) and [Learn Code Climate](https://github.com/docdis/learn-codeclimate).

### Pre-commit Hooks!

You can set up scripts in your `package.json` to run your tests before you commit anything to GitHub. These are called "pre-commit hooks", and they're useful for guaranteeing code quality within your team. Look at an npm package called [Pre-commit](https://www.npmjs.com/package/pre-commit).

# PingThings Website Source Code

### Getting Started

Just clone the repo, install Node.js modules and run `npm start`:

```
$ npm install
$ npm start
```

Then open [http://localhost:3000/](http://localhost:3000/) in your browser.

### Directory Layout
```
.
├── /build/                     # The folder for compiled output
├── /node_modules/              # 3rd-party libraries and utilities
├── /components/                # React components
├── /core/                      # Core framework
├── /pages/                     # React.js-based web pages
├── /static/                    # Static files such as favicon.ico etc.
├── /test/                      # Unit and integration tests
├── /tools/                     # Build automation scripts and utilities
│── app.js                      # The main JavaScript file (entry point)
│── config.js                   # Website configuration / settings
│── LICENSE.txt                 # License file
│── package.json                # Dev dependencies and NPM scripts
└── README.md                   # Project overview
```

### How to Test

The unit tests are powered by [chai](http://chaijs.com/) and [mocha](http://mochajs.org/).

```
$ npm test
```

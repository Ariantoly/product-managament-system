
module.exports = {
  // define your collab or standalone app here
  app: {
    // script to run collab or standalone app in no mock mode
    script: 'dev-nomock',
    // url to app.js file for collab, and localhost+port for standalone app
    waitUrls: ['http-get://localhost:8080/src/main.js'],
    // api mock path
    mockPaths: ['/src/api-mock/modules/index']
  },
  playwright: {
    headless: true, // default to true
    devtools: false,
    debug: false,
    inspector: false,
    bail: false
  },
  jest: {
    // in local default to 50% cpu thread number and 28 cpu in CI
    // maxWorkers: '50%', uncomment this if you need to override the default value
    // test target files
    testMatch: [
      '<rootDir>/integrations/specs/**/*.spec.js'
    ]
  },
  // remove this attribute if you do not use unit testing
  unitTest: {
    // path to coverage final json file from unit test
    coverageFinalJsonPaths: ['test/unit/coverage/coverage-final.json']
  },
  // remove this attribute if you do not need to mock
  mock: {
    // you can add array of url(s) here using regex
    urls: [
      // example url that needs to be mocked: /maps.google.com/
    ]
  }
}
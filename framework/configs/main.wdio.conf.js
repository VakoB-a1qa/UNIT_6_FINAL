import path from "node:path";
import fs from "fs-extra";
import os from "os"

export const downloadDir = path.resolve("./tmp");

export const mainConfig = {
  /*
  runner: 'local',
  exclude: [
  ],
  maxInstances: 1,
  logLevel: 'warn',
  bail: 0,
  waitforTimeout: 0,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: 'mocha',
  mochaOpts: {
      ui: 'bdd',
      timeout: 60000
  },
  */
  runner: "local",
  exclude: [],
  maxInstances: 1,
  baseUrl: "http://uitestingplayground.com/",
  logLevel: "warn",
  bail: 0,
  waitforTimeout: 0,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
      },
    ],
  ],

  onPrepare: function () {
    fs.ensureDir(downloadDir);
    // const newFilePath = path.join("allure-results", "environment.properties");


    // if (!fs.existsSync(newFilePath) && fs.existsSync("allure-results")) {
    //   const environmentInfo = `browser=chrome\nos=${os.platform()}\nbuild_version=${os.version()}`;
    //   fs.writeFileSync(newFilePath, environmentInfo);
    // }
  },

  after: function (result, capabilities, specs) {
    fs.emptyDir(downloadDir);
  },

  afterTest: async function (
    test,
    context,
    { error, result, duration, passed, retries }
  ) {
    if (!passed) {
      await browser.takeScreenshot();
    }
  },
};

const path = require("path");
const { execSync } = require("child_process");

function start() {
  execSync("docusaurus start", {
    cwd: path.resolve(__dirname, `../src/${process.env.PROJECT}`),
  });
}

start();

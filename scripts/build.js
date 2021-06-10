const path = require("path");
const { execSync } = require("child_process");

function build() {
  execSync("docusaurus build", {
    cwd: path.resolve(__dirname, `../src/${process.env.PROJECT}`),
  });
}

build();

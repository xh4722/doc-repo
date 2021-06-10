const path = require("path");
const { execSync } = require("child_process");

function build() {
  try {
    execSync("docusaurus build", {
      cwd: path.resolve(__dirname, `../src/${process.env.PROJECT}`),
    });
  } catch (err) {
    console.error(err.output);
  }
}

build();

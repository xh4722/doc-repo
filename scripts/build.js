const path = require("path");
const { execSync } = require("child_process");

function build() {
  try {
    execSync("docusaurus build", {
      cwd: path.resolve(__dirname, `../src/${process.env.PROJECT}`),
    });
  } catch (err) {
    const errors =
      (err.output || []).map((item) =>
        item ? item.toString("utf-8") : item
      ) || [];
    console.error(errors.join(""));
  }
}

build();

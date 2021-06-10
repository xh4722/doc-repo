const fs = require("fs-extra");
const { join } = require("path");
const klaw = require("klaw");

async function getAllFiles(basePath) {
  let files = [];
  for await (const file of klaw(basePath)) {
    files.push({
      path: file.path.replace(basePath, "").replace(/^\//, ""),
      is_dir: file.stats.isDirectory(),
    });
  }

  return (files = files.filter((item) => !!item.path));
}

getAllFiles(join(__dirname, `../src/${process.env.PROJECT}/docs`)).then(
  (files) => {
    files = files.sort(
      (x, y) => x.path.split("/").length - y.path.split("/").length
    );

    const sidebar = { Default: [] };
    files.forEach((item) => {
      let parentPath = item.path.split("/");
      parentPath.pop();
      parentPath = parentPath.join("/");

      if (parentPath) {
        sidebar[parentPath].push(item.path.split(".")[0]);
      } else if (item.is_dir) {
        sidebar[item.path] = [];
      } else {
        sidebar.Default.push(item.path.split(".")[0]);
      }
    });

    console.log(sidebar);
  }
);

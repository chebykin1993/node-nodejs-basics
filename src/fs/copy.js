import fs from "fs";
import path from "path";

const copy = async (src, dest) => {
  const exist = fs.existsSync(src);
  const stats = exist && fs.statSync(src);
  const isDirectory = stats && stats.isDirectory();

  if (isDirectory) {
    if (fs.existsSync(dest)) {
      throw Error("FS operation failed");
    }
    if (!fs.existsSync(dest)) fs.mkdirSync(dest);

    fs.readdirSync(src).forEach((childItemName) => {
      copy(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    if (!fs.existsSync(dest)) fs.copyFileSync(src, dest);
  }

  if (!isDirectory) {
    throw Error("FS operation failed");
  }
};

await copy("./src/fs/files", "./src/fs/files_copy");
import fs, { existsSync } from "fs";

const create = async () => {
  if (!fs.existsSync("./src/fs/fresh.txt")) {
    fs.writeFile("./src/fs/fresh.txt", "I am fresh and young", (err) => {
      if (err) throw err;
    });
  } else {
    throw Error("FS operation failed");
  }
};

await create();
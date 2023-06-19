const parseEnv = () => {
  const obj = process.env;
  const arrKeys = Object.keys(obj);

  arrKeys.forEach((element) => {
    if (element.includes("RSS_")) {
      console.log(`${element}=${obj[element]}`);
    }
  });
};

parseEnv();
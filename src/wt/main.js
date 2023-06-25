
import { Worker } from "worker_threads";

const performCalculations = async (n, count) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker("./worker.js", { workerData: { n } });

    worker.on("message", resolve);
    worker.on("error", reject);
    worker.on("exit", (code) => {
      if (code !== 0) {
        reject(new Error(`stopped with exit code ${code}`));
      }
    });
  });
};

(async () => {
  try {
    const result = {
      firstworker: await performCalculations(10),
      firstworker: await performCalculations(11),
      firstworker: await performCalculations(12),
      firstworker: await performCalculations(13),
    };
    console.log(result);
  } catch (err) {
    console.log(err);
  }
})();
// await performCalculations();
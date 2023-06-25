import { workerData, parentPort } from "worker_threads";

const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const intensiveResult = nthFibonacci(workerData.n);

const sendResult = () => {
  parentPort.postMessage(`resolved - ${intensiveResult}`);
};

sendResult();
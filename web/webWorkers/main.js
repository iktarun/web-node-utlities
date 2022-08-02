console.log("Running main.js file");

// Create worker
const myWorker = new Worker("worker.js");

// Send message to worker
// myWorker.postMessage({ operation: "getAPIData" });

// Receive message from worker
myWorker.onmessage = function (e) {
  console.log("Message recieved from Worker: ", e.data);
};

// sleepThenAct();

function sleepThenAct() {
  myWorker.postMessage({ operation: "getAPIData" });
}

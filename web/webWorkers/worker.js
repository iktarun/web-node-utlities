console.log("Running worker.js file");
// Receive message from main file
self.onmessage = function (e) {
  console.log("Message recieved in worker file from main:", e.data);
  if (e.data.operation === "getAPIData") {
    self.getAPIData();
  }
};

// self.getAPIData = function () {
//   console.log("here...");
//   // Send message to main file
//   setTimeout(() => {
//     const workerResult = [{ name: "Tarun", age: 30 }];
//     self.postMessage(workerResult);
//   }, 4000);
// };

//Below 2 functions are removed from main.js as they were blocking the main thread
function sleepFor(sleepDuration) {
  var now = new Date().getTime();
  while (new Date().getTime() < now + sleepDuration) {
    /* Do nothing */
  }
}

function getAPIData() {
  sleepFor(9000);
  console.log("Hello, JavaScript sleep!");
}

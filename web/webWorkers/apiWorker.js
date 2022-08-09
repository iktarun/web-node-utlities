console.log("Running apiWorker.js file");
// Receive message from main file
self.onmessage = function (e) {
  console.log("Message recieved in worker file from main:", e.data);
  if (e.data.operation === "getAPIData") {
    self.getAPIData();
  }
};

function getAPIData() {
  fetch("http://localhost:4000/test-data", {
    method: "get", // *GET, POST, PUT, DELETE, etc.
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached)
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      self.postMessage(data);
    });
}

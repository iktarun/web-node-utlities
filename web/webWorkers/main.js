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

//Worker 2

// Create worker
const myAPIWorker = new Worker("apiWorker.js");

// Send message to worker
// myAPIWorker.postMessage({ operation: "getAPIData" });

// Receive message from worker
myAPIWorker.onmessage = function (e) {
  console.log("Message recieved from API Worker: ", e.data);
  let data = e.data;
  let dataContainer = document.getElementById("data");

  data.forEach((item) => {
    let div = document.createElement("div");
    let text = document.createTextNode(item.name);
    div.appendChild(text);
    dataContainer.appendChild(div);
  });
};

// sleepThenAct();

function getDataFromAPI() {
  myAPIWorker.postMessage({ operation: "getAPIData" });
}

// function getAPIData() {
//   fetch("http://localhost:4000/test-data", {
//     method: "get", // *GET, POST, PUT, DELETE, etc.
//     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached)
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// }

// getAPIData();

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/test-data", async function (req, res) {
  res.setHeader("Content-Type", "application/json");

  function getData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([{ name: "Tarun" }, { name: "Sapna" }]);
      }, 4000);
    });
  }
  let data = await getData();
  res.end(JSON.stringify(data));
});

app.listen(4000, () => {
  console.log("server is starting at port 4000");
});

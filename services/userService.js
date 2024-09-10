const express = require("express");
const db = require("../db/db");

const app = express();

//connect to db
db;

let arr = [];

app.use(express.json());
app.use(express.urlencoded({ extends: false }));

app.get("/getdata", (request, response) => {
  response.json({ data: arr });
});

app.post("/adddata", (request, response) => {
  arr.push(request.body.name);
  response.json({ data: "data added successfully" });
});

app.get("/editdata/:index", (request, response) => {
  let x;
  let y = arr.find((a, index) => {
    return index == request.params.index ? a : null;
  });
  response.json({ data: { name: y, index: request.params.index } });
});

app.put("/updatedata", (request, response) => {
  arr[request.body.index] = request.body.name;
  response.json({ data: arr });
});

app.delete("/deletedata/:index", (request, response) => {
  arr.splice(request.params.index, 1);
  response.json({ data: arr });
});

app.listen(3001, () => console.log("server run at port 3001"));

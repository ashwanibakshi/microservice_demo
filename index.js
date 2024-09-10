const express = require("express");
const dbs = require("./db/db");

const app = express();

//db connection
dbs;

app.use(express.json());
app.use(express.urlencoded({ extends: false }));

app.use("/api", require("./routes/routes"));

app.listen(3000, () => console.log("server run at port 3000"));

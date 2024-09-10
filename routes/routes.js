const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/getdata", (request, response, next) => {
  try {
    axios
      .get("http://localhost:3001/getdata")
      .then((data) => {
        response.send(data.data);
      })
      .catch((err) => {
        response.send(err);
      });
  } catch (error) {
    response.send(error);
  }
});

router.post("/adddata", (request, response) => {
  try {
    axios
      .post("http://localhost:3001/adddata", { name: request.body.name })
      .then((data) => {
        response.send(data.data);
      })
      .catch((err) => {
        response.send(err);
      });
  } catch (error) {
    response.send(error);
  }
});

router.get("/editdata/:index", (request, response) => {
  try {
    console.log(request.params.id);
    axios
      .get("http://localhost:3001/editdata/" + request.params.index)
      .then((data) => {
        response.send(data.data);
      })
      .catch((err) => {
        response.send(err);
      });
  } catch (error) {
    response.send(error);
  }
});

router.put("/updatedata", (request, response) => {
  try {
    axios
      .put("http://localhost:3001/updatedata", {
        name: request.body.name,
        index: request.body.index,
      })
      .then((data) => {
        response.send(data.data);
      })
      .catch((err) => {
        response.send(err);
      });
  } catch (error) {
    response.send(error);
  }
});

router.delete("/deletedata/:index", (request, response) => {
  try {
    axios
      .delete("http://localhost:3001/deletedata/" + request.params.index)
      .then((data) => {
        response.send(data.data);
      })
      .catch((err) => {
        response.send(err);
      });
  } catch (error) {
    response.send(error);
  }
});

module.exports = router;

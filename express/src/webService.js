var createError = require("http-errors");
var express = require("express");
var path = require("path");

const fs = require("fs");

//--------------------------------------------------------
const usePort = 80;
const WebServ = express();

WebServ.get("/", (req, res, next) => {
  console.log(req.query);
  let result = { test: 123 };
  Object.assign(result, req.query);
  res.json(result);
  return;
});

WebServ.post("/testpost", (req, res, next) => {
  console.log(req.query);
  let result = { test: 123 };
  Object.assign(result, req.query);
  res.json(result);
  return;
});

WebServ.get("/test/test", (req, res, next) => {
  let result = { test: 123 };
  res.json(result);
  return;
});

WebServ.use("/user", require("./router/user.js"));

function start() {
  WebServ.listen(usePort, () => {
    console.log("WebService listening on port " + usePort);
  });
}

module.exports = {
  start: start
};

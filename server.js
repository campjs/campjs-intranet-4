#!/usr/bin/env node

var connect_leg = require("connect-leg"),
    express = require("express"),
    http = require("http"),
    log = require("leg")(process.stdout);

var app = express();

app.use(connect_leg.logger(log));

app.use(express.static(__dirname + "/public"));

app.use(connect_leg.errorHandler(log));

var server = http.createServer(app);

server.listen(process.env.PORT || 3000, function() {
  console.log("listening", this.address());
});

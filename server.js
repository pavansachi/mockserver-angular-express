var mocks = require("./routes/expectations");

var express = require("express");

var app = express();

app.use('/v1/mockserver', mocks);

app.listen(3000, function() {
    console.log("app started on port 3000");
});
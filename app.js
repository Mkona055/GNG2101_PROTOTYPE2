const express = require("express");
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/pages'));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/pages/index.html");
    
});
app.listen(3000, function () {
    console.log("Server is running on localhost3000");
});
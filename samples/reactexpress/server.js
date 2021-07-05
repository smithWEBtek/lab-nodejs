const express = require('express');

const app = express();

app.get("/", function(req, res) {
  res.send('Express is here!')
})

app.use("/users/", require("./routes/usersRoute"));

app.listen('3001', function(){
  console.log("express listening on PORT 3001")
})
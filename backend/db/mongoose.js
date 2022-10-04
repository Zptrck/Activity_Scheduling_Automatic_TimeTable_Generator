const mongoose = require("mongoose");

//CONNECTING TO DATABASE
mongoose
  .connect(
    "mongodb://localhost:27017/TimeTablegenrator",
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
  )
  .then(() => {
    console.log("Connected to database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });

  //mongodb://localhost:27017/
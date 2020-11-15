const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 2000;

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/crudapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Hi Rupesh");
});

// app.use(bodyParser.json());
app.use(express.json());
const userRoutes = require("./routes/user");

app.use("/api", userRoutes);

app.listen(port, () => {
  console.log(`server start http://localhost:${port}`);
});

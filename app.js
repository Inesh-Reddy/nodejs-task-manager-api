const express = require("express");
const app = express();
const port = 3000;
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require("./middleware/not-found");

app.use(express.static("./public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Task Mananger App");
});

app.use("/api/v1/tasks", tasks);
app.use(notFound);

const main = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    console.log("Connected To DB...");
    app.listen(3000, () => {
      console.log("Server is listening on port: 3000 ...");
    });
  } catch (er) {
    console.log(er);
  }
};

main();

import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import config from "./config";
import router from "./router";

const app = express();

mongoose.Promise = Promise;
mongoose.connect(config.database, config.options);
mongoose.connection.on("connected", () => console.log("DB connected"));
mongoose.connection.on("error", error => console.log(error));

app.use(cors());
app.use(express.static(__dirname));
app.use(bodyParser.json({ limit: "5mb" }));

app.use(bodyParser.urlencoded({
  limit: "5mb",
  extended: false,
  parameterLimit: 5000,
}));

// for working with suspence
// app.use((req, res, next) => {
//   setTimeout(() => next(), 3000);
// });

app.get("/", (req, res) => {
  res.json({ status: true });
});

router(app);

const server = app.listen(process.env.PORT || 8001, () => {
  const port = server.address().port;
  console.log(`Express is working on port ${port}`);
});

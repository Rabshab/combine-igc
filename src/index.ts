import * as express from "express";
import * as http from "http";
import * as bodyParser from "body-parser";
import combine from "./routes/combine";

const app = express();

app.use(bodyParser.text());
app.use(combine);

const server = http.createServer(app);

server.listen(3000, () => {
  console.log("Combine IGC running on port 3000");
});

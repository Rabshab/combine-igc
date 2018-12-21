import * as express from "express";
import * as http from "http";
import * as bodyParser from "body-parser";
import combine from "./routes/combine";
import cors from "./cors";

const app = express();

app.use(cors);
app.use(bodyParser.json());
app.use(combine);

const server = http.createServer(app);

server.listen(3000, () => {
  console.log("Combine IGC running on port 3000");
});

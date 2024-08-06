import express from "express";
import bodyParser from "body-parser";
import { bookRoutes } from "./routes/bookRoutes.js";
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use("/book", bookRoutes);

app.listen(port, () => {
  console.log(`Book app listening at http://localhost:${port}`);
});

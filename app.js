import express from "express";
import http from 'http';
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import workspaceRoutes from "./routes/workspace.route.js";

//import { errorLogger } from "./middlewares/errorMiddleware.js";


import path from 'path';
import { fileURLToPath } from 'url';



const app = express();
const server = http.createServer(app);

app.use(cors({
  exposedHeaders: ["x-token-expiry"],
}));

app.use(express.json({ limit: "10mb" }));
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send(" API is running ....");
});
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use('/icons', express.static(path.join(__dirname, 'icons')));

// Workspace CRUD operations
app.use("/api/workspace", workspaceRoutes); 



app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));


//app.use(errorLogger);

export default server;

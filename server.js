const express = require("express");
const cors = require("cors");
const router = require("./routes/ComicRoute");
const Connect = require("./config/db");
const errorHandler = require("./middleware/ErrorHandler"); // Import error handler

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1', router);

app.use(errorHandler); 

Connect(app);

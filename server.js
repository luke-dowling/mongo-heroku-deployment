const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = 5001;
const app = express();
const userRouter = require("./routes/usersRouter");
const articleRouter = require("./routes/articlesRouter");

//MIDDLEWARE
app.use(cors());
app.use(express.json());

// MONGODB Setup
let strConn =
  "mongodb+srv://lukedci:lukedci@cluster0.ay761.mongodb.net/articles_db?retryWrites=true&w=majority";

mongoose
  .connect(strConn, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection works!"))
  .catch((err) => console.log("[ERROR] DB Connection failed:", err));

//INITIALIZE BACKEND
app.listen(PORT, () => {
  console.log(`Backend started on port: ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Documentation");
});

/** AVAILABLE ROUTES */
app.use("/users", userRouter);
app.use("/articles", articleRouter);

/** ERROR HANDLING */
app.use(function errorHandler(err, req, res, next) {
  res.status(err.status || 500).send({
    error: {
      message: err.message,
    },
  });
});

const express = require("express");
const app = express();
require("dotenv").config({ path: "env/.env" });
const cors = require("cors");
const usersRouter = require("./routes/usersRoutes");
const connectDB = require("./config/db");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

connectDB();

const PORT = process.env.PORT;

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "secret key",
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 30, //1 month
    },
    store: MongoDBStore({
      uri: process.env.MONGO_URI,
      collection: "session",
      expires: 1000 * 60 * 60 * 24 * 30, //1 month
    }),
  })
);

//api's
app.use("/api/users", usersRouter);

//HOME PAGE ROUTE
app.get("/", (req, res) => {
  res.send("welcome to home page");
});

//creating server
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}!`);
});

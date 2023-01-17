const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const { authRouter } = require("./routes/authRoutes");
const { propertyRouter } = require("./routes/propertyRoutes");
const { tenantRouter } = require("./routes/tenantRoutes");
const { home } = require("./routes/mainRoutes");
const {userRouter} = require('./routes/userRoutes')

const app = express();

const dotenv = require("dotenv");
dotenv.config()

const PORT = process.env.PORT || 5500;

DBURI = process.env.MONGO_URI;
mongoose
  .connect(DBURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(PORT, () => {
      console.log(`Connected to server at port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));

app.use(express.json());

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use("/public/", express.static("./public"));

app.use("/", home);
app.use("/api/auth", authRouter);
app.use("/api/property", propertyRouter);
app.use("/api/user", userRouter );
app.use("/api/tenant", tenantRouter );

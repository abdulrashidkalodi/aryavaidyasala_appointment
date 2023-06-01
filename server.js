const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

//dotenv config
dotenv.config();

//mongo db connection
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//ROUTES
// app.get('/',(req,res)=>{
//     res.status(200).send({
//         message:"server running" ,
//     });
// });

app.use("/api/v1/user", require("./routes/userRoutes"));

//PORT
const port = process.env.PORT || 8080;
//listen port
app.listen(port, () => {
  console.log(
    `serven running in ${process.env.NODE_MODE} MODE ON PORT ${process.env.PORT}`
      .bgCyan.white
  );
});

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()

const vehicleRoutes = require('./routes/vehicle')
const userRoutes = require('./routes/user')

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("connected to db"))
.catch((err) => console.log(err))

const app= express()
app.use(express.json());
app.use(cors())

app.use("/api", vehicleRoutes);
app.use("/api", userRoutes)
const PORT = process.env.PORT || 5000

app.get("/", (req, res) => {
  res.send("Backend is live on Render");
});


app.listen(PORT, () => console.log(`listening to port${PORT}`))
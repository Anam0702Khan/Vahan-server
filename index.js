const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()

const vehicleRoutes = require('./routes/vehicle')

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("connected to db"))
.catch((err) => console.log(err))

const app= express()
app.use(express.json());
app.use(cors())

app.use("/api", vehicleRoutes);

const Port_NO = 8000

app.listen(Port_NO, () => console.log("listening to port"))
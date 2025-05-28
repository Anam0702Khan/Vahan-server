const express = require('express')
const vehicleController = require("../controller/vehicle")

const router= new express.Router()

router.post("/challan",vehicleController.vehicleNumber)
router.get('/history', vehicleController.getHistory)

module.exports = router
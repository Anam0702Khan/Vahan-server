const loginUser = require('../controller/user')
const express = require('express')

const router =  express.Router()

router.post('/login',loginUser)

module.exports = router
const express = require('express')
const { getEmployeById, getListEmployes, saveEmploye } = require('../controllers/employe.controller')

const router = express.Router()

router.get('/one/:id', getEmployeById)
router.get('/all', getListEmployes)
router.post('/save', saveEmploye)

module.exports = router
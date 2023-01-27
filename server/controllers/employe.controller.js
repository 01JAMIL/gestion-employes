const Employe = require('../models/employe.model')
const asyncHandler = require('express-async-handler')
const { validateEmployeForm } = require('../validations/employe.validation')


/**
 *  @desc Get <Employé> by id
 *  @route /api/employe/one/:id
 *  @method GET
 *  @access public
 */
const getEmployeById = asyncHandler(async (req, res) => {
    const { id } = req.params
    const employe = await Employe.findOne({ id: id }, { _id: 0 })
    return res.status(200).json(employe)
})


/**
 *  @desc Get all <Employés>
 *  @route /api/employe/all
 *  @method GET
 *  @access public
 */
const getListEmployes = asyncHandler(async (req, res) => {
    const employes = await Employe.find({}, { _id: 0 })
    return res.status(200).json(employes)
})


/**
 *  @desc Save <Employé>
 *  @route /api/employe/save
 *  @method POST
 *  @access public
 */
const saveEmploye = asyncHandler(async (req, res) => {
    const { errors, valid } = validateEmployeForm(req.body)

    if (!valid) {
        return res.status(400).json(errors)
    }

    const employeById = await Employe.findOne({ id: req.body.id })
    if (employeById) {
        return res.status(400).json({ idError: 'Identifiant existe déjà' })
    }

    const employeByEmail = await Employe.findOne({ email: req.body.email })
    if (employeByEmail) {
        return res.status(400).json({ emailError: 'Email existe déjà' })
    }

    await Employe.create(req.body)
    return res.status(201).json({
        result: 'Employé enregistré avec succès'
    })
})


module.exports = {
    getEmployeById,
    getListEmployes,
    saveEmploye
}
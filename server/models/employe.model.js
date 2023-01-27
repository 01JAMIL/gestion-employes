const mongoose = require('mongoose')

const EmployeSchema = new mongoose.Schema({

    id: {
        type: String,
        required: true
    },

    nom: {
        type: String,
        required: true
    },

    prenom: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    position: {
        type: String,
        required: true
    }

}, { timestamps: true })

module.exports = mongoose.model('Employe', EmployeSchema)
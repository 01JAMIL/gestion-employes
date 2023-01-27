const validator = require('validator')
const isEmpty = require('./isEmpty')

const validateEmployeForm = (data) => {
    let errors = {}

    data.id = data.id ? data.id : ''
    data.nom = data.nom ? data.nom : ''
    data.prenom = data.prenom ? data.prenom : ''
    data.age = data.age ? data.age : 0
    data.email = data.email ? data.email : ''
    data.position = data.position ? data.position : ''

    if (validator.isEmpty(data.id)) {
        errors.idError = 'L\'identifiant est oblogatoire'
    }

    if (validator.isEmpty(data.nom)) {
        errors.nomError = 'Le nom est oblogatoire'
    }

    if (validator.isEmpty(data.prenom)) {
        errors.prenomError = 'Le prénom est oblogatoire'
    }

    if (data.age === 0) {
        errors.ageError = 'L\'âge est obligatoire'
    } else if (parseInt(data.age) < 22) {
        errors.ageError = 'L\'âge doit être supérieur à 22 ans'
    }


    if (validator.isEmpty(data.email)) {
        errors.emailError = 'L\'email est obligatoire'
    } else if (!validator.isEmail(data.email)) {
        errors.emailError = 'Le format de l\'email est incorrect'
    }

    if (validator.isEmpty(data.position)) {
        errors.positionError = 'La position est oblogatoire'
    }

    return {
        errors,
        valid: isEmpty(errors)
    }
}


module.exports = {
    validateEmployeForm
}
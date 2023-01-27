const mongoose = require('mongoose')


mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Data base connected successfully!'))
    .catch(error => console.log('Data base connection error: ', error))
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

require('dotenv').config({ path: '../.env' })
require('./config/db.config')

const employeRouter = require('./routes/employe.route')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(morgan('dev'))


app.use('/api/employe', employeRouter)

app.listen(process.env.PORT, (err) => {
	if (err) {
		console.log("Can't run server: ", err)
		return
	}

	console.log(`Server running on port ${process.env.PORT}`)
})
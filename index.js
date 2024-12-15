import express from 'express'
import { createCountries } from './db/countries.js'
import { createCities } from './db/cities.js'
import { createUser } from './db/users.js'
import { createPoi } from './db/interestpoints.js'
import { createLogin } from './db/login.js'

import morgan from 'morgan'
import bodyParser from 'body-parser'
import { countriesRouter } from './routes/countries.js'
import { cityRouter } from './routes/cities.js'
import { userRouter } from './routes/users.js'
import { poiRouter } from './routes/intrestpoints.js'
import { authRouter } from './routes/auth.js'

import cors from 'cors'
const server = express()
const port = 3000

server.use(cors())
server.use(bodyParser.json())

server.use(morgan('dev'))

server.use('/countries', countriesRouter)
server.use('/cities', cityRouter)
server.use('/users', userRouter)
server.use('/poi', poiRouter)
server.use('/login', authRouter)

server.listen(port, () => {
  console.log(`A szerver fut a http://localhost:${port}cimen`)
  createCountries()
  createCities()
  createUser()
  createPoi()
  createLogin()
})

import { Router } from 'express'
import { countriesController } from '../controllers/countries.js'

export const countriesRouter = Router()

countriesRouter.get('/', countriesController.GetCountries)

countriesRouter.get('/:id', countriesController.GetCountryById)

countriesRouter.post('/', countriesController.AddCountry)

countriesRouter.put('/:id', countriesController.UpdateCountry)

countriesRouter.delete('/:id', countriesController.DeleteCountry)

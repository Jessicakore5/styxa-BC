import { Router } from 'express'
import { citiesController } from '../controllers/cities.js'

export const cityRouter = Router()

cityRouter.get('/', citiesController.GetCities)

cityRouter.get('/:id', citiesController.GetCityById)

cityRouter.post('/', citiesController.AddCity)

cityRouter.put('/:id', citiesController.UpdateCityById)

cityRouter.delete('/:id', citiesController.DeleteCityById)

import { Router } from 'express'
import { poiController } from '../controllers/interestpoints.js'

export const poiRouter = Router()

poiRouter.get('/', poiController.GetPois)

poiRouter.get('/:id', poiController.GetPoiById)

poiRouter.post('/', poiController.AddPoi)

poiRouter.put('/:id', poiController.UpdatePoiById)

poiRouter.delete('/:id', poiController.DeletePoiById)

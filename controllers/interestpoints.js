import {
  getPois,
  getPoiById,
  addPoi,
  updatePoiById,
  deletePoiById
} from '../db/interestpoints.js'

async function GetPois(req, res) {
  const { id } = req.params
  res.send(await getPois(id))
}

async function GetPoiById(req, res) {
  const { id } = req.params
  res.send(await getPoiById(id))
}

async function AddPoi(req, res) {
  const { poiname, description, googmapurl, image } = req.body
  await addPoi(poiname, description, googmapurl, image)
  res.send({})
}

async function UpdatePoiById(req, res) {
  const { id } = req.params
  const { poiname, description, googmapurl, image } = req.body

  await updatePoiById(id, poiname, description, googmapurl, image)
  res.send({})
}

async function DeletePoiById(req, res) {
  const { id } = req.params
  const response = await deletePoiById(id)
  res.send(response)
}

export const poiController = {
  GetPois,
  GetPoiById,
  AddPoi,
  UpdatePoiById,
  DeletePoiById
}

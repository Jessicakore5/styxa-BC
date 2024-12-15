import {
  getCities,
  getCityById,
  addCity,
  updateCityById,
  deleteCityById
} from '../db/cities.js'

async function GetCities(req, res) {
  const { id } = req.params
  res.send(await getCities(id))
}

async function GetCityById(req, res) {
  const { id } = req.params
  res.send(await getCityById(id))
}

async function AddCity(req, res) {
  const { cityname, description, population } = req.body
  console.log(cityname, description, population)
  console.log(description.length)
  await addCity(cityname, description, population)
  res.send({})
}

async function UpdateCityById(req, res) {
  const { id } = req.params
  const { cityname, description, population } = req.body
  await updateCityById(id, cityname, description, population)
  res.send({})
}

async function DeleteCityById(req, res) {
  const { id } = req.params
  const response = await deleteCityById(id)
  res.send(response)
}

export const citiesController = {
  GetCities,
  GetCityById,
  AddCity,
  UpdateCityById,
  DeleteCityById
}

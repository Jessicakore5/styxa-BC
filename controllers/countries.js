import {
  getCountries,
  getCountryById,
  addCountry,
  updateCountry,
  deleteCountry
} from '../db/countries.js'

async function GetCountries(req, res) {
  res.send(await getCountries())
}
async function GetCountryById(req, res) {
  const { countryId } = req.params
  res.send(await getCountryById(countryId))
}

async function AddCountry(req, res) {
  const { countryName } = req.body
  await addCountry(countryName)
  res.send('Country added!')
}

async function UpdateCountry(req, res) {
  const { countryId } = req.params
  // const {countriesName}=reg.body
  await updateCountry(countryId)
  res.send('Country updated!')
}

async function DeleteCountry(req, res) {
  const { countryId } = req.params
  await deleteCountry(countryId)
  res.send('Country deleted!')
}

export const countriesController = {
  GetCountries,
  GetCountryById,
  AddCountry,
  UpdateCountry,
  DeleteCountry
}

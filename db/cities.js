import client from './db.js'

export function createCities() {
  client.query(
    `CREATE TABLE IF NOT EXISTS cities(
        id INT GENERATED ALWAYS AS IDENTITY,
        cityName VARCHAR (2000),
        description VARCHAR(900000),
        population INT,
        countryId INT,

       PRIMARY KEY(id)

        )`
  )
}

export async function addCity(cityname, description, population) {
  await client.query(
    `
    INSERT INTO cities(id,cityName,description,population)
    VALUES(DEFAULT,'${cityname}','${description}','${population}')
    `
  )
}

export async function getCities() {
  const cities = await client.query(`SELECT * FROM cities`)
  return cities.rows
}

export async function getCityById(id) {
  const cities = await client.query(`SELECT * FROM cities WHERE id=${id}`)
  return cities.rows
}

export async function updateCityById(id, cityname, description, population) {
  return await client.query(`
    UPDATE cities
    SET cityName='${cityname}',description='${description}',population='${population}'
    WHERE id=${id}`)
}

export async function deleteCityById(id) {
  const city = await client.query(`
    DELETE FROM cities
    WHERE id=${id}`)

  return city.rows
}

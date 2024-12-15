import client from './db.js'

export function createCountries() {
  client.query(
    `CREATE TABLE IF NOT EXISTS countries(
        countryId INT GENERATED ALWAYS AS IDENTITY,
        countryName VARCHAR(200),
        description VARCHAR(1000),
        latitude TIMESTAMP,
        longitude TIMESTAMP,
     

        PRIMARY KEY (countryId)

        )`
  )
}

export async function addCountry(countryName) {
  await client.query(`
        INSERT INTO countries(countryId,countriesName,description,latitude,longitude)
        VALUES(DEFAULT,'${countryName}')
        `)
}

export async function getCountries() {
  const countries = await client.query(`SELECT * FROM countries`)
  return countries.rows
}

export async function getCountryById() {
  const countries = await client.query(`SELECT * FROM countries`)
  return countries.rows
}

export async function updateCountry(countryId, countryName) {
  return await client.query(`
        UPDATE countries
        SET countryName='${countryName}'
        WHERE countryId=${countryId}`)
}

export async function deleteCountry(countryId) {
  const country = await client.query(`
        DELETE FROM countries
        WHERE countryId=${countryId}`)

  return country.rows
}

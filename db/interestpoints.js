import client from './db.js'

export function createPoi() {
  client.query(`
    CREATE TABLE IF NOT EXISTS pointofinterest(
    id INT GENERATED ALWAYS AS IDENTITY,
    poiName VARCHAR (2000),
    description VARCHAR(9000),
    googMapUrl VARCHAR(9000) ,
    image VARCHAR (9000),
    cityId INT,
    
    PRIMARY KEY (id)

 
  
    )`)
}

export async function addPoi(poiname, description, googmapurl, image) {
  await client.query(`
      INSERT INTO pointofinterest (id,poiName,description,googMapUrl,image)
      VALUES(DEFAULT,'${poiname}','${description}','${googmapurl}','${image}')
      `)
}

export async function getPois() {
  const poi = await client.query(`SELECT * FROM  pointofinterest`)
  return poi.rows
}
export async function getPoiById(id) {
  const poi = await client.query(
    `SELECT * FROM  pointofinterest WHERE id=${id}`
  )
  return poi.rows
}

export async function updatePoiById(
  id,
  poiname,
  description,
  googmapurl,
  image
) {
  return await client.query(`
      UPDATE pointofinterest
      SET poiName='${poiname}' ,description='${description}',googMapUrl='${googmapurl}',image='${image}'
      WHERE id=${id}`)
}

export async function deletePoiById(id) {
  const poi = await client.query(`
      DELETE FROM pointofinterest
      WHERE id=${id}`)

  return poi.rows
}

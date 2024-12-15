import client from './db.js'

export function createUser() {
  client.query(
    `
      CREATE TABLE  IF NOT EXISTS users (
              id INT GENERATED ALWAYS AS IDENTITY,
              firstname VARCHAR(100),
              lastname VARCHAR (100),
              username VARCHAR(100),
              password VARCHAR(100),

              PRIMARY KEY (id)
          )`
  )
}

export async function addUser(firstname, lastname, username, password) {
  await client.query(`
      INSERT INTO users(id,firstname,lastname,username,password)
      VALUES (DEFAULT,'${firstname}','${lastname}','${username}','${password}')`)
}

export async function getUsers() {
  const users = await client.query(`SELECT * FROM users`)
  return users.rows
}

export async function updateUser(firstname, lastname, username, id) {
  const user = await client.query(` 
              UPDATE users
              SET firstname= '${firstname}',lastname= '${lastname}',username='${username}'
              WHERE id=${id}
              `)
  return user.rows
}
export async function deleteUser(id) {
  const users = await client.query(`
      DELETE FROM users
      WHERE id =${id}`)
  return users.rows
}

import client from './db.js'
export function createLogin() {
  client.query(`
        CREATE TABLE IF NOT EXISTS login(
        id INT GENERATED ALWAYS AS IDENTITY,
        password VARCHAR(100),
        
        PRIMARY KEY(id)
)`)
}

export async function loginUser() {
  const users = await client.query(`SELECT * FROM login`)
  return users.rows
}

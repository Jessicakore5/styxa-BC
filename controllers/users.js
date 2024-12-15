import { getUsers, addUser, updateUser, deleteUser } from '../db/users.js'

import Joi from 'joi'
import bcrypt from 'bcrypt'

const addRule = Joi.object({
  firstname: Joi.string().required().min(3).max(10),
  lastname: Joi.string().required().min(3).max(10),
  username: Joi.string().required().min(3).max(10),
  password: Joi.string().required().min(8),
  comfpassword: Joi.string().required().min(8)
})

const updateRule = Joi.object({
  username: Joi.string().required().min(3).max(10),
  email: Joi.string().required().min(10).max(30),
  userId: Joi.number().required()
})
async function GetUsers(req, res) {
  res.send(await getUsers())
}

async function AddUser(req, res) {
  try {
    const { firstname, lastname, username, password, comfpassword } =
      await addRule.validateAsync(req.body)
    const encryptedPassword = await bcrypt.hash(password, 10)

    const same = await bcrypt.compare(comfpassword, encryptedPassword)
    if (!same) {
      res.status(400).send('nem ugyanaz a jelszo')
      return
    }
    await addUser(firstname, lastname, username, encryptedPassword)
    res.send('Felhasznalo hozzaadva')
  } catch (error) {
    res.status(400).send(error)
  }
}

async function UpdateUser(req, res) {
  try {
    const { username, email } = await updateRule.validateAsync(req.body)
    const { userId } = req.params
    await updateUser(username, email, userId)
    res.send('Felhasznalok frissitve')
  } catch (error) {
    res.status(400).send(error)
  }
}

async function DeleteUser(req, res) {
  const { userId } = req.params
  res.send(await deleteUser(userId))
}

export const userController = {
  GetUsers,
  AddUser,
  UpdateUser,
  DeleteUser
}

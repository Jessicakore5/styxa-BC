import { loginUser } from '../db/login.js'
import Joi from 'joi'
import bcrypt from 'bcrypt'

const loginRule = Joi.object({
  id: Joi.number().required(),
  password: Joi.string().required().min(8)
})

async function LoginUser(req, res) {
  try {
    const { password } = await loginRule.validateAsync(req.body)
    const id = await bcrypt.hash(password, 10)

    const same = await bcrypt.compare(password, id)
    if (!same) {
      res.status(400).send('Unsuccessful!')
      return
    }
    await loginUser(password)
    res.send('Successful!')
  } catch (error) {
    res.status(400).send(error)
  }
}
export const loginController = {
  LoginUser
}

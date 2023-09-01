import { Request, Response } from 'express'
import { OAuth2Client, UserRefreshClient } from 'google-auth-library'
import jwtDecode, { JwtPayload } from 'jwt-decode'
import * as dotenv from 'dotenv'
import UserModel from '../models/userModel'
import { IUser } from '../types/userTypes'
dotenv.config()

const oAuth2Client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  'postmessage'
)

//GoogleLogin
export const googleLogin = async (req: Request, res: Response) => {
  try {
    const { tokens } = await oAuth2Client.getToken(req.body.code)
    const decode: IUser = jwtDecode(tokens.id_token!)
    const { email, given_name, picture } = decode
    const filter = { email, given_name, picture }
    res.json({ email, given_name, picture })
  } catch (err) {
    console.log(err)
    res.json(err)
  }
}

// export const refreshLogin = async (req: Request, res: Response) => {
//   try {
//     const user = new UserRefreshClient(
//       process.env.GOOGLE_CLIENT_ID,
//       process.env.GOOGLE_CLIENT_SECRET,
//       req.body.refreshToken
//     )
//     const { credentials } = await user.refreshAccessToken()
//     res.json(credentials)
//   } catch (err) {
//     console.log(err)
//     res.json(err)
//   }
// }

export const getUserByEmail = async (req: Request, res: Response) => {
  const email = req.params.email
  try {
    const user = await UserModel.findOne({ email })
    res.json(user)
  } catch (err) {
    console.log(err)
    res.json(err)
  }
}

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await UserModel.create(req.body)
    return res.json(user)
  } catch (err) {
    console.log(err)
    res.json(err)
  }
}

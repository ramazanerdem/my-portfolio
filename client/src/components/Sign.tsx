import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import axios from 'axios'
import { useGoogleLogin } from '@react-oauth/google'
import { IUser } from '../types/userTypes'

import { createUser, logoutUser } from '../../redux/userSlice'

const Sign = () => {
  const dispatch = useDispatch()
  const URI = import.meta.env.VITE_SERVER_URI
  // const [user, setUser] = useState<IUser>()

  const { userData: user } = useSelector((state: RootState) => state.users)

  const googleLogin = useGoogleLogin({
    flow: 'auth-code',
    ux_mode: 'popup',
    onSuccess: async (codeResponse) => {
      const { data } = await axios.post(`${URI}/auth/google`, {
        code: codeResponse.code,
      })
      console.log(data)
      const { email, given_name, picture } = data as IUser

      try {
        const existingUser = await axios.get(`${URI}/getUserByEmail/${email}`)

        if (existingUser.data) {
          dispatch(createUser(existingUser.data))
          console.log('Welcome ' + existingUser.data.given_name)
        } else {
          try {
            const { data } = await axios.post(`${URI}/createUser`, {
              email,
              given_name,
              picture,
            })
            console.log('Created user with ' + data.email)
            dispatch(createUser(data))
          } catch (err) {
            console.log(err)
          }
        }
      } catch (err) {
        console.log(err)
      }
    },
    onError: (errorResponse) => console.log(errorResponse),
  })
  return (
    <>
      {user ? (
        <>
          <li className="grid grid-cols-3 gap-0">
            <div className="w-10 col-span-1 rounded-md overflow-hidden p-0">
              <img className="h-10" src={user?.picture} alt="user" />
            </div>
            <div className="flex flex-col items-start p-0 col-span-2 my-auto hover:bg-inherit active:bg-inherit">
              <p className="text-xs -ms-5">
                {user.given_name}
                <br />
                {user.email}
              </p>
            </div>
          </li>
          <li>
            <p
              onClick={() => dispatch(logoutUser())}
              className="bg-black bg-opacity-60"
            >
              Logout
            </p>
          </li>
        </>
      ) : (
        <li className="w-52">
          <button onClick={() => googleLogin()}>Google ile Giriş Yap</button>
        </li>
      )}
    </>
  )
}
export default Sign

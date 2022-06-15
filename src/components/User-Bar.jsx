import {useContext} from 'react'
import { UserContext } from "../contexts/User-Context";


export default function UserBar() {
    const { loggedInUser } = useContext(UserContext);
  return (
      <p className='logged-in-user'>Logged in user : {loggedInUser}</p>
  )
}

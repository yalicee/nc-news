import {useContext} from 'react'
import { UserContext } from "../contexts/User-Context";
import {Link} from "react-router-dom"



export default function UserBar() {
    const { loggedInUser } = useContext(UserContext);
  return (
    <div className='user-bar'>
      <p className='logged-in-user'>Signed in as: </p>
      <p>{loggedInUser}</p>
    <Link className="user-bar-link" to="/user">Sign in</Link>
    </div>
  )
}

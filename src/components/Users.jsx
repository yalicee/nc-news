import {  useState, useContext } from 'react'
import { UserContext } from "../contexts/User-Context";
import UseUsers from '../hooks/UseUsers'

export default function Users({comments, setComments, article, setCommentCount}) {
    const [user, setUser] = useState("")
    const users = UseUsers()

    const { setLoggedInUser } = useContext(UserContext);

    const handleLoginSubmit = (event) => {
        event.preventDefault()
        if (user !== "Not logged in") {
            setLoggedInUser(user);
        }
    }




  return (
      <div className='user-layout'>
          <form className="log-in" onSubmit={handleLoginSubmit}>
          <label> Please log in
                  <select required onChange={(event) => {
                      setUser(event.target.value)
            }}>
                <option selected key="Choose a user">
            Not logged in
          </option>
        {users.map((user) => {
            return <option value={user.username} key={user.username}>{user.username}</option>
        })}
              </select>
              </label>
              <button>log in</button>
              </form>
      </div>
  )
}

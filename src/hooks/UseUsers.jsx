import { useState, useEffect } from 'react'
import { fetchUsers } from '../utils/API-Requests'

const UseUsers = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetchUsers().then((usersData) => {
            setUsers(usersData)
        })
}, [])

  return users
}

export default UseUsers
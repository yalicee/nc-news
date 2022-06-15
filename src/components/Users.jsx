import {useEffect, useState} from 'react'
import { fetchUsers } from '../utils/API-Requests'
import AddComment from './Add-Comment'

export default function Users({comments, setComments, article, setCommentCount}) {

    const [users, setUsers] = useState([])
    useEffect(() => {
        fetchUsers().then((usersData) => {
            setUsers(usersData)
        })
}, [])


  return (
      <AddComment users={users} comments={comments} setComments={setComments} article={article} setCommentCount={setCommentCount}/>
  )
}

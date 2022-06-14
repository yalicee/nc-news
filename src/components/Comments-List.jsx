
import {useState} from 'react'

export default function CommentsList({isLoading, children}) {
    const [showComments, setShowComments] = useState(false)
  
  if(isLoading) return <p>Loading ...</p>
  return (
    <>
      {showComments ? children : null}
      <button onClick={(() => {
        setShowComments((currShow) => !currShow)
      })
      
      }>{showComments ? "Hide" : "Show"} comments</button>
    </>
  )
}

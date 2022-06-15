import {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import { fetchTopics } from '../utils/API-Requests'

export default function NavBar() {
    const [topics, setTopics] = useState([])

    useEffect(() => {
        fetchTopics().then((topicsData) => {
            setTopics(topicsData)
        })
    }, [])

  return (
      <>
          <ul className="nav-bar">
              {topics.map((topic) => {
                  return <li key={topic.slug}>
                      <Link to={`/topics/${topic.slug}`}>{topic.slug}</Link>
                  </li>
              })}
              <Link className="nav-bar-link" to="/">all topics</Link>
              <Link to="/users">log in</Link>
          </ul>
      </>
  )
}

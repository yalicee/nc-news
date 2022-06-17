import {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import { fetchTopics } from '../utils/API-Requests'
import Header from "../components/Header";
import UserBar from "../components/User-Bar";



export default function NavBar() {
    const [topics, setTopics] = useState([])

    useEffect(() => {
        fetchTopics().then((topicsData) => {
            setTopics(topicsData)
        })
    }, [])

  return (
      <>
          <Header />
          <ul className="nav-bar">
              <Link className="nav-bar-link" to="/">Home</Link>
              {topics.map((topic) => {
                  return <li key={topic.slug}>
                      <Link id="link"to={`/topics/${topic.slug}`}>{topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)}</Link>
                  </li>
              })}
              
          </ul>
          <UserBar />
      </>
  )
}

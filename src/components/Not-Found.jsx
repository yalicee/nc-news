import { Link } from 'react-router-dom';

const NotFound = ({ topic_slug, article_id }) => {

    return (
        <div>
            <h1>{topic_slug === undefined && article_id === undefined ? "404 - Not Found ! Path does not exist" : null}</h1>
            <h1>{topic_slug ? " 404 - Not Found! Topic does not exist" : null}</h1>
            <h1>{article_id ? " 404 - Not Found! Article does not exist" : null}</h1>
            <Link to="/">Go Home</Link>
        </div>
)   ;
}
export default NotFound;
import { useState } from "react";
import { patchArticle } from "../utils/API-Requests";

const Votes = ({ votes, article_id}) => {
    const [voteCount, setVoteCount] = useState(0);
  const [err, setErr] = useState(null);
  
  
  
    const handleUpClick = ({ target: { value } }) => {
      setVoteCount((currCount) => currCount + 1);
        patchArticle(value, 1).catch(() => {
        setVoteCount((currCount) => currCount - 1);
        setErr("Try again later");
      });
    };

    const handleDownClick = ({ target: { value } }) => {
        setVoteCount((currCount) => currCount - 1);
          patchArticle(value, -1).catch(() => {
          setVoteCount((currCount) => currCount + 1);
          setErr("Try again later");
        });
      };

    if (err) return <p> {err} </p>;
    return (
      <>
        <p>Votes: {votes + voteCount}</p>
        <div className="votes-bar">
        <button value={article_id}onClick={handleUpClick}>
          Upvote
            </button>
            <button value={article_id}onClick={handleDownClick}>
          Downvote
          </button>
          </div>
      </>
    );
  };
  
  export default Votes;
  
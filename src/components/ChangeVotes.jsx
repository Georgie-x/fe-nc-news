import axios from "axios";
import { useEffect, useState } from "react";

function ChangeVotes({article}) {
  const [voteDiff, setVoteDiff] = useState(0);
  const [uiVote, setUiVote] = useState(article.votes)
console.log(article.votes)
  
const itemForPatch = {
    votes: uiVote
  }

  useEffect(() => {
    axios
      .patch(`https://georgiex-news.onrender.com/api/articles/${article.article_id}, ${itemForPatch})
      }}`)
      .then()
  }, [voteDiff]);

  return (
    <>
      <div className="flex-across">
        <button
          disabled={voteDiff === -1}
          onClick={() => {
            setVoteDiff(-1);
            setUiVote(()=>{uiVote - 1})
          }}
        >
          Downvote!
        </button>{" "}
        <p className="highlight">{`Votes: ${uiVote}`}</p>{" "}
        <button
          disabled={voteDiff === 1}
          onClick={() => {
            setVoteDiff(1);
            setUiVote(()=>{uiVote + 1})
          }}
        >
          Upvote!
        </button>{" "}
      </div>
    </>
  );
}

export default ChangeVotes

import axios from "axios";
import { useState } from "react";

function ChangeVotes({ article, setArticle }) {
    const[voteWay, setVoteWay] = useState("")
    
  let voteDiff = 0

  function handler() {
    console.log("hi",voteDiff);
    if(voteDiff===1){setVoteWay("up")}
    if(voteDiff===-1){setVoteWay("down")}
    setArticle((currentArticle) => {
      const clonedArticle = { ...currentArticle };
      clonedArticle.votes += voteDiff;
      console.log(clonedArticle.votes)
      return clonedArticle;
    });

    const itemForPatch = {
      inc_votes: voteDiff
    };

    axios
      .patch(
        `https://georgiex-news.onrender.com/api/articles/${article.article_id}`,
        itemForPatch
      )
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <div className="flex-across">
        <button
          disabled={voteWay==="down"}
          onClick={() => {
            voteDiff = -1;
            handler();
          }}
        >
          Downvote!
        </button>
        <p className="highlight">{`Votes: ${article.votes}`}</p>
        <button
       disabled={voteWay==="up"}
          onClick={() => {
            voteDiff = 1;
            handler();
          }}
        >
          Upvote!
        </button>
      </div>
    </>
  );
}

export default ChangeVotes;

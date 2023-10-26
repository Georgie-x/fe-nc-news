import axios from "axios";
import { useState } from "react";

function ChangeVotes({article}) {
  const [voteDiff, setVoteDiff] = useState(0);
  const [uiVote, setUiVote] = useState(article.votes)
  
function handler(){    
    console.log(article.votes)
    if(voteDiff === 1){
        setUiVote((currentVotes)=>{currentVotes += 1})}
    if(voteDiff === -1){
        setUiVote((currentVotes)=>{currentVotes -= 1})}
    
    const itemForPatch = {
    inc_votes: voteDiff
  }
  console.log(article.article_id)
    axios
      .patch(`https://georgiex-news.onrender.com/api/articles/${article.article_id}`, itemForPatch)
      .then(()=>{setVoteDiff(0)})
      .catch((err)=>{console.log(err)})
}
console.log(uiVote,article.votes)

  return (
    <>
      <div className="flex-across">
        <button
          disabled={voteDiff === -1}
          onClick={() => { setVoteDiff(-1);handler()
          }}
        >
          Downvote!
        </button>{" "}
        <p className="highlight">{`Votes: ${article.votes}`}</p>{" "}
        <button
          disabled={voteDiff === 1}
          onClick={() => {
            setVoteDiff(1); handler()
          }}
        >
          Upvote!
        </button>{" "}
      </div>
    </>
  );
}

export default ChangeVotes

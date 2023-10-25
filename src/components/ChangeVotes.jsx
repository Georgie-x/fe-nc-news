function ChangeVotes({article}) {
  const [voteDiff, setVoteDiff] = useState(0);

const updatedVote = () => {
    return votes + voteDiff
}

  useEffect(() => {
    axios
      .patch(`https://georgiex-news.onrender.com/api/articles/${article_id},{()=>{
      }}`)
      .then(({ data }) => {
      });
  }, [voteDiff]);

  return (
    <>
      <div className="flex-across">
        <button
          disabled={voteDiff === -1}
          onClick={() => {
            setVoteDiff(-1);
          }}
        >
          Downvote!
        </button>{" "}
        <p className="highlight">Votes: {article.votes}</p>{" "}
        <button
          disabled={voteDiff === 1}
          onClick={() => {
            setVoteDiff(1);
          }}
        >
          Upvote!
        </button>{" "}
      </div>
    </>
  );
}

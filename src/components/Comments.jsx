import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddComment from "./AddComment";


function Comments() {
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);


  useEffect(() => {
    axios
      .get(
        `https://georgiex-news.onrender.com/api/articles/${article_id}/comments`
      )
      .then(({ data }) => {
        const commentList = data;
        setComments(commentList);
        setIsLoading(false);
      })
      .catch(console.log);
  }, []);

  return (
    <>
      <p>{isLoading ? "loading..." : null}</p>
      <AddComment article_id={article_id} />
      <p>{comments.comment_id}</p>
      <ul>
        {comments.map((comments) => {
          return (
            <li className="all-comments" key={comments.comment_id}>
              <h3>
                Comment#{comments.comment_id} created by {comments.author} at{" "}
                {comments.created_at}
              </h3>
              <p>{comments.body}</p>
              <hr></hr>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Comments;

import axios from "axios";
import { useState } from "react";

function AddComment({ setComments, article_id }) {
  const [newComment, setNewComment] = useState("");

  function submitHandler(e) {
    e.preventDefault();

    setComments((previousComments) => {
      return [newComment, ...previousComments];
    });

    const itemForPost = {
      username: "rogersop",
      body: newComment,
    };

    axios.post(`https://georgiex-news.onrender.com/api/articles/${article_id}/comments`, itemForPost)
      .then()
      .catch((err)=>console.log(err));
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor="comment-field">
          <h3>Add New Comment</h3>
        </label>
        <textarea
          required
          id="comment-field"
          name="comment-field"
          placeholder="Enter your comment here..."
          onChange={(e) => setNewComment(e.target.value)}
          value={newComment}
        ></textarea>
        <br/>
        <button id="comment-submit" name="comment-submit" type="submit">
          Submit
        </button>

        <hr></hr>
      </form>
    </>
  );
}

export default AddComment;

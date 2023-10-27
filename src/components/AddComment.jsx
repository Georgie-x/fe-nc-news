import axios from "axios";
import { useState } from "react";

function AddComment({ article_id }) {
  const [newComment, setNewComment] = useState("");
  const [postedComment, setPostedComment] = useState("")

  function submitHandler(e) {
    e.preventDefault();
    const itemForPost = {
      username: "jessjelly",
      body: newComment,
    };
    setPostedComment(newComment)
console.log(itemForPost, newComment)
    axios.post(`https://georgiex-news.onrender.com/api/articles/${article_id}/comments`, itemForPost)
      .then()
      .catch((err)=>console.log(err));
  }

  return (
    <>
    {postedComment === "" ? <form onSubmit={submitHandler}>
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
      </form> : <><h3>Your comment:</h3>
      <p>{postedComment}</p>
      <hr></hr></>} 
      
    </>
  );
}

export default AddComment;

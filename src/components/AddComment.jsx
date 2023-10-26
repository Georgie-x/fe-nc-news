function AddComment() {
  return (
    <>
      <form>
        <label htmlFor="comment-field">
          <h3>Add New Comment</h3>
        </label>
      
          <textarea
            id="comment-field"
            name="comment-field"
            placeholder="Enter your comment here..."
          ></textarea>
        
           <hr></hr>
       
      </form>
    </>
  );
}

export default AddComment;

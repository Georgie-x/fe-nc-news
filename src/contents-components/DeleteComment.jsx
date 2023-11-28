import axios from "axios"
import { useState } from "react"


function DeleteComment({comment_id}) {


	function clickHandler(e) {
		e.preventDefault()

		axios
			.delete(`https://georgiex-news.onrender.com/api/comments/${comment_id}`)
            .then(console.log())
			.catch((err) => {
				console.log(err)
			})
	}
	return (
		<button type='submit' id='comment-remove' onClick={clickHandler}>
			Delete Comment
		</button>
	)
}

export default DeleteComment

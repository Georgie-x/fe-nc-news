import axios from "axios"
import { useState } from "react"
import { useParams } from "react-router-dom"

function AddComment() {
	const [isPosting, setIsPosting] = useState(false)
	const [username, setUsername] = useState("")
	const [body, setBody] = useState("")

	const { article_id } = useParams()

	function submitHandler(e) {
		e.preventDefault()
		setIsPosting(true)

		const itemForPost = {
			username: username,
			body: body,
		}

		axios
			.post(`https://georgiex-news.onrender.com/api/articles/${article_id}/comments`, itemForPost)
			.then(setIsPosting===false)
			.catch((err) => {
				console.log(err)
			})
	}
	return (
		<>
			<form onSubmit={submitHandler}>
				<label htmlFor='comment-input'>Comment</label>
				<textarea
					required
					className='input'
					id='comment-input'
					placeholder='Add your comment here...'
					onChange={(e) => {
						setBody(e.target.value)
					}}
				></textarea>
				<br />
				<label htmlFor='username-input'>Username</label>
				<input
					required
					type='text'
					className='input'
					id='username-input'
					placeholder='e.g. jessjelly'
					onChange={(e) => {
						setUsername(e.target.value)
					}}
				></input>
				<br />
				<button type='submit' id='comment-submit' disabled={isPosting === true}>
					Add Comment
				</button>
			</form>
		</>
	)
}

export default AddComment

import axios from "axios"
import { useEffect } from "react"
import { useParams } from "react-router-dom";

function AddComment() {
	const { article_id } = useParams()

	const itemForPost = {
		username: "",
		body: "",
	}

	useEffect(() => {
		axios
			.post(`https://georgiex-news.onrender.com/api/articles/${article_id}/comments`, itemForPost)
			.then(() => {})
			.catch((err) => {
				console.log(err)
			})
	},[])

	return (
		<>
			<div>
				<button>Add Comment</button>
			</div>
		</>
	)
}

export default AddComment

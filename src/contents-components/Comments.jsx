import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { DeleteComment, CommentVotes } from "./index"

function Comments() {
	const { article_id } = useParams()
	const [isLoading, setIsLoading] = useState(true)
	const [comments, setComments] = useState([])
	const user = "jessjelly"

	useEffect(() => {
		axios
			.get(`https://georgiex-news.onrender.com/api/articles/${article_id}/comments`)
			.then(({ data }) => {
				const commentList = data
				setComments(commentList)
				setIsLoading(false)
			})
			.catch(console.log)
	}, [])

	return isLoading ? (
		<h3>loading...</h3>
	) : (
		<>
			<ul>
				{comments.map((comments) => {
					return (
						<li className='all-comments' key={comments.comment_id}>
							<h3>
								Comment#{comments.comment_id} created by {comments.author} at {comments.created_at}
							</h3>
							<p>{comments.body}</p>
							{comments.author === user ? (
								<DeleteComment comment_id={comments.comment_id}/>
							) : (
								<CommentVotes comment_id={comments.comment_id} votes={comments.votes} />
							)}
							<hr></hr>
						</li>
					)
				})}
			</ul>
		</>
	)
}

export default Comments

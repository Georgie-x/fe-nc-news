import axios from "axios"
import { useState, useEffect } from "react"

function CommentVotes({comment_id, votes}) {
	const [voteDiff, setVoteDiff] = useState(0)

	function clickHandler(vote) {
			setVoteDiff(vote)
		

		const itemForPatch = {
			inc_votes: voteDiff,
		}

		axios
			.patch(`https://georgiex-news.onrender.com/api/comments/${comment_id}`, itemForPatch)
			.then(() => {})
			.catch((err) => {
				console.log(err)
			}, [])
	}

	return (
		<ul className='across'>
			<li><button
				disabled={voteDiff === -1}
				onClick={() => {
					clickHandler(-1)
				}}
			>
				Downvote!
			</button></li>
			<li><p>Votes: {votes + voteDiff} </p></li>
			<li><button
				disabled={voteDiff === 1}
				onClick={() => {
					clickHandler(1)
				}}
			>
				Upvote!
			</button></li>
		</ul>
	)
}

export default CommentVotes

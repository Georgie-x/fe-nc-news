import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

function AllTopics() {
	const [topics, setTopics] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		axios.get(`https://georgiex-news.onrender.com/api/topics`).then(({ data }) => {
			const topicList = data.topics
			console.log(topicList)
			setTopics(topicList)
			setIsLoading(false)
		})
	}, [])

	return isLoading ? (
		<h3>loading...</h3>
	) : (
		<>
			<h2>Article Topics</h2>
			<ul id='topic'>
				{topics.map((topic) => {
					return (
						<li key={topic.slug}>
							<h3>
								<Link to={`/topics/${topic.slug}`}>{topic.slug}</Link>
							</h3>
							<p>{topic.description}</p>
						</li>
					)
				})}
			</ul>
		</>
	)
}
export default AllTopics

import { useState, useEffect } from "react"
import axios from "axios"
import { Link, useParams } from "react-router-dom"

function ArticlesByTopic() {
    const { topic } = useParams()
	const [articles, setArticles] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		axios.get(`https://georgiex-news.onrender.com/api/articles?topic=${topic}`).then(({ data }) => {
			const articleList = data.articles
			setArticles(articleList)
			setIsLoading(false)
		})
	}, [])

	return isLoading ? (
		<h3>loading...</h3>
	) : (
		<>
			<h2>{topic} articles</h2>
			<ul>
			{articles.map((article) => {
				return (
					<div className='container' key={article.article_id}>
						<h3>{article.title}</h3>
						<Link to={`/articles/${article.article_id}`}>
							<img src={article.article_img_url} />
						</Link>
						<h3>
							Comments {article.comment_count} Votes {article.votes}
						</h3>

						<p>
							Article #{article.article_id} created by {article.author} at{" "}
							{article.formatted_created_at}
						</p>
					</div>
				)
			})}
			</ul>
		</>
	)
}

export default ArticlesByTopic
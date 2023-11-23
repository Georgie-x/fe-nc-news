import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

function AllArticles() {
	const [articles, setArticles] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		axios.get("https://georgiex-news.onrender.com/api/articles").then(({ data }) => {
			const articleList = data.articles
			setArticles(articleList)
			setIsLoading(false)
		})
	}, [])

	return isLoading ? (
		<h3>loading...</h3>
	) : (
		<>
			<h2>Latest articles</h2>
			<ul>
				{articles.map((article) => {
					return (
						<li className='all-articles' key={article.article_id}>
							<img className='small-img' src={article.article_img_url} />
							<h2>
								<Link to={`/articles/${article.article_id}`}>{article.title}</Link>
							</h2>
							<p>
								Article #{article.article_id} created by {article.author} at {article.created_at}
							</p>

							<hr></hr>
						</li>
					)
				})}
			</ul>
		</>
	)
}

export default AllArticles

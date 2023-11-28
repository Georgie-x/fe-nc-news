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
						<li className='all-articles' key={article.article_id}>
							<img className='small-img' src={article.article_img_url} />
							<h2>
								<Link to={`/articles/${article.article_id}`}>{article.title}</Link>
							</h2>
							<p>
								Article #{article.article_id} created by {article.author} at {article.formatted_created_at}
							</p>

							<hr></hr>
						</li>
					)
				})}
			</ul>
		</>
	)
}

export default ArticlesByTopic
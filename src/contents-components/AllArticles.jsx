import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

function AllArticles() {
	const [sortby, setSortby] = useState("formatted_created_at")
	const [isLoading, setIsLoading] = useState(true)
	const [articles, setArticles] = useState([])

	useEffect(() => {
		axios
			.get(`https://georgiex-news.onrender.com/api/articles?sortby=${sortby}`)
			.then(({ data }) => {
				const articleList = data.articles
				setArticles(articleList)
				setIsLoading(false)
			})
	}, [sortby])

	return isLoading ? (
		<h3>loading...</h3>
	) : (
		<>
			<form>
				<label htmlFor='sortby-input'>
					<h2>Articles sorted by </h2>
				</label>
				<select value={sortby} id='sortby-input' onChange={(e) => setSortby(e.target.value)}>
					<option value='formatted_created_at&order=DESC'>Latest</option>
					<option value='formatted_created_at&order=ASC'>Oldest</option>
					<option value='votes&order=DESC'>Most Votes</option>
					<option value='votes&order=ASC'>Least Votes</option>
					<option value='comment_count&order=DESC'>Most Comments</option>
					<option value='comment_count&order=ASC'>Least Comments</option>
				</select>
			</form>

			{articles.map((article) => {
				return (
					<ul className='container'>
						<li className='sorted-articles' key={article.article_id}>
							<Link to={`/articles/${article.article_id}`}>
								<h3>{article.title}</h3>
								<img src={article.article_img_url} />
								<h3>
									Comments {article.comment_count} Votes {article.votes}
								</h3>

								<p>
									Article #{article.article_id} created by {article.author} at{" "}
									{article.formatted_created_at}
								</p>
							</Link>
						</li>
					</ul>
				)
			})}
		</>
	)
}

export default AllArticles

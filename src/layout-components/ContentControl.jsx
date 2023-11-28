import { Routes, Route } from "react-router-dom"
import { AllArticles, SingleArticle, ErrorPage, AllTopics, ArticlesByTopic } from "../contents-components"


function ContentControl() {
	return (
		<main>
			<div className='main-container'>
				<Routes>
					<Route path='/' element={<AllArticles />} />
					<Route path='/articles' element={<AllArticles />} />
					<Route path='/articles/:article_id/*' element={<SingleArticle />} />
					<Route path='/topics' element={<AllTopics />} />
					<Route path='/topics/:topic' element={<ArticlesByTopic />} />
					<Route path='/*' element={<ErrorPage />} />
				</Routes>
			</div>
		</main>
	)
}

export default ContentControl

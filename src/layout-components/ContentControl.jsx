import { Routes, Route } from "react-router-dom"
import { AllArticles, SingleArticle, ErrorPage, AllTopics, ArticlesByTopic, HomePage } from "../contents-components"


function ContentControl() {
	return (
		<main>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/home' element={<HomePage />} />
					<Route path='/articles' element={<AllArticles />} />
					<Route path='/articles/:article_id/*' element={<SingleArticle />} />
					<Route path='/topics' element={<AllTopics />} />
					<Route path='/topics/:topic' element={<ArticlesByTopic />} />
					<Route path='/articles/*' element={<ErrorPage />} />
					<Route path='/topics/*' element={<ErrorPage />} />
					<Route path='/*' element={<ErrorPage />} />
				</Routes>
		</main>
	)
}

export default ContentControl

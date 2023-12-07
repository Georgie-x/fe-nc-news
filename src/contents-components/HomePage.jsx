import SignIn from "./SignIn"

function HomePage() {
	return (
		<>
			<h2>Welcome to Northcoders News!</h2>
			<ul id="bullet">
				<li>View articles by topic</li>
				<li>Sort articles by date, votes or comments</li>
				<li>Upvote your favourite articles and comments</li>
				<li>Post and delete comments</li>
				<li>Add new topics</li>
			</ul>
			<SignIn />
		</>
	)
}

export default HomePage

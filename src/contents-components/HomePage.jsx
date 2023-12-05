import SignIn from "./SignIn"

function HomePage() {
	return (
		<>
			<h2>Welcome to Northcoders News!</h2>
			<h3>Please sign in to access all website features:</h3>
			<SignIn />
			<ul>
				<li>View articles by topic</li>
				<li>Sort articles by date, votes or comments</li>
				<li>Upvote your favourite articles and comments</li> 
                <li>Post and delete comments</li>
				<li>Add new topics</li>
			</ul>
		</>
	)
}

export default HomePage

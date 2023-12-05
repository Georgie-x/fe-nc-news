import { useContext, useState } from "react"
import { UserContext } from "../contexts/User"
import axios from "axios"

function SignIn() {
	const { user, setUser } = useContext(UserContext)
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [error, setError] = useState("")
	const [isLoading, setIsLoading] = useState(false)

	function handler(e) {
		e.preventDefault()
		if (password !== "wordpass") {
			setError("This password is incorrect, please try again")
		} else {
			setIsLoading(true)
			axios
				.get(`https://georgiex-news.onrender.com/api/users/${username}`)
				.then(({ data }) => {
					console.log(data)
					const user = data.user[0]
					setUser(user)
					setIsLoading(false)
				})
				.catch((err) => {
					console.log(err)
					setError(err.response?.data?.message || "An error occurred")
				}, [])
		}
	}

	return (
		<>
			<div className='container'>
				<form onSubmit={handler}>
					<label htmlFor='username-input'>Username</label>
					<br />
					<input
						required
						className='input'
						id='username-input'
						type='text'
						placeholder='e.g. jessjelly'
						onChange={(e) => {
							setUsername(e.target.value)
						}}
					></input>
					<br />
					<label htmlFor='password-input'>Password</label>
					<br />
					<input
						required
						className='input'
						id='password-input'
						type='password'
						placeholder='e.g. wordpass'
						onChange={(e) => {
							setPassword(e.target.value)
						}}
					></input>
					<br />
					<button type='submit'>SignIn</button>
				</form>

				<br />
				{isLoading ? (
					<h3>loading...</h3>
				) : (
					<ul>
						<li>{error}</li>
						<li>{user.username}</li>
						<li>{user.name}</li>
						<li>
							<img id='user' src={user.avatar_url} />
						</li>
					</ul>
				)}
			</div>
		</>
	)
}

export default SignIn

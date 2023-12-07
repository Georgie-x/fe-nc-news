import { useState, useContext } from "react"
import { UserContext } from "../contexts/User"
import axios from "axios"
import UserAccount from "./UserAccount"

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

	return user ? (
		<UserAccount />
	) : (
		<>
			<div className='container'>
			<h3>Please sign in to access all website features</h3>
				<form onSubmit={handler}>
					<div className='form-container'>
						<label htmlFor='username-input'>Username</label>

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

						<label htmlFor='password-input'>Password</label>

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
						{isLoading ? <h3>loading...</h3> : <p></p>}
						<button id='submit-signin' type='submit'>
							SignIn
						</button>
					</div>
				</form>
			</div>
		</>
	)
}

export default SignIn

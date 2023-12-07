import React, { useContext } from "react"
import { UserContext } from "../contexts/User"
import { useNavigate } from "react-router-dom"

function UserAccount() {
	const { user, setUser } = useContext(UserContext)
	const navigate = useNavigate()

	function clickHandler() {
		setUser("")
		navigate("/home")
	}

	console.log(user)
	return (
		<>
			<h2>You are signed in as {user.username}</h2>
			<ul>
				<li>
					Username: {user.username} | Name: {user.name}
				</li>
				<li>
					<img id='user' src={user.avatar_url} />
				</li>
				<li>
					<button onClick={clickHandler}>Sign Out</button>
				</li>
			</ul>
		</>
	)
}

export default UserAccount

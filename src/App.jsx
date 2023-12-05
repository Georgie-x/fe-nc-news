import { AccessLink, Header, ContentControl, Footer } from "./layout-components"
import { UserProvider } from "./contexts/User.jsx"

function App() {
	return (
		<>
			<AccessLink />
			<UserProvider>
				<div className='layout-container'>
					<Header />
					<ContentControl />
					<Footer />
				</div>
			</UserProvider>
		</>
	)
}

export default App

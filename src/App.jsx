import { AccessLink, Header, ContentControl, Footer } from "./components"

function App() {
	return (
		<>
			<AccessLink />
			<div className='page-container'>
				<Header />
				<ContentControl />
				<Footer />
			</div>
		</>
	)
}

export default App

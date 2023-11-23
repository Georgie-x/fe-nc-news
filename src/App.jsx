import { AccessLink, Header, ContentControl, Footer } from "./layout-components"

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

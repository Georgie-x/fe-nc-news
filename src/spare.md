

body,
h1,
p,
ul {
	margin: 0;
}


:root {
	--background-body: repeating-conic-gradient(
		hsl(211, 100%, 6%) 0%,
		hsl(211, 80%, 12%) 5%,
		hsl(211, 100%, 6%) 10%
	);
	--background-body-alt: repeating-conic-gradient(
		hsl(211, 80%, 12%) 0%,
		hsl(211, 100%, 6%) 5%,
		hsl(211, 80%, 12%) 10%
	);
	--background-main: hsl(211, 100%, 6%);
	--background-banner: hsl(211, 80%, 20%);
	--border: hsl(211, 66%, 66%);
	--highlight: hsl(31, 70%, 70%);
	--border-highlight: hsl(241, 100%, 70%);
	--text: hsl(221, 60%, 80%);
	font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
	color: var(--text);
	background: var(--background-body);
	overflow-x: hidden;
	box-sizing: border-box;
	display: grid;
	grid-template-rows: auto 1fr auto;
	text-align: center;
}

header {
	grid-row: 1;
	background-color: var(--background-banner);
	position: sticky;
	width: 100vw;
	top: 0;
	z-index: 2;
	border-bottom: 2px solid var(--border);
}

main {
	grid-row: 2;
	display: flex;
	flex-wrap: wrap;
	align-items: stretch;
	justify-content: center;
	margin: 0 auto;
	max-width: 1100px;
	min-height: 80vh;
	background-color: var(--background-main);
	gap: 3em;
	overflow: visible;
	flex-grow: 1;
	& > :first-child {
		flex-basis: 100%;
	}
}

footer {
	grid-row: 3;
	background-color: var(--background-banner);
	border-top: 2px solid var(--border);
	width: 100vw;
}

a {
	font-weight: 500;
	color: var(--border);
	text-decoration: inherit;
	width: 400px;
}
a:hover {
	color: var(--highlight);
}

h1 {
	font-size: 3em;
	text-align: center;
}
h2 {
	font-size: 2em;
	padding: 0.4em 0.4em 0.2em;
	color: var(--border);
}

h3 {
	font-size: 1.5em;
	color: var(--border);
}

ul {
	list-style: none;
	padding: 0.5em;
}
.across {
	display: flex;
	gap: 2em;
	justify-content: center;
}
.across > * {
	display: inline-block;
}

.container {
	display: grid;
	box-sizing: border-box;
	grid-template-rows: 1fr auto 1fr 1fr;
	background: var(--background-body);
	border-radius: 8px;
	border: 2px solid var(--border);
	width: clamp(20%, 400px, 80%);
	padding: 2em;
	position: relative;
	overflow: hidden;
}

.container .first-child {
	grid-row: 1;
	border: 1px solid red;
}

.container .second-child {
	grid-row: 2;
}
.container .third-child {
	grid-row: 3;
}
.container .fourth-child {
	grid-row: 4;
}

.container:hover {
	box-shadow: 0 0 30px var(--border-highlight);
	border-color: var(--border-highlight);
}

select {
	color: var(--border);
	font-size: 1.5em;
	font-weight: bold;
	background-color: var(--background-main);
	border-radius: 8px;
	border: 2px solid var(--border-highlight);
}

.input {
	height: 3em;
	border-radius: 8px;
	border: 2px solid var(--border);
	color: var(--text);
	background-color: var(--background-main);
}
#topic li {
	border: 2px solid var(--border);
	padding: 1em;
	margin-bottom: 2em;
	border-radius: 8px;
}

button {
	display: inline-block;
	padding: 0 1em;
	height: 3em;
	border-radius: 8px;
	border: 2px solid var(--border);
	background-color: var(--background-body);
	color: var(--highlight);
	cursor: pointer;
	transition: border-color 0.25s;
}
button:hover {
	border-color: var(--border-highlight);
}
button:focus,
button:focus-visible {
	outline: 4px auto purple;
}
details {
	overflow: visible;
}

details summary {
	cursor: pointer;
}

img {
	border: 1px solid var(--border);
	aspect-ratio: 16/10;
	width: clamp(10px, 100%, 500px);
	border-radius: 4px;
}

.skip-to-main-content-link {
	position: absolute;
	left: -9999px;
	z-index: 999;
	padding: 1em;
	background-color: black;
	color: white;
	opacity: 0;
}
.skip-to-main-content-link:focus {
	left: 50%;
	transform: translateX(-50%);
	opacity: 1;
}

.highlight {
	font-weight: 900;
	color: var(--highlight);
}

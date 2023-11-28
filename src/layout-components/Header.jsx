import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Northcoders News</h1>
      <nav>
        <ul className="across">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/articles">Browse Articles</Link></li>
          <li><Link to="/topics">Topics</Link></li>
          <li>Sign In</li>
        </ul>
      </nav>
    </header>
  );
}


export default Header

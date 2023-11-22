import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Northcoders News</h1>
      <nav>
        <ul className="across">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/articles">Latest Articles</Link></li>
          <li><Link to="/articles/">Article search</Link></li>
          <li><Link to="/topics">Topics</Link></li>
        </ul>
      </nav>
    </header>
  );
}


export default Header

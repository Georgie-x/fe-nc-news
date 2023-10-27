import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Northcoders News</h1>
      <nav>
        <ul className="flex-across">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/articles">Latest Articles</Link></li>
          <li><Link to="/topics/sports">Sports</Link></li>
          <li><Link to="/topics/coding">Coding</Link></li>
          <li><Link to="/topics/cooking">Cooking</Link></li>

        </ul>
      </nav>
    </header>
  );
}


export default Header

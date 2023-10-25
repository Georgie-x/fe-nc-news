import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function AllArticles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios
      .get("https://georgiex-news.onrender.com/api/articles")
      .then(({ data }) => {
        const articleList = data.articles;
        setArticles(articleList);
        setIsLoading(false)
      });
  }, []);

  return (
    <>
      <h2>Latest articles</h2>
      <p>{(isLoading)? "loading..." : null}</p> 
      <ul>
        {articles.map((article) => {
          return (
            <li className="all-articles" key={article.article_id}>
              <img className="small-img"src={article.article_img_url} />
              <p>
                #{article.article_id} | <Link to={`/articles/${article.article_id}`}>{article.title}</Link> by {article.author} {article.created_at}
              </p>
          
              <hr></hr>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default AllArticles;

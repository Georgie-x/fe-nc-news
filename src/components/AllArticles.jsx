import { useState, useEffect } from "react";
import axios from "axios";

function AllArticles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("https://georgiex-news.onrender.com/api/articles")
      .then(({ data }) => {
        const articleList = data.articles;
        setArticles(articleList);
        console.log(articleList);
      });
  }, []);

  return (
    <>
      <h2>Latest articles</h2>
      <ul>
        {articles.map((article) => {
          return (
            <li className="all-articles" key={article.article_id}>
              <img src={article.article_img_url} />
              <p>
                #{article.article_id} {article.title} by {article.author}{" "}
                {article.created_at}
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

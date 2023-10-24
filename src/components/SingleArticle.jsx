import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios
      .get(`https://georgiex-news.onrender.com/api/articles/${article_id}`)
      .then(({ data }) => {
        const article = data.article;
        setArticle(article);
        setIsLoading(false)
      });
  }, []);

  return (
    <>
      <h2> {article.title}</h2>
      <p>{(isLoading)? "loading..." : null}</p> 
      <p>Article #{article_id}</p>
      <p>Author: {article.author}</p>
      <p>Topic: {article.topic} </p>
      <p>{article.created_at}</p>
      <img src={article.article_img_url} /> <p>{article.body}</p>
      <p>Votes: {article.votes}</p>
    </>
  );
}

export default SingleArticle;

import { Routes, Route } from "react-router-dom";
import { AllArticles, SingleArticle, ErrorPage, AllTopics, Comments } from "./index";

function ContentControl() {
  return (
    <main>
      <div>
        <Routes>
        <Route path="/" element={<AllArticles />} />
          <Route path="/articles" element={<AllArticles />} />
          <Route path="/articles/:article_id/*" element={<SingleArticle />} />
          <Route path="/topics" element={<AllTopics />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </div>
    </main>
  );
}

export default ContentControl;

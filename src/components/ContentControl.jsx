import { Routes, Route } from "react-router-dom";
import { AllArticles, SingleArticle, ErrorPage, AllTopics } from "./index";

function ContentControl() {
  return (
    <main>
      <div className="contentContainer">
        <Routes>
        <Route path="/" element={<AllArticles />} />
          <Route path="/articles" element={<AllArticles />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
          <Route path="/topics" element={<AllTopics />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </div>
    </main>
  );
}

export default ContentControl;

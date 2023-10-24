import { Routes, Route } from "react-router-dom";
import { AllArticles, SingleArticle, ErrorPage } from "./index";

function ContentControl() {
  return (
    <main>
      <div className="contentContainer">
        <Routes>
        <Route path="/" element={<AllArticles />} />
          <Route path="/articles" element={<AllArticles />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
          <Route path="/topics" element={<SingleArticle />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </div>
    </main>
  );
}

export default ContentControl;

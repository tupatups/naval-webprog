import { useEffect, useState } from "react";
import Button from "../../components/Button.jsx";
import ArticleList from "../../components/ArticleList.jsx";
import { fetchArticles } from "../../services/ArticleService.js";

const ArticleListPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isActive = true;

    const loadArticles = async () => {
      try {
        setLoading(true);
        const { data } = await fetchArticles();
        const apiArticles = data?.articles || data || [];
        const normalized = apiArticles
          .filter((article) => article.status !== "inactive")
          .map((article) => {
            const contentText = typeof article.content === "string" ? article.content : "";
            const content = contentText
              .split("\n")
              .map((line) => line.trim())
              .filter(Boolean);

            return {
              _id: article._id,
              name: article.slug,
              slug: article.slug,
              title: article.title,
              content: content.length ? content : [""],
              imageUrl: article.imageUrl || "",
            };
          });

        if (isActive) {
          setArticles(normalized);
          setError("");
        }
      } catch (err) {
        console.error("Error fetching articles:", err);
        if (isActive) {
          setError("Failed to load articles.");
        }
      } finally {
        if (isActive) setLoading(false);
      }
    };

    loadArticles();
    return () => {
      isActive = false;
    };
  }, []);

  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-[#8f7a3d]/45 bg-[#e6dcc3] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6f5c28]">
          Articles
        </p>
        <h1 className="max-w-xl text-3xl font-bold leading-tight text-[#16392e] sm:text-4xl">
          Featured articles in a simple card grid
        </h1>
        <p className="mt-4 max-w-lg text-sm leading-7 text-[#2f473d] sm:text-base">
          A clean wireframe section for article thumbnails, titles, short descriptions, and one clear action per card.
        </p>
        <div className="mt-6">
          <Button to="/">Back Home</Button>
        </div>
      </section>

      <section className="border-y-2 border-[#8f7a3d]/45 bg-[#e6dcc3] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6f5c28]">
            Featured Articles
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-[#16392e]">Article card grid</h2>
        </div>

        {loading ? (
          <p className="text-sm text-[#2f473d]">Loading articles...</p>
        ) : error ? (
          <p className="text-sm text-red-700">{error}</p>
        ) : articles.length ? (
          <ArticleList articles={articles} />
        ) : (
          <p className="text-sm text-[#2f473d]">No articles available yet.</p>
        )}
      </section>
    </div>
  );
}

export default ArticleListPage;

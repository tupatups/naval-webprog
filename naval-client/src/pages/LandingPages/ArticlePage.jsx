import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/Button.jsx";
import { fetchArticles } from "../../services/ArticleService.js";

function ArticlePage() {
  const { name } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isActive = true;

    const loadArticle = async () => {
      try {
        setLoading(true);
        const { data } = await fetchArticles();
        const apiArticles = data?.articles || data || [];
        const match = apiArticles.find(
          (item) => item.slug === name && item.status !== "inactive"
        );

        if (isActive) {
          if (match) {
            const contentText = typeof match.content === "string" ? match.content : "";
            const content = contentText
              .split("\n")
              .map((line) => line.trim())
              .filter(Boolean);

            setArticle({
              _id: match._id,
              name: match.slug,
              slug: match.slug,
              title: match.title,
              content: content.length ? content : [""],
              imageUrl: match.imageUrl || "",
            });
          } else {
            setArticle(null);
          }
          setError("");
        }
      } catch (err) {
        console.error("Error fetching article:", err);
        if (isActive) {
          setError("Failed to load article.");
          setArticle(null);
        }
      } finally {
        if (isActive) setLoading(false);
      }
    };

    loadArticle();
    return () => {
      isActive = false;
    };
  }, [name]);

  if (!article) {
    return (
      <div className="flex w-full flex-col gap-6">
        <section className="border-y-2 border-[#8f7a3d]/45 bg-[#e6dcc3] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold text-[#16392e]">
              {loading ? "Loading article..." : error || "Article not found"}
            </h1>
            <Button to="/articles" className="mt-6">Back to Articles</Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-[#8f7a3d]/45 bg-[#e6dcc3] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-4">
            <Button to="/articles">&larr; Back to Articles</Button>
          </div>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6f5c28]">
            Article
          </p>
          <h1 className="text-3xl font-bold leading-tight text-[#16392e] sm:text-4xl">
            {article.title}
          </h1>
          <p className="mt-2 text-sm text-[#5e6a58]">
            {article.name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </p>
        </div>
      </section>

      <section className="border-y-2 border-[#8f7a3d]/45 bg-[#e6dcc3] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {article.imageUrl ? (
            <img
              src={article.imageUrl}
              alt={article.title}
              className="mb-8 aspect-4/3 w-full rounded-[1.25rem] border-2 border-[#8f7a3d]/45 object-cover"
            />
          ) : (
            <div className="mb-8 flex aspect-4/3 w-full items-center justify-center rounded-[1.25rem] border-2 border-[#8f7a3d]/45 bg-[#dcccab] text-xs font-semibold uppercase tracking-[0.2em] text-[#6f5c28]">
              No image
            </div>
          )}

          <div className="prose prose-sm max-w-none space-y-4 text-[#2f473d]">
            {article.content.map((paragraph, index) => (
              <p key={index} className="whitespace-pre-wrap text-base leading-7 text-[#2f473d]">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 border-t-2 border-[#8f7a3d]/45 pt-6">
            <Button to="/articles">Back to Articles</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ArticlePage;

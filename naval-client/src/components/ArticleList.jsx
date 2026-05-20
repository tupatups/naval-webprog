import { Link } from 'react-router-dom';
import Button from './Button';

const ArticleList = ({ articles }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {articles.map((article, index) => {
        const articleKey =
          article._id || article.id || article.name || article.slug || index;
        const articleSlug = article.name || article.slug;
        const previewSource = Array.isArray(article.content)
          ? article.content.find(Boolean) || ""
          : article.content || "";
        const previewText = previewSource ? previewSource.substring(0, 150) : "No description yet.";
        const previewSuffix = previewSource && previewSource.length > 150 ? "..." : "";

        return (
          <article
            key={articleKey}
            className="rounded-3xl border-2 border-[#8f7a3d]/45 bg-[#e6dcc3] p-4 shadow-sm"
          >
            {article.imageUrl ? (
              <img
                src={article.imageUrl}
                alt={article.title}
                className="aspect-4/3 w-full rounded-[1.25rem] object-cover"
              />
            ) : (
              <div className="flex aspect-4/3 w-full items-center justify-center rounded-[1.25rem] border-2 border-[#8f7a3d]/30 bg-[#dcccab] text-xs font-semibold uppercase tracking-[0.2em] text-[#6f5c28]">
                No image
              </div>
            )}
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#6f5c28]">
              Article {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-2 text-lg font-semibold text-[#16392e]">{article.title}</h3>

            <p className="mt-3 text-sm leading-6 text-[#2f473d]">
              {previewText}
              {previewSuffix}
            </p>
            <Link to={articleSlug ? `/articles/${articleSlug}` : "/articles"}>
              <Button className="mt-4">Read More</Button>
            </Link>
          </article>
        );
      })}
    </div>
  );
};

export default ArticleList;

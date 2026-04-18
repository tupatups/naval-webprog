import { Link } from 'react-router-dom';
import Button from './Button';

const ArticleList = ({ articles }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {articles.map((article, index) => (
        <article
          key={article.name}
          className="rounded-3xl border-2 border-[#8f7a3d]/45 bg-[#e6dcc3] p-4 shadow-sm">
          <img 
            src={article.imageUrl} 
            alt={article.title} 
            className="aspect-4/3 w-full object-cover rounded-[1.25rem]" 
            />
          <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#6f5c28]">
            Article {String(index + 1).padStart(2, '0')}
          </p>
          <h3 className="mt-2 text-lg font-semibold text-[#16392e]">{article.title}</h3>

          <p className="mt-3 text-sm leading-6 text-[#2f473d]">
            {article.content[0].substring(0, 150)}...
          </p>
          <Link to={`/articles/${article.name}`}>
            <Button className="mt-4">Read More</Button>
          </Link>
        </article>
      ))}
    </div>
  );
};

export default ArticleList;

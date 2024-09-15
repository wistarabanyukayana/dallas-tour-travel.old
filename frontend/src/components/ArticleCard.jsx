import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <div key={article.Id} className="col-md-6 col-lg-4">
      <div className="main-block latest-block">
        <div className="main-img latest-img">
          <Link to="#">
            <img
              src={article.ImageURL}
              className="img-fluid blog-img"
              alt="blog-img"
            />
          </Link>
        </div>
        {/* end latest-img */}
        <div className="latest-info">
          <ul className="list-unstyled">
            <li>
              <span>
                <i className="fa fa-calendar-minus-o" />
              </span>
              {new Date(article.CreatedAt).toLocaleDateString("id-ID", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              <span className="author">
                Oleh{" "}
                <Link to="#">
                  {article.Author.charAt(0).toUpperCase() +
                    article.Author.slice(1)}
                </Link>
              </span>
            </li>
          </ul>
        </div>
        {/* end latest-info */}
        <div className="main-info latest-desc">
          <div className="row">
            <div className="col-10 col-md-10 main-title">
              <Link
                to={`/artikel/${article.Id}/${article.Title.replace(
                  /[^a-zA-Z0-9 ]/g,
                  ""
                )
                  .toLowerCase()
                  .replace(/\s/g, "-")}`}
              >
                {article.Title}
              </Link>
              <p>{article.Content.slice(0, 57) + "..."}</p>
            </div>
            {/* end columns */}
          </div>
          {/* end row */}
          <span className="arrow">
            <Link
              to={`/artikel/${article.Id}/${article.Title.replace(
                /[^a-zA-Z ]/g,
                ""
              )
                .toLowerCase()
                .replace(/\s/g, "-")}`}
            >
              <i className="fa fa-angle-right" />
            </Link>
          </span>
        </div>
        {/* end latest-desc */}
      </div>
      {/* end latest-block */}
    </div>
  );
};

export default ArticleCard;

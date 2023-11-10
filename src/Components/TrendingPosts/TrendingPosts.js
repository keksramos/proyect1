import React from "react";
import("./trendingPosts.scss");

function TrendingPosts(props) {
  const { title, author, creationDate, readTime } = props;

  return (
    <section className="TrendingPosts__container">
        {/* <p className="indexTendringPost">{id}</p> */}
      <div className="TrendingContainer">
      <p className="AuthorTP">{author}</p>
          <p className="TitleTP">{title}</p>
          <div className="GreyLetters">
            <p className="DateTP">{creationDate}</p>
            <p className="DateTP">·</p>
            <p className="DateTP">{readTime}</p>
        </div>
      </div>
    </section>
  );
}

export default TrendingPosts;

import React from "react";
import ('./trendingPosts.scss')

function TrendingPosts(props){
    const {index, id, title, author, creationDate, readTime} = props;

    // const renderList= () => {
    //     if({index} < 5){
    //         return {index, id, title, author, creationDate, readTime}
    //     }
    // }

    return <section className="TendingPosts__container">
        <div className="TrendingContainer">
        <p className="indexTendringPost">{id}</p>
        <div className="postInfocontianerTP">
            <p className="AuthorTP">{author}</p>
            <p className="TitleTP">{title}</p>
        <div className="GreyLetters">
            <p className="DateTP">{creationDate}</p>
            <p className="DateTP">·</p>
            <p className="DateTP">{readTime}</p>
        </div></div>
    </div>;
    </section>
}

export default TrendingPosts;
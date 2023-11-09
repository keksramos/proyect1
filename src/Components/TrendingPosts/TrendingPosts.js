import React from "react";
import ('./trendingPosts.scss')

function TrendingPosts(props){
    const {id, title, author, creationDate, readTime} = props;

    // const trendingPostList = props.slice(0,5)
    // console.log(trendingPostList)


    return <section className="TrendingPosts__container">
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
    </div>
    </section>
}

export default TrendingPosts;
import React from "react";
import {FaBookmark, FaRegBookmark} from "react-icons/fa"
import ('./post.scss')

function Post(props){
    const {title, author, creationDate, description, coverImage, readTime} = props;

    return <div className="postContainer">
        <section className="textContainer">
            <p className="Author">{author}</p>
            <p><b>{title}</b></p>
            <p className="Description">{description}</p>
            <div className="GreyLetters">
                <p className="Date">{creationDate}</p>
                <p></p>
                <p className="ReadTime">·</p>
                <p className="ReadTime">{readTime}</p>
                <button className="bookmarkButton"><FaRegBookmark/></button>
            </div>
        </section>
        <picture>
            <img className="picture" src={coverImage ? coverImage : "https://enteracloud.mx/wp-content/uploads/2021/08/placeholder.png"} alt={title}/>
        </picture>
    </div>;
}

export default Post;
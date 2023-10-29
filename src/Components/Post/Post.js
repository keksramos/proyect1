import React from "react";
import ('./post.scss')

function Post(props){
    const {title, author, creationDate, description} = props;

    return <div className="postContainer">
        <p>{title}</p>
        <p>{author}</p>
        <p>{creationDate}</p>
        <p>{description}</p>
    </div>;
}

export default Post;
import React from "react";
import ('./post.scss')

function Post(props){
    const {title, author, creationDate, description} = props;

    return <div className="postContainer">
        <p className="Author">{author}</p>
        <p><b>{title}</b></p>
        <p className="Date">{creationDate}</p>
        <p>{description}</p>
    </div>;
}

export default Post;
import React from "react";
import ('./post.scss')

function Post(props){
    const {title, author, creationDate, description, coverImage} = props;

    return <div className="postContainer">
        <section className="textContainer">
            <p className="Author">{author}</p>
            <p><b>{title}</b></p>
            <p className="Date">{creationDate}</p>
            {/* <p className="Description">{description}</p> */}
        </section>
        <picture>
        <img className="picture" src={coverImage ? coverImage : "https://enteracloud.mx/wp-content/uploads/2021/08/placeholder.png"} alt={title}/>
        </picture>
    </div>;
}

export default Post;
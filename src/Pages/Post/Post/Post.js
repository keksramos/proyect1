import React from "react";
import { FaRegBookmark, FaRegComment} from "react-icons/fa"
import { Link } from "react-router-dom";
import ('./post.scss')

function Post(props){
    const {_id, title, creationDate, description, coverImage, readTime, comments} = props;

    // console.log(props)

    return <div className="postContainer">
        <section className="postTextContainer">
            {/* <p className="Author">{author}</p> */}
            <Link to={`/post/${_id}`} className="postWithLink">
            <p><b>{title}</b></p>
            <p className="Description">{description}</p>
            </Link>
            <div className="GreyLetters">
                <p className="Date">{creationDate}</p>
                <p className="ReadTime">·</p>
                <p className="ReadTime">{readTime}</p>
                <p className="ReadTime">·</p>
                <p className="ReadTime"><FaRegComment /> {comments}</p>
                <button className="bookmarkButton"><FaRegBookmark/></button>
            </div>
        </section>
        <picture>
            <img className="picture" src={coverImage ? coverImage : "https://enteracloud.mx/wp-content/uploads/2021/08/placeholder.png"} alt={title}/>
        </picture>
    </div>;
}

export default Post;
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import './view.scss';

export default function PostView(){
    const {id} = useParams()
    const [post, setPost] = React.useState([])

    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch (`http://localhost:5001/post/${id}`)
            const data = await response.json()

            //Convert date to dateString
            
            
              setPost(data);
              console.log(data)
            }
            fetchPost();
          });

    return(
        <div className="postBuilder">
            {
                post &&(
                    <>
                        <img src={post.coverImage} className="topImageCover"></img>
                        <h2 className="postTitleViewPost">{post.title}</h2>
                        <p className="postDate">{post.creationDate} | {post.readTime}</p>
                        <p className="postDescription">{post.description}</p>
                        <p className="commentsTitle">Comments:</p>
                        <p>{post.comments}</p>
                    </>
                )
            }
        </div>
    )
}
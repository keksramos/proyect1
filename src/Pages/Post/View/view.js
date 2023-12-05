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
            // data.forEach ( async (post) => {
            //     const date = new Date(post.creationDate);
        
            //     const month = date.getMonth();
            //     const monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dic" ];
        
            //     const dateString = `${monthNames[month]}, ${date.getDate()}`;
            //     post.creationDate = dateString;
        
            //     //Get comments count
            //     // const comments = await fetchComments(post._id);
            //   });
        
              setPost(data);
              console.log(data)
            };
            fetchPost();
          });

    return(
        <div className="post">
            {
                post &&(
                    <>
                        <h2>{post.title}</h2>
                        <p>{post.creationDate} | {post.readTime}</p>
                        <h3>{post.description}</h3>
                        <p>Comments: {post.comments}</p>
                    </>
                )
            }
        </div>
    )
}
import React, { useEffect, useState } from "react";

import "./home.scss";
import Post from "../Post/Post/Post";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchComments = async (postId) => {
      const response = await fetch(
        `http://localhost:5001/commentsbypost/${postId}`
      );
      const data = await response.json();

      return data.length;
    };
    const fetchPosts = async () => {
      const response = await fetch("http://localhost:5001/posts");
      const data = await response.json();

      // Convert date to dateString
      data.forEach(async (post) => {
        const date = new Date(post.creationDate);

        const month = date.getMonth();
        const monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dic" ];

        const dateString = `${monthNames[month]}, ${date.getDate()}`;
        post.creationDate = dateString;

        //Get comments count
        const comments = await fetchComments(post._id);
      });

      setPosts(data);
    };
    fetchPosts();
  });
  return ( 
    <div className="Home">
      <section className="Content-Body">
        <div>
          {posts.map((post, index) => {
            return (
              <Post
                key= {index}
                _id={post._id}
                title={post.title}
                author={post.author}
                creationDate={post.creationDate}
                description={post.description}
                readTime={post.readTime}
                coverImage={post.coverImage}
                comments={post.comments}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Home;

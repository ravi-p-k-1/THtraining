import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
});

export const DataTable = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // ---------------------------------------------------------------------------------------------------------------------
    // THIS METHOD IS OF USING ASYNC/AWAIT
    // const fetchPosts = async () => {
    //   try {
    //     const response = await fetch(
    //       "https://jsonplaceholder.typicode.com/posts?_limit=10"
    //     );
    //     var data = await response.json();
    //     setPosts(data);
    //     console.log(data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // fetchPosts();

    // ---------------------------------------------------------------------------------------------------------------------
    // BELOW METHOD USES FUNCTION CHAINING
    // fetch("https://jsonplaceholder.typicode.com/posts?_limit=10", {
    //     method:'GET',
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setPosts(data);
    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //   });

    // ---------------------------------------------------------------------------------------------------------------------
    // BELOW METHOD USING AXIOS FUNCTION
    try {
      const fetchPosts = async () => {
        const response = await client.get("?_limit=10");
        console.log(response);
        setPosts(response.data);
      };

      fetchPosts();
    } catch (error) {
      console.log(error);
    }
  }, []);

  //   useEffect(() => {
  //     console.log(data);
  //   }, [data]);

  return (
    <div>
      {posts &&
        posts.length > 0 &&
        posts.map((post) => {
          return (
            <div className="post-card" key={post.id}>
              <h2 className="post-title">{post.title}</h2>
              <p className="post-body">{post.body}</p>
              <div className="button">
                <div className="delete-btn">Delete</div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import useBlogPosts from "../utility/useBlogPosts";

function ViewPostPage() {
  // const navigate = useNavigate();

  const { posts, isError, isLoading } = useBlogPosts();

  // const [posts, setPosts] = useState([]);
  // const [isError, setIsError] = useState(null);
  // const [isLoading, setIsLoading] = useState(null);

  // const getPosts = async () => {
  //   try {
  //     setIsError(false);
  //     setIsLoading(true);
  //     const results = await axios("http://localhost:4000/posts");
  //     setPosts(results.data.data);
  //     setIsLoading(false);
  //   } catch (error) {
  //     setIsError(true);
  //   }
  // };

  // useEffect(() => {
  //   getPosts();
  // }, []);

  return (
    <div>
      <h1>View Post Page</h1>
      <div className="view-post-container">
        <h2>Post Title</h2>
        <p>Content</p>
      </div>

      <hr />
      <div className="show-all-posts-container">
        <h2>All Posts</h2>
        {posts.map((post) => {
          return (
            <div key={post.id} className="post">
              <h1>{post.title}</h1>
              <div className="post-actions">
                <button className="view-button">View post</button>
              </div>
            </div>
          );
        })}
        {isError ? <h1>Request failed</h1> : null}
        {isLoading ? <h1>Loading ....</h1> : null}
      </div>

      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}

export default ViewPostPage;

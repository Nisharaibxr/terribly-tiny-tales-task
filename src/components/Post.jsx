import React, { useState, useEffect } from 'react';
import "../styles/post.css";

function Post() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getData = () => {
    fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((data) => {
      setPosts(data);
    })
    .catch((error) => {
      console.error("Error fetching data: ", error);
      setError(true);
    })
    .finally(() => {
      setLoading(false);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading posts.</div>;
  }

  return (
    <div className="posts-section">
      {posts.map((post) => (
        <div className="post-item" key={post.id}>
          <div className="post-title-container">
            <h2 className="post-title">{post.title}</h2>
            <i className={post.iconClass}></i>
          </div>
            <p className="post-excerpt">{post.excerpt}</p>
            <div className="post-meta">
            <span className="post-category">{post.category}</span>
            <span className="post-author">{post.author}</span>
            <div className="post-info-container">
              <span className="post-info">{post.date} • {post.readTime} • {post.views} Views</span>
              <hr className="horizontal-line" />  
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Post;

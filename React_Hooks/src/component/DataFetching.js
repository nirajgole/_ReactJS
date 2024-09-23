import Axios from "axios";
import React, { useEffect, useState } from "react";

function DataFetching() {
  //   const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  useEffect(() => {
    Axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonClick]);

  const handleClick = () => {
    setIdFromButtonClick(id);
  };
  return (
    <div>
      {/* {posts.map((post) => (
        <li key={post.id}>Title: {post.title}</li>
      ))} */}
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleClick}>Fetch Post</button>
      <div>{post.title}</div>
    </div>
  );
}

export default DataFetching;

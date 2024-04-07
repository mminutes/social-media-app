import React, { useState } from 'react';

function Post({ title, content}) {
  const [likes, setLikes] = useState(0);
  
  function handleLike() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>Likes: {likes}</p>
      <button onClick={handleLike}>Like</button>
    </div>
  );
}

export default Post;
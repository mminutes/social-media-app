import React from 'react';
import Post from './Post';

function Feed({ posts }) {

  const reversedPosts = [...posts].reverse();

  return (
    <div>
      {reversedPosts.map((post) => (
        <Post key={post.id} content={post.content} title={post.title} />
      ))}
    </div>
  );
}

export default Feed;
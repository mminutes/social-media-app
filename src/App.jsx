import React from 'react';
import Feed from './components/Feed';
import CreatePostForm from './components/CreatePostForm';
import Post from './components/Post';
import {useState} from 'react';
import './App.css';


function App() {

  const [posts, setPosts] = useState([]);
  const [postId, setPostId] = useState(0);

  const handleNewPost = (newPost) => {
    const newPostId = { ...newPost, id: postId };
    setPostId(postId + 1);
    setPosts([...posts, newPostId]);
  };

  return (
    <div>
      <h1>Fakebook!</h1>
      <CreatePostForm onNewPost={handleNewPost} />
      <Feed posts={posts} />
      <Post title="Test Post" content="This is a test post!" />
    </div>
  );
}

export default App;
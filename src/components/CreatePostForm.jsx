import React, { useState } from 'react';

function CreatePostForm({ onNewPost }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onNewPost({ title, content });
    setTitle('');
    setContent('');
  }

  return (
    <div className="create-post-form">
      <h4>Create Post</h4>
      <form onSubmit={handleSubmit}>
        <input 
          required 
          type="text" 
          placeholder="Title" 
          value={title}
          onChange={(e) => setTitle(e.target.value)} 
          />
        <textarea 
          required
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
          placeholder="Content"
        ></textarea>
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default CreatePostForm;
import React from 'react';
import Post from '../post/post';

const postInfoA = {
  profile_id: 23,
  author_id: 3,
  content: "cool profile",
  created_at: "01-01-2016",
  comments: [
    {
      content: "yeah it's really cool!",
      author_id: 19,
      created_at: "01-01-2016",
    },
    {
      content: "not as nice as mine",
      author_id: 19,
      created_at: "01-01-2016"
    }
  ]
};

const postInfoB = {
  profile_id: 12,
  author_id: 4,
  content: "No, it sucks!",
  created_at: "01-01-2016",
  comments: [
    {
      content: "yeah, it's horrible",
      author_id: 19,
      created_at: "01-01-2016"
    },
    {
      content: "^^what she said",
      author_id: 19,
      created_at: "01-01-2016"
    }
  ]
};

const posts = [postInfoA, postInfoB];

export default (props) => (
  <div className="timeline group">
    {posts.map( post => <Post post={post} currentProfile={props.currentProfile}/> )}
  </div>
);

import React from 'react'
import s from './MyPosts.module.css'
import Posts from './Posts/Posts';

const MyPosts =() => {
    return (
      <div>
        My posts
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>
        <div className={s.posts}>
          <Posts message="Hi, how r u?" Likes = '15'/>
          <Posts message="It's my first post" Likes='25'/>
        </div>
      </div>
    );
}

export default MyPosts
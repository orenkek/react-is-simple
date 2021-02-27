import React from 'react'
import s from './ProfileContent.module.css'
import MyPost from './MyPosts/MyPosts'

const ProfileContent = () => {
    return (
      <div className={s.content}>
        <div>
          <img src="https://www.ontarioparks.com/images/headers/parks/winter/1200/longpoint.jpg" />
        </div>
        <div>ava + description</div>
        <MyPost />
      </div>
    );
}

export default ProfileContent
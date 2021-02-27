import React from 'react'
import s from './ProfileContent.module.css'

const ProfileContent = () => {
    return (
      <div className={s.content}>
        <div>
          <img src="https://www.ontarioparks.com/images/headers/parks/winter/1200/longpoint.jpg" />
        </div>
        <div>ava + description</div>
        <div>
          My posts
          <div>New Post</div>
          <div className={s.posts}>
            <div className={s.item}>post 1</div>
            <div className={s.item}>post 2</div>
          </div>
        </div>
      </div>
    );
}

export default ProfileContent
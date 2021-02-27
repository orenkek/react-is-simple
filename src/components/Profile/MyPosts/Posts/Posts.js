import React from 'react'
import s from './Posts.module.css'

const Posts =(prop) => {
    return (
      <div className={s.item}>
        <img src='https://image.flaticon.com/icons/png/512/147/147144.png'/>
        {prop.message}
        <div>
          <span>Likes : {prop.likesCount}</span>
        </div>
      </div>
    );
}

export default Posts
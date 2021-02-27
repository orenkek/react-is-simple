import React from 'react'
import s from './Posts.module.css'

const Posts =() => {
    return (
      <div className={s.item}>
        <img src="https://image.flaticon.com/icons/png/512/147/147144.png" />
        post 1
        <div>
          <span>Like</span>
        </div>
      </div>
    );
}

export default Posts
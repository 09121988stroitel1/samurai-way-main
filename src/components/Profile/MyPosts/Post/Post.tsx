import React from "react";
import s from './Post.module.css'
const Post = () => {
    return (
        <div >
                <div className={s.item}>
                    <img src={'https://klike.net' +
                        '/uploads/posts/2019-06/1560329641_2.jpg'}/>
                    Post 1
                <div><span>like</span></div>

                </div>
        </div>
    )
}
export default Post
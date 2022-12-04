import React from "react";
import s from './Post.module.css'

type PostPropsType = {
    message: string
    like: number
}

const Post = (props: PostPropsType) => {

    return (
        <div >
                <div className={s.item}>
                    <img src={'https://klike.net' +
                        '/uploads/posts/2019-06/1560329641_2.jpg'}/>
                    {props.message}
                <div>
                    <span>like: {props.like}</span>
                </div>
                </div>
        </div>
    )
}
export default Post
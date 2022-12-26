import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostsType} from "../../../redux/state";



//
export type PostsPropsType = {
    posts: PostsType[]
}


const MyPosts: React.FC< PostsPropsType> = (props) => {


    let postsElements = props.posts.map((i)=> {
        return (
            <Post id={i.id} message={i.message} like={i.likesCount}/>
        )}
    )

    let newPostElement = React.createRef<HTMLTextAreaElement>()
    const addPost = ()=> {
        let text = newPostElement.current?.value
        alert(text)
    }

    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea ref ={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {postsElements}
            </div>


        </div>
    )
}
export default MyPosts
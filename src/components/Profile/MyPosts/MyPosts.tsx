import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {PostsType, profilePageType} from '../../../redux/state';

export type PostsPropsType = {
    profilePage: profilePageType
    dispatch: (action: any) => void
}

const MyPosts: React.FC<PostsPropsType> = (props) => {

    let postsElements = props.profilePage.posts.map((i) => {
            return (
                <Post id={i.id} message={i.message} like={i.likesCount}/>
            )
        }
    )

    let newPostElement = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
        props.dispatch({ type: 'ADD-POST'})
        // props.addPost()

    }
    let onPostChange = ()=> {
    let text: string = newPostElement!.current!.value
        props.dispatch({type:'UPDATE-NEW-POST-TEXT', newText: text})
        // props.updateNewPostText(text)

    }

    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea
                        ref={newPostElement}
                         onChange={onPostChange}
                        value={props.profilePage.newPostText}/>
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
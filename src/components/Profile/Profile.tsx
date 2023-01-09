import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionType, PostsType, profilePageType} from '../../redux/state';




type ProfilePropsType = {
    profilePage: profilePageType
    dispatch: (action: ActionType) => void
}



const Profile: React.FC<ProfilePropsType> = (props) => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
           <MyPosts profilePage={props.profilePage}
                    dispatch = {props.dispatch}
           />
        </div>
    )
}

export default Profile
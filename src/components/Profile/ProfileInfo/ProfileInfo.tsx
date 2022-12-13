import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo: React.FC = () => {
    return (
        <div>
            <div> <img src={"https://encrypted-tbn0." +
                "gstatic.com/images?q=tbn:ANd9GcRHp" +
                "Tun6ZJzXtt0rIiRtvI5Hdt0JwtGFxxmcA&usqp=CAU"}/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}
export default ProfileInfo
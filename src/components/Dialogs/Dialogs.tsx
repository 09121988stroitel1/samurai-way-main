import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import DialogItem  from "./DialogItem/DialogItem";
import Message  from "./Messages/Message";
import { messagesPageType} from "../../redux/state";

type DialogsMessagesPropsType = {
    dialogsMessages: messagesPageType
}

const Dialogs = (props: DialogsMessagesPropsType) => {

    let dialogsElement =props.dialogsMessages.dialogs.map((i)=> {
            return(
                <DialogItem name = {i.name} id ={i.id}/>
            )
        })

    let messagesElement = props.dialogsMessages.messages.map((i)=> {
        return (
            <Message id={i.id} message={i.message}/>
        )
    })
    return (
       <div className={s.dialogs + ' ' + s.active}>
           <div className={s.dialogsItem}>
               {dialogsElement}
           </div>
           <div className={s.messages}>
               {messagesElement}
           </div>
       </div>
    )
}
export  default Dialogs
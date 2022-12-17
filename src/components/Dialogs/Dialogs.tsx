import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import DialogItem, {DialogItemPropsType} from "./DialogItem/DialogItem";
import Message, {MessagePropsType} from "./Messages/Message";

const Dialogs = () => {
    let dialogs:  DialogItemPropsType[] = [
        {id: 1, name: 'Aleks'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Vasia'},
        {id: 4, name: 'Lili'},
        {id: 5, name: 'Sisi' },
        {id: 6, name: 'Рик'},
    ]

    let dialogsElement = dialogs.map((i)=> {
            return(
                <DialogItem name = {i.name} id ={i.id}/>
            )
        })

    let messagesData:  MessagePropsType[] = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hou are yuo?'},
        {id: 3, message: 'Im faind'},
    ]

    let messagesElement = messagesData.map((i)=> {
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
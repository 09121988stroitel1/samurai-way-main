import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    id: number
    name: string
}

type MessagePropsType = {
    id: number
    message: string
}

const DialogItem: React.FC<DialogItemPropsType> = (props) => {
    return(
        <div className={s.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props:MessagePropsType)=> {
    return (
        <div className={s.message} key={props.id}>{props.message}</div>
    )
}

const Dialogs = () => {
    let dialogs:  DialogItemPropsType[] = [
        {id: 1, name: 'Aleks'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Vasia'},
        {id: 4, name: 'Lili'},
        {id: 5, name: 'Sisi' },
        {id: 6, name: 'Рик'},
    ]
    let messagesData:  MessagePropsType[] = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hou are yuo?'},
        {id: 3, message: 'Im faind'},
    ]
    return (
       <div className={s.dialogs + ' ' + s.active}>
           <div className={s.dialogsItem}>
               {dialogs.map((i)=> {
                   return(
                       <DialogItem name = {i.name} id ={i.id}/>
                       )

               })}
           </div>
           <div className={s.messages}>
               {messagesData.map((i)=> {
                   return (
                       <Message id={i.id} message={i.message}/>
                   )
               })}
           </div>
       </div>
    )
}
export  default Dialogs
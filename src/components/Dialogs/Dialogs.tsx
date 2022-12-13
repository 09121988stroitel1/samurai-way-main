import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    id: string
    name: string
}

type MessagePropsType = {
    message: string
}

const DialogItem = (props: DialogItemPropsType) => {
    return(
        <div className={s.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props:MessagePropsType)=> {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = () => {
    return (
       <div className={s.dialogs}>
           <div className={s.dialogsItem}>
              <DialogItem name='Aleks' id='1'/>
               <div className={s.dialog + ' ' + s.active}>
                   <NavLink to="/dialogs/2"> Andrey</NavLink>
              </div>
               <div className={s.dialog}>
                   <NavLink to="/dialogs/3">Vasia</NavLink>
              </div>
               <div className={s.dialog}>
                   <NavLink to="/dialogs/4">Lili</NavLink>
              </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Sisi</NavLink>
              </div>

           </div>
           <div className={s.messages}>
               <Message message='Hi'/>
               <div className={s.message}>Hou are yuo?</div>
               <div className={s.message}>Im faind</div>

           </div>
       </div>
    )
}
export  default Dialogs
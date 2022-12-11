import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

type DialogsType = any
const Dialogs = (props: DialogsType) => {
    return (
       <div className={s.dialogs}>
           <div className={s.dialogsItem}>
              <div className={s.dialog}>
               <NavLink to="/dialogs/1"> Aleks</NavLink>
              </div>
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
               <div className={s.message}>Hi</div>
               <div className={s.message}>Hou are yuo?</div>
               <div className={s.message}>Im faind</div>

           </div>
       </div>
    )
}
export  default Dialogs
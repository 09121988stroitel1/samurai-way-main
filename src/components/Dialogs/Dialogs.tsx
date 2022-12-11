import React from "react";
import s from "./Dialogs.module.css"

type DialogsType = any
const Dialogs = (props: DialogsType) => {
    return (
       <div className={s.dialogs}>
           <div className={s.dialogsItem}>
              <div className={s.dialog}>
                  Aleks
              </div>
               <div className={s.dialog + ' ' + s.active}>
                  Andrey
              </div>
               <div className={s.dialog}>
                  Vasia
              </div>
               <div className={s.dialog}>
                  Lili
              </div>
                <div className={s.dialog}>
                  Sisi
              </div>

           </div>
           <div className={s.messages}>
               <div className={s.message}>Hi</div>
               <div className={s.message}>Hou are yuo?</div>
               <div className={s.message}>Im faindf</div>

           </div>
       </div>
    )
}
export  default Dialogs
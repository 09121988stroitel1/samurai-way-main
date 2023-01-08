import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Messages/Message';
import {
    addMessageActionCreator,
    messagesPageType, updateNewMessageBodyActionCreator,
} from '../../redux/state';

type DialogsMessagesPropsType = {
    dialogsMessages: messagesPageType
    dispatch: (action: any) => void
}

const Dialogs = (props: DialogsMessagesPropsType) => {

    let dialogsElement = props.dialogsMessages.dialogs.map((i) => {
        return (
            <DialogItem name={i.name} id={i.id}/>
        )
    })

    let messagesElement = props.dialogsMessages.messages.map((i) => {

        return (
            <Message id={i.id} message={i.message}/>
        )
    })

    const addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }
    let onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text: string = e.currentTarget.value
        props.dispatch(updateNewMessageBodyActionCreator(text))
    }
    return (
        <div className={s.dialogs + ' ' + s.active}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
            <div>
                    <textarea
                        onChange={onMessageChange}
                        value={props.dialogsMessages.newMessageBody}
                        placeholder={'Enter your message'}
                    />
            </div>
            <div>
                <button onClick={addMessage}>Add post</button>
            </div>
        </div>
    )
}
export default Dialogs
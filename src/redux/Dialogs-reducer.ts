import {ActionType, messagesPageType} from './state';

const dialogReducer = (state: messagesPageType , action: ActionType) => {
    switch (action.type) {
        case 'SEND-MESSAGE':
            let newMessage = {
                id: 1,
                message: state.newMessageBody
            }
            state.messages.push(newMessage)
            state.newMessageBody = ''
            return state;
        case 'UPDATE-NEW-MESSAGE-BODY':
            state.newMessageBody = (action.newMessage)
            return state;
        default:  return state;
    }
}

export let addMessageActionCreator = () => ({type: 'SEND-MESSAGE'} as const)
export let updateNewMessageBodyActionCreator = (text: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        newMessage: text
    } as const
}

export default dialogReducer
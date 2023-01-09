import profileReducer, {addPostActionCreator} from './Profile-reducer';
import dialogReducer, {addMessageActionCreator} from './Dialogs-reducer';

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'


export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type DialogItemPropsType = {
    id: number
    name: string
}
export type MessagePropsType = {
    id: number
    message: string
}
export type profilePageType = {
    posts: PostsType[]
    newPostText: string

}
export type messagesPageType = {
    dialogs: DialogItemPropsType[]
    messages: MessagePropsType[]
    newMessageBody: string
}
export type StateType = {
    profilePage: profilePageType
    messagesPage: messagesPageType


}
export type StoreType = {
    state: StateType
    rerenderEntireThree: () => void
    subscribe: (observer: () => void) => void
    getState: () => void
    dispatch: (action: ActionType) => void
}

// export type AddPostActionType = {
//     type: 'ADD-POST'
//     // newPostText: string
// }
export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
// export type SendMessage = {
//     type: 'SEND-MESSAGE'
//     newMessageBody: string
// }
export type SendMessage = ReturnType<typeof addMessageActionCreator>
export type UpdateNewMessageActionType = {
    type: 'UPDATE-NEW-MESSAGE-BODY'
    newMessage: string
}

export type ActionType = AddPostActionType | UpdateNewPostTextActionType | SendMessage | UpdateNewMessageActionType

let store: StoreType = {
    state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi', likesCount: 12},
                {id: 2, message: 'Hou are yuo?', likesCount: 7},
                {id: 3, message: 'Im faind', likesCount: 5},
            ],
            newPostText: ''
        },
        messagesPage: {
            dialogs: [
                {id: 1, name: 'Aleks'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Vasia'},
                {id: 4, name: 'Lili'},
                {id: 5, name: 'Sisi'},
                {id: 6, name: 'Рик'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hou are yuo?'},
                {id: 3, message: 'Im faind'},
            ],
            newMessageBody: ''
        }
    },

    subscribe(observer) {
        this.rerenderEntireThree = observer
    },
    getState() {
        return this.state
    },
    rerenderEntireThree() {
        console.log('state changed')
    },
    dispatch(action) {

        this.state.profilePage =  profileReducer(this.state.profilePage, action)
        this.state.messagesPage = dialogReducer(this.state.messagesPage, action)
        this.rerenderEntireThree()
     },
}



export default store

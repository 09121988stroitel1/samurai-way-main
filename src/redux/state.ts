const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SEND_MESSAGE = 'ADD-MESSAGE'
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
    dispatch: (action: any) => void
}

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
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this.state.profilePage.newPostText,
                likesCount: 12
            }
            this.state.profilePage.posts.push(newPost)
            this.state.profilePage.newPostText = ''
            this.rerenderEntireThree()
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this.state.profilePage.newPostText = (action.newText)
            this.rerenderEntireThree()
        } else if (action.type === SEND_MESSAGE) {
            let newMessage = {
                id: 1,
                message: this.state.messagesPage.newMessageBody
            }
            this.state.messagesPage.messages.push(newMessage)
            this.state.messagesPage.newMessageBody = ''
            this.rerenderEntireThree()
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this.state.messagesPage.newMessageBody = (action.newMessage)
            this.rerenderEntireThree()
        }
    },

}

export let addPostActionCreator = () => ({type: ADD_POST})
export let updateNewPostTextActionCreator = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}
export let addMessageActionCreator = () => ({type: SEND_MESSAGE})
export let updateNewMessageBodyActionCreator = (text: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        newMessage: text
    }
}

export default store

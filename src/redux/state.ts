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
}
export type StateType = {
    profilePage: profilePageType
    messagesPage: messagesPageType


}
export type StoreType = {
    state: StateType
    // updateNewPostText: (newText: string) => void
    // addPost: () => void
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
            ]
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

    // updateNewPostText(newText: string) {
    //     this.state.profilePage.newPostText = (newText)
    //     this.rerenderEntireThree()
    // },
    // addPost() {
    //     let newPost = {
    //         id: 5,
    //         message: this.state.profilePage.newPostText,
    //         likesCount: 12
    //     }
    //     this.state.profilePage.posts.push(newPost)
    //     this.state.profilePage.newPostText = ''
    //     this.rerenderEntireThree()
    // },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this.state.profilePage.newPostText,
                likesCount: 12
            }
            this.state.profilePage.posts.push(newPost)
            this.state.profilePage.newPostText = ''
            this.rerenderEntireThree()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this.state.profilePage.newPostText = (action.newText)
            this.rerenderEntireThree()
        }
    }
    }

    export default store

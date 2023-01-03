
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
    dialogs:  DialogItemPropsType[]
    messages:  MessagePropsType[]
}


export type StateType = {
    profilePage: profilePageType
    messagesPage: messagesPageType

}


let  rerenderEntireThree = () => {
    console.log('state changed')
}

let state: StateType= {
    profilePage: {
        posts:   [
            {id: 1, message: 'Hi', likesCount: 12},
            {id: 2, message: 'Hou are yuo?',  likesCount: 7},
            {id: 3, message: 'Im faind',  likesCount: 5},
        ],
        newPostText: ''
    },
    messagesPage: {
        dialogs:   [
            {id: 1, name: 'Aleks'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Vasia'},
            {id: 4, name: 'Lili'},
            {id: 5, name: 'Sisi' },
            {id: 6, name: 'Рик'},
        ],
        messages:  [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hou are yuo?'},
            {id: 3, message: 'Im faind'},
        ]
    }
}


export const addPost = ()=> {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 12
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
     rerenderEntireThree()

}
export const updateNewPostText = (newText: string)=> {
    state.profilePage.newPostText = (newText)
     rerenderEntireThree()

}

export const subscribe =(observer: ()=> void) => {
    rerenderEntireThree= observer
}

export default state

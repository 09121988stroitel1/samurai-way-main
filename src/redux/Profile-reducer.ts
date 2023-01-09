import {
    ActionType,
    profilePageType, UpdateNewPostTextActionType,
} from './state';



 const profileReducer = (state: profilePageType, action: ActionType)  => {
            switch (action.type) {
                case 'ADD-POST':
                    let newPost = {
                        id: 5,
                        message: state.newPostText,
                        likesCount: 12
                    }
                    state.posts.push(newPost)
                    state.newPostText = ''
                   return state;
                case 'UPDATE-NEW-POST-TEXT':
                    state.newPostText = (action.newText)
                    return state;
                default:  return state;
            }
    }

export let addPostActionCreator = ()=> ({type: 'ADD-POST'} as const)
export let updateNewPostTextActionCreator = (text: string): UpdateNewPostTextActionType => ({
    type: 'UPDATE-NEW-POST-TEXT',
    newText: text
}as const)

export default profileReducer


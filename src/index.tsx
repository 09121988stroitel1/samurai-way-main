import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type PostsType = {
    id: number
    message: string
    likesCount: number
}
let posts:  PostsType[] = [
    {id: 1, message: 'Hi', likesCount: 12},
    {id: 2, message: 'Hou are yuo?',  likesCount: 7},
    {id: 3, message: 'Im faind',  likesCount: 5},
]



ReactDOM.render(
    <App posts={posts}/>,
  document.getElementById('root')
);
// let renderEntireTree = () => {
//     console.log('state changed')
// }

// let state = {
//     dialogsPage: {
//         messagesData: [
//             { id: 1, message: 'text1' },
//             { id: 2, message: 'text2' },
//             { id: 3, message: 'text3' },
//             { id: 4, message: 'text4' }
//         ],
//         dialogsData: [
//             { id: 1, name: 'person1' },
//             { id: 2, name: 'person2' },
//             { id: 3, name: 'person3' },
//             { id: 4, name: 'person4' }
//         ]
//     },
//     postsPage: {
//         postsData: [
//             { id: 1, title: 'Компонент', text: 'Функция возвращающая разметку JSX с параметрами props', likesCount: 12 },
//             { id: 2, title: 'title2', text: 'text2', likesCount: 7 },
//             { id: 3, title: 'title3', text: 'text3', likesCount: 5 }
//         ],
//         newPostText: 'default text'
//     },
//     sideBar: {
//         mainMenu: [
//             { id: 1, name: 'Profile', link: 'profile' },
//             { id: 2, name: 'Messages', link: 'dialogs' },
//             { id: 3, name: 'Posts', link: 'posts' },
//             { id: 4, name: 'News', link: 'news' },
//         ],
//         friendList: [
//             { id: 1, name: 'John' },
//             { id: 2, name: 'Pete' },
//             { id: 3, name: 'Jason' },
//             { id: 4, name: 'Mark' },
//         ]
//     }
// }

let store = {
    _state: {
        dialogsPage: {
            messagesData: [
                { id: 1, message: 'text1' },
                { id: 2, message: 'text2' },
                { id: 3, message: 'text3' },
                { id: 4, message: 'text4' }
            ],
            dialogsData: [
                { id: 1, name: 'person1' },
                { id: 2, name: 'person2' },
                { id: 3, name: 'person3' },
                { id: 4, name: 'person4' }
            ]
        },
        postsPage: {
            postsData: [
                { id: 1, title: 'Компонент', text: 'Функция возвращающая разметку JSX с параметрами props', likesCount: 12 },
                { id: 2, title: 'Инкапсуляция', text: 'Невозможность прямого доступа к данным, скрытие каких либо реализаций. Скрытие в плане возможности использования каких-либо действий, не заморачиваясь над тем, как они реализованы', likesCount: 7 },
                { id: 3, title: 'Наследование', text: 'Сущность может наследовать данные и функциональность некоторого существующего типа, способствуя повторному использованию компонентов', likesCount: 5 },
                { id: 3, title: 'Полиморфизм', text: 'Возможность менять методы, свойства, соблюдая при этом интерфейс взаимодействия так, что эти св-ва и методы могут содержать разные данные и действия', likesCount: 5 }
            ],
            newPostText: 'default text'
        },
        sideBar: {
            mainMenu: [
                { id: 1, name: 'Profile', link: 'profile' },
                { id: 2, name: 'Messages', link: 'dialogs' },
                { id: 3, name: 'Posts', link: 'posts' },
                { id: 4, name: 'News', link: 'news' },
            ],
            friendList: [
                { id: 1, name: 'John' },
                { id: 2, name: 'Pete' },
                { id: 3, name: 'Jason' },
                { id: 4, name: 'Mark' },
            ]
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('No subscribers')
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                title: 'New title',
                text: this._state.postsPage.newPostText,
                likesCount: 5
            }
            this._state.postsPage.postsData.push(newPost)
            this._state.postsPage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.postsPage.newPostText = action.newText
            this._callSubscriber(this._state)
        }
    }
}


// export let addPost = () => {
//     let newPost = {
//         id: 5,
//         title: 'New title',
//         text: state.postsPage.newPostText,
//         likesCount: 5
//     }
//     state.postsPage.postsData.push(newPost)
//     state.postsPage.newPostText = ''
//     renderEntireTree(state)
// }

// export let updateNewPostText = (newText) => {
//     state.postsPage.newPostText = newText
//     renderEntireTree(state)
// }

// export const subscribe = (observer) => {
//     renderEntireTree = observer
// }

export default store;
window.store = store
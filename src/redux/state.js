import dialogsReducer from "./dialogs-reducer"
import postsReducer from "./posts-reducer"
import sidebarReducer from "./sidebar-reducer"

let store = {
    _state: {
        dialogsPage: {
            messagesData: [
                { id: 1, message: 'text1' },
                { id: 2, message: 'text2' },
                { id: 3, message: 'text3' },
                { id: 4, message: 'text4' }
            ],
            newMessageText: 'default text',
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
                { id: 4, title: 'Полиморфизм', text: 'Возможность менять методы, свойства, соблюдая при этом интерфейс взаимодействия так, что эти св-ва и методы могут содержать разные данные и действия', likesCount: 5 },
                { id: 5, title: 'Action', text: 'Объект со свойством type', likesCount: 5 },
                { id: 5, title: 'Reducer', text: 'Чистая функция, которая принимает state и action, применяет action к state (если нужно) и возвращает state', likesCount: 5 }
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
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.postsPage = postsReducer(this._state.postsPage, action)
        this._state.sideBar = sidebarReducer(this._state.sideBar, action)
        this._callSubscriber(this._state)

        // if (action.type === ADD_POST) {
        //     let newPost = {
        //         id: 5,
        //         title: 'New title',
        //         text: this._state.postsPage.newPostText,
        //         likesCount: 5
        //     }
        //     this._state.postsPage.postsData.push(newPost)
        //     this._state.postsPage.newPostText = ''
        //     this._callSubscriber(this._state)
        // } else if (action.type === UPDATE_POST) {
        //     this._state.postsPage.newPostText = action.newText
        //     this._callSubscriber(this._state)
        // } else if (action.type === SEND_MSG) {
        //     let newMsg = {
        //         id: 5,
        //         message: this._state.dialogsPage.newMessageText
        //     }
        //     this._state.dialogsPage.messagesData.push(newMsg)
        //     this._state.dialogsPage.newMessageText=''
        //     this._callSubscriber(this._state)
        // } else if (action.type === UPDATE_MSG) {
        //     this._state.dialogsPage.newMessageText = action.text
        //     this._callSubscriber(this._state)
        // }
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
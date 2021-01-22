import Posts from "../components/Posts/Posts";

let state = {
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
            { id: 2, title: 'title2', text: 'text2', likesCount: 7 },
            { id: 3, title: 'title3', text: 'text3', likesCount: 5 }
        ]
    },
    sideBar: {
        mainMenu: [
            {id: 1, name: 'Profile', link: 'profile'},
            {id: 2, name: 'Messages', link: 'dialogs'},
            {id: 3, name: 'Posts', link: 'posts'},
            {id: 4, name: 'News', link: 'news'},
        ],
        friendList: [
            {id: 1, name: 'John'},
            {id: 2, name: 'Pete'},
            {id: 3, name: 'Jason'},
            {id: 4, name: 'Mark'},
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        title: 'New title',
        text: postMessage,
        likesCount: 5
    }
    state.postsPage.postsData.push(newPost)
}

export default state;
let initialState = {
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

const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer
const ADD_POST = 'ADD-POST'
const UPDATE_POST = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    postsData: [
        { id: 1, title: 'Компонент', text: 'Функция возвращающая разметку JSX с параметрами props', likesCount: 12 },
        { id: 2, title: 'Инкапсуляция', text: 'Невозможность прямого доступа к данным, скрытие каких либо реализаций. Скрытие в плане возможности использования каких-либо действий, не заморачиваясь над тем, как они реализованы', likesCount: 7 },
        { id: 3, title: 'Наследование', text: 'Сущность может наследовать данные и функциональность некоторого существующего типа, способствуя повторному использованию компонентов', likesCount: 5 },
        { id: 4, title: 'Полиморфизм', text: 'Возможность менять методы, свойства, соблюдая при этом интерфейс взаимодействия так, что эти св-ва и методы могут содержать разные данные и действия', likesCount: 5 },
        { id: 5, title: 'Action', text: 'Объект со свойством type', likesCount: 5 },
        { id: 5, title: 'Reducer', text: 'Чистая функция, которая принимает state и action, применяет action к state (если нужно) и возвращает state', likesCount: 5 }
    ],
    newPostText: 'default text'
}
const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                title: 'New title',
                text: state.newPostText,
                likesCount: 5
            }            
            return {...state,
                postsData: [...state.postsData, newPost],
                newPostText: '',
            }
        case UPDATE_POST:{
            return {...state,
                newPostText: action.newText
            }
        }
        default:
            return state
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostActionCreator = (text) => {
    return {
        type: UPDATE_POST,
        newText: text
    }
}

export default postsReducer
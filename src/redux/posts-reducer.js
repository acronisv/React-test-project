const ADD_POST = 'ADD-POST'

let initialState = {
    postsData: [
        { id: 1, title: 'Компонент', text: 'Функция возвращающая разметку JSX с параметрами props', likesCount: 12 },
        { id: 2, title: 'Инкапсуляция', text: 'Невозможность прямого доступа к данным, скрытие каких либо реализаций. Скрытие в плане возможности использования каких-либо действий, не заморачиваясь над тем, как они реализованы', likesCount: 7 },
        { id: 3, title: 'Наследование', text: 'Сущность может наследовать данные и функциональность некоторого существующего типа, способствуя повторному использованию компонентов', likesCount: 5 },
        { id: 4, title: 'Полиморфизм', text: 'Возможность менять методы, свойства, соблюдая при этом интерфейс взаимодействия так, что эти св-ва и методы могут содержать разные данные и действия', likesCount: 5 },
        { id: 5, title: 'Action', text: 'Объект со свойством type', likesCount: 5 },
        { id: 6, title: 'Reducer', text: 'Чистая функция, которая принимает state и action, если нужно модифицирует state по правилам иммутабельности (работая с копией) и возвращает копию, либо нетронутый state, если его не надо было изменять', likesCount: 5 }
    ],
}
const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                title: 'New title',
                text: action.postText,
                likesCount: 5
            }            
            return {...state,
                postsData: [...state.postsData, newPost],
            }
        default:
            return state
    }
}

export const addPostActionCreator = (postText) => {
    return {
        type: ADD_POST,
        postText
    }
}

export default postsReducer
import postsReducer, { deletePost } from './posts-reducer';
import { addPostActionCreator } from "./posts-reducer";

let state = {
    postsData: [
        { id: 1, title: 'Компонент', text: 'Функция возвращающая разметку JSX с параметрами props', likesCount: 12 },
        { id: 2, title: 'Инкапсуляция', text: 'Невозможность прямого доступа к данным, скрытие каких либо реализаций. Скрытие в плане возможности использования каких-либо действий, не заморачиваясь над тем, как они реализованы', likesCount: 7 },
        { id: 3, title: 'Наследование', text: 'Сущность может наследовать данные и функциональность некоторого существующего типа, способствуя повторному использованию компонентов', likesCount: 5 },
        { id: 4, title: 'Полиморфизм', text: 'Возможность менять методы, свойства, соблюдая при этом интерфейс взаимодействия так, что эти св-ва и методы могут содержать разные данные и действия', likesCount: 5 },
        { id: 5, title: 'Action', text: 'Объект со свойством type', likesCount: 5 },
        { id: 6, title: 'Reducer', text: 'Чистая функция, которая принимает state и action, если нужно модифицирует state по правилам иммутабельности (работая с копией) и возвращает копию, либо нетронутый state, если его не надо было изменять', likesCount: 5 }
    ],
}

test('Add new post test', () => {
    // 1. Initial data
    let action = addPostActionCreator('New post text')

    // 2. Action
    let newState = postsReducer(state, action)

    //3. Expectation
    expect(newState.postsData.length).toBe(7)
});

test('New post text should be "New post text"', () => {
    // 1. Initial data
    let action = addPostActionCreator('New post text')
    
    // 2. Action
    let newState = postsReducer(state, action)

    //3. Expectation
    expect(newState.postsData[6].text).toBe('New post text')
});

test('The length of array should decrease after deleting', () => {
    // 1. Initial data
    let action = deletePost(2)
    
    // 2. Action
    let newState = postsReducer(state, action)

    //3. Expectation
    expect(newState.postsData.length).toBe(5)
});

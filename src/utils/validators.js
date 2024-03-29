export const requiredField = value => {
    if (value) return undefined
    return 'Field is required'
}

export const maxLengthCreator = (maxLength) => (value) =>{
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`
    return undefined
}

// export const maxLength30 = value => {
//     if (value.length > 0) return 'Max length 30 symbols'
//     return 'Field is reqired'
// }
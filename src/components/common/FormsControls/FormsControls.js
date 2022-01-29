import styles from './FormsControls.module.css'

export const FormControl = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    const Tag = props.fieldType
    console.log(props)
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            {Tag ? <Tag {...input} {...props} /> 
                 : <input {...input} {...props} />}
            <div>
            {hasError && <span>{meta.error}</span>}
            </div>
            
        </div>
    )
}

// export const Textarea = ({input, meta, ...props}) => {
//     console.log(props.childs)
//     const hasError = meta.touched && meta.error
//     return (
//         <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
//             <textarea {...input} {...props} />
//             <div>
//             {hasError && <span>{meta.error}</span>}
//             </div>
            
//         </div>
//     )
// }

// export const Input = ({input, meta, ...props}) => {
//     const hasError = meta.touched && meta.error
//     return (
//         <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
//             <input {...input} {...props} />
//             <div>
//             {hasError && <span>{meta.error}</span>}
//             </div>
            
//         </div>
//     )
// }
import styles from './FormsControls.module.css'

const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <textarea {...input} {...props} />
            <div>
            {hasError && <span>{meta.error}</span>}
            </div>
            
        </div>
    )
}

export default Textarea 
const Post = (props) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            <div>{props.likes}</div>
        </div>
    )
}

export default Post
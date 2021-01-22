const Friends = (props) => {
    let friendList = props.state.friendList.map(friend => <div>{friend.name}</div>)
    console.log(friendList)
    return (
        <div>
            {friendList}
        </div>
    )
}

export default Friends;

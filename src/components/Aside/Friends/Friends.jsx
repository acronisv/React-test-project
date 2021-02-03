const Friends = (props) => {
    let friendList = props.friendList.map(friend => <div key={friend.id}>{friend.name}</div>)
    return (
        <div>
            {friendList}
        </div>
    )
}

export default Friends;

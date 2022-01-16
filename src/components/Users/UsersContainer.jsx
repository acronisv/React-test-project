import React from 'react'
import Users from './Users'
import { connect } from 'react-redux'
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress, getUsersThunkCreator} from '../../redux/users-reducer'
import Preloader from '../common/preloader/preloader'
import { UsersApi } from '../../api/api'

class UsersComponent extends React.Component {
    componentDidMount() {
        // this.props.toggleIsFetching(true)
        // getUsers(this.props.currentPage, this.props.pageSize).then(data=>{
        //     this.props.toggleIsFetching(false)
        //     this.props.setUsers(data.items)
        //     this.props.setTotalUsersCount(data.totalCount)
        // })
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (pageNumber) => {
        // this.props.setCurrentPage(pageNumber)
        // this.props.toggleIsFetching(true)
        // UsersApi.getUsers(pageNumber, this.props.pageSize).then(data=>{
        //     this.props.toggleIsFetching(false)
        //     this.props.setUsers(data.items)
        // })
        this.props.getUsers(pageNumber, this.props.pageSize)
    }
    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
                <Users totalUsersCount = {this.props.totalUsersCount}
                      pageSize = {this.props.pageSize}
                      currentPage = {this.props.currentPage}
                      users = {this.props.users}
                      follow = {this.props.follow}
                      unfollow = {this.props.unfollow}
                      onPageChanged={this.onPageChanged}
                      //toggleFollowingProgress={this.props.toggleFollowingProgress}
                      followingInProgress={this.props.followingInProgress}
                      />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.usersList,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userID) => {
//             dispatch(followActionCreator(userID))
//         },
//         unfollow: (userID) => {
//             dispatch(unfollowActionCreator(userID))
//         },
//         setUsers: (users) => {
//             dispatch(setUserActionCreator(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageActionCreator(pageNumber))
//         },
//         setTotalUsersCount: (totalUsersCount) => {
//             dispatch(setTotalUsersCountActionCreator(totalUsersCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingActionCreator(isFetching))
//         }
//     }
// }



const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleIsFetching,
    toggleFollowingProgress,
    getUsers: getUsersThunkCreator
})(UsersComponent)

export default UsersContainer
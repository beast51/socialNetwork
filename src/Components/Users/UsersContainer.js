import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow, getUsers, getUsersOnPageClick,
    setCurrentPage, setIsButtonDisabled,
    setIsFetching,
    setTotalUsersCount,
    setUsers,
    unfollow
} from "../../redux/users-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageClick = (currentPage) => {
        this.props.getUsersOnPageClick(currentPage, this.props.pageSize);
    };

    render() {
        return <Users pageSize={this.props.pageSize}
                      totalCount={this.props.totalCount}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      onPageClick={this.onPageClick}
                      isFetching={this.props.isFetching}
                      isButtonDisabled={this.props.isButtonDisabled}
                      setIsButtonDisabled={this.props.setIsButtonDisabled}
        />
    }
}

const mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isButtonDisabled: state.usersPage.isButtonDisabled
    }
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         setIsFetching: (isFetching) => {
//             dispatch(setIsFetchingAC(isFetching))
//         }
//     }
// };

export default compose(
    connect(mapStateToProps, {
        setUsers, setCurrentPage,
        setTotalUsersCount, setIsFetching, setIsButtonDisabled,
        getUsers, getUsersOnPageClick, follow, unfollow
    }),
    withAuthRedirect
)(UsersContainer);
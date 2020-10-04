import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USER_COUNT';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_IS_BUTTON_DISABLED = 'IS_BUTTON_DISABLED';

const initialState = {
    users: [],
    pageSize: 18,
    totalCount: 162,
    currentPage: 1,
    isFetching: false,
    isButtonDisabled: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    } else return u;
                })
            };

        case SET_USERS:
            return {
                ...state, users: action.users
            };

        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            };

        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalCount: action.totalCount
            };

        case SET_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            };

        case SET_IS_BUTTON_DISABLED:
            return {
                ...state,
                isButtonDisabled: action.isFetching
                    ? [...state.isButtonDisabled, action.userId]
                    : state.isButtonDisabled.filter(id => id !== action.userId)
            };

        default:
            return state;
    }
};

export const followSucces = (userId) => ({type: FOLLOW, userId});
export const unfollowSucces = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount});
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});
export const setIsButtonDisabled = (isFetching, userId) => ({type: SET_IS_BUTTON_DISABLED, isFetching, userId});

export const getUsers = (currentPage, pageSize) => {
    return (
        (dispatch) => {
            usersAPI.getUsers(currentPage, pageSize).then(data => {
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
            });
        }
    )
} ;

export const getUsersOnPageClick = (currentPage, pageSize) => {
    return (
        (dispatch) => {
            dispatch(setIsFetching(true));
            dispatch(setCurrentPage(currentPage));
            usersAPI.getUsers(currentPage, pageSize).then(data => {
                dispatch(setUsers(data.items));
                dispatch(setIsFetching(false));
            });
        }
    )
};

export const follow = (userId) => {
  return (
      (dispatch) => {
          dispatch(setIsButtonDisabled(true, userId));
          usersAPI.followUser(userId)
              .then(data => {
                  if (data.resultCode === 0) {
                      dispatch(followSucces(userId));
                  }
                  dispatch(setIsButtonDisabled(false, userId));
              });
      }
  )
};

export const unfollow = (userId) => {
    return (
        (dispatch) => {
            dispatch(setIsButtonDisabled(true, userId));
            usersAPI.unfollowUser(userId)
                .then(data => {
                    if (data.resultCode === 0) {
                        dispatch(unfollowSucces(userId));
                    }
                    dispatch(setIsButtonDisabled(false, userId));
                });
        }
    )
};


export default usersReducer;
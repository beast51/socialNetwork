const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';


const initialState = {
    users: [
        // {id: 0, name: "Beast51", followed: true, status: "search a job", location: {city: "Odessa", country: "Ukraine"}},
        // {id: 1, name: "Андрей", followed: true, status: "search a job", location: {city: "Minsk", country: "Belarus"}},
        // {id: 2, name: "Дима", followed: false, status: "search a job", location: {city: "Moskow", country: "Russia"}},
        // {id: 3, name: "Валера", followed: false, status: "search a job", location: {city: "Kiev", country: "Ukraine"}},
        // {id: 4, name: "Джордж", followed: true, status: "search a job", location: {city: "Warsaw", country: "Poland"}},
    ]
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
                ...state, users: [...state.users, ...action.users]
            };
        default:
            return state;
    }
};

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});


export default usersReducer;
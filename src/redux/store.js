// import profileReducer from "./profile-reducer";
// import dialogsReducer from "./dialog-reducer";

const store = {
    _state: {
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Beast51"},
                {id: 2, name: "Андрей"},
                {id: 3, name: "Дима"},
                {id: 4, name: "Валера"},
                {id: 5, name: "Джордж"},
            ],
            messages: [
                {id: 0, message: "Hello, how are you?...", align: "text-right"},
                {id: 1, message: "Hi...", align: "text-left"},
                {id: 2, message: "Nice to meet you)", align: "text-left"},
            ],
            newMessageText: ''
        },

        profilePage: {
            posts: [
                {id: 0, message: "Hello, how are you?", likesCount: 15},
                {id: 1, message: "This is my first post.", likesCount: 25}
            ],
            newPostText: ''
        }
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
};

window.state = store._state;
export default store;
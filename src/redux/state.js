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

    // addPost() {
    //     let newPost = {
    //         id: this._state.profilePage.posts.length,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0
    //     };
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber(this._state);
    // },
    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },
    // addMessage() {
    //     let newMessage = {
    //         id: this._state.dialogsPage.messages.length,
    //         message: this._state.dialogsPage.newMessageText,
    //         align: "text-left"
    //     };
    //     this._state.dialogsPage.messages.push(newMessage);
    //     this._state.dialogsPage.newMessageText = '';
    //     this._callSubscriber(this._state);
    // },
    // updateNewMessageText(newMessageText) {
    //     this._state.dialogsPage.newMessageText = newMessageText;
    //     this._callSubscriber(this._state);
    // },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: this._state.profilePage.posts.length,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: this._state.dialogsPage.messages.length,
                message: this._state.dialogsPage.newMessageText,
                align: "text-left"
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newMessageText;
            this._callSubscriber(this._state);
        }
    }

};

window.state = store._state;
export default store;
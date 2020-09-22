let rerenderEntireTree = () => {
    console.log('state was changed')
};

const state = {
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
};

window.state = state;

export const addPost = () => {
    let newPost = {
        id: state.profilePage.posts.length,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export const addMessage = () => {
    let newMessage = {
        id: state.dialogsPage.messages.length ,
        message: state.dialogsPage.newMessageText,
        align: "text-left"
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
};

export const updateNewMessageText = (newMessageText) => {
    state.dialogsPage.newMessageText = newMessageText;
    rerenderEntireTree(state);
};

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
};


export default state;
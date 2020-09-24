const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialState = {
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
};

const dialogsReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: state.messages.length,
                message: state.newMessageText,
                align: "text-left"
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText;
            return state;
        default:
            return state;
    }
};

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

export const updateNewMessageTextActionCreator = (newMessageText) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessageText
});

export default dialogsReducer;
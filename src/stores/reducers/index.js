import theameReducer from "./theameMode";
import userReducer from "./userReducer";

const combineReducers = ({theamMode, userList}, action) => {
    console.log('action:', action)
    return {
        theamMode: theameReducer(theamMode, action),
        userList: userReducer(userList, action)
    }
}

export default combineReducers
import { UPDATE_USER_LIST } from '../../constants'
import { USER_TYPES } from '../../types'
import { userList } from '../../utils/initialState'

const userReducer = (state = userList, action: { types: string, payload: USER_TYPES[] }) => {
    switch (action.types) {
        case UPDATE_USER_LIST:
            return [ ...state, ...action.payload ]
        default:
            return state
    }
}

export default userReducer
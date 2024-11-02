import { CHANGE_THEAME_MODE } from '../../constants'
import { THEAM_TYPES } from '../../types'
import { theamMode } from '../../utils/initialState'

const theameReducer = (state = theamMode, action: { types: string, payload: THEAM_TYPES }) => {
    switch (action.types) {
        case CHANGE_THEAME_MODE:
            return { ...state, ...action.payload }
        default:
            return state
    }
}

export default theameReducer
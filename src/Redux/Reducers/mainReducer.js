import { GET_ALL_CHARACTERS } from '../Actions/types'

const INITIAL_STATE = {
    characters: {}
}

function MainReducer(state=INITIAL_STATE, action){
    switch(action.type){
        case GET_ALL_CHARACTERS:
            return { ...state, characters: action.payload }
        default:
            return state
    }
}

export default MainReducer
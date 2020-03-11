import { SET_ALERT, REMOVE_ALERT, REMOVER_ALERT } from '../types';

export default(state, action) => {
    switch(action.type) {
        case SET_ALERT:
            return action.payload;
        case REMOVER_ALERT:
            return null;
        default:
            return state;
    }
};
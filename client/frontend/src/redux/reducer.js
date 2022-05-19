import {
    CHANGE_SCORE,
} from "./actionsTypes.js";

const initialState = {
    score: 0,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SCORE:
            return {
              ...state,
              score: action.payload,
            };
          default:
            return state;
    }
}


export default reducer;
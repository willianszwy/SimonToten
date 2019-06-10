import { CLICK_UPDATE_PREFERENCIAL, CLICK_UPDATE_NORMAL } from '../actions/actionTypes';

const initialState = {
    totalPreferencial: 0,
    totalNormal: 0,
};

export const clickReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLICK_UPDATE_NORMAL:
            return {
                ...state,
                totalNormal: state.totalNormal + 1
            };
        case CLICK_UPDATE_PREFERENCIAL:
            return {
                ...state,
                totalPreferencial: state.totalPreferencial + 1
            }
        default:
            return state;
    }
};
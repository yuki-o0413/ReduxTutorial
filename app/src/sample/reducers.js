'use strict';

const initialState = {
    list: []
}
export function test(state = initialState, action) {
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case 'DID_MOUNT':
            newState.list = action.payload.test;
            break;
        default:
            return state;
    }
    return newState;
};


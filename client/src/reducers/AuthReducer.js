import {SIGN_IN, SIGN_OUT} from '../actions/types';


const INTITAL_STATE = { 
    isSignedIn: null,
    userId: null
};


export default (state = INTITAL_STATE, action) => {
    switch(action.type) {
        case SIGN_IN:
            return {...state, isSignedIn: true,userId: action.payload};
        case SIGN_OUT:
            return {...state, isSignedIn: false,userId: null};
        default:
            return state;
    }
};
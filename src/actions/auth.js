import {firebase, googleProvider} from '../firebase/firebase';

export const loginAction = ({uid}={}) => {
    return {
        type: 'LOGIN',
        payload: {
            uid
        }
    }
};

export const startLogin = () => {
    return (dispatch) => {
        return firebase.auth().signInWithPopup(googleProvider);
    }
};

export const logoutAction = () => {
    return {
        type: 'LOGOUT'
    }
};

export const startLogOut = () => {
    return (dispatch) => {
        return firebase.auth().signOut();
    };
};
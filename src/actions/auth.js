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
        return firebase.auth().signInWithPopup(googleProvider).then((result) => {
            console.log("result.credential.accessToken", result.credential.accessToken);
            console.log("result.user.displayName", result.user.displayName);
            console.log("result.user.email", result.user.email);
            console.log("result.user.phoneNumber", result.user.phoneNumber);
            console.log("result.user.photoURL", result.user.photoURL);
        }).catch((error) => {
            console.log(error);
        });
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
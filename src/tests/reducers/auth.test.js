import authReducer from '../../reducers/auth';

const initialState = {};

test('authReducer: Should set default state', () => {
    const defaultState = authReducer(undefined, {type: '@@INIT'});
    expect(defaultState).toEqual({});
});

test('Should set uid when the user is logged in', () => {
    const action = {
        type: 'LOGIN',
        payload: {uid: '1234'}
    };
    const newState = authReducer(initialState, action);
    expect(newState).toEqual({
        uid: '1234'
    });
});

test('Should empty the state when logged out', () => {
    const action = {
        type: 'LOGOUT',
    };
    const newState = authReducer({uid: '1234'}, action);
    expect(newState.payload).toBeUndefined();
});
import {loginAction, logoutAction} from '../../actions/auth';

test('Testing loginAction', () => {
    const action = loginAction({uid:'1234'});
    expect(action).toEqual({
        type: 'LOGIN',
        payload: {
            uid: '1234'
        }
    });
});

test('Testing logoutAction', () => {
    const action = logoutAction();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
})
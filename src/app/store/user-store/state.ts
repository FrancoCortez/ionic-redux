import {UserLogin} from '../../models/user-login.model';

export interface State {
    isLoading: boolean;
    isLoader: boolean;
    error?: any;
    userList?: UserLogin[];
    user?: UserLogin;
}

export const initialState: State = {
    isLoader: false,
    isLoading: false,
};

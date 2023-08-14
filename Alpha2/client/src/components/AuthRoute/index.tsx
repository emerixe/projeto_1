import React from 'react';
import { Redirect } from 'react-router-dom';
import firebase from "firebase/compat/app";
import logging from '../../config/logging';

export interface IAuthRouteProps { }

const AuthRoute: React.FunctionComponent<IAuthRouteProps> = props => {
    const { children } = props;
    const auth = firebase.auth();
    if (!auth.currentUser)
    {
        logging.warn('No user detected, redirecting');
        return <Redirect to="/login" />;
    }

    return (
        <div>{children}</div>
    );
}

export default AuthRoute;
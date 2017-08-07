import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from '../components/App';

export const AppRoutes = () => (
    <div>
        <Switch>
            <Route path='/' component={App} />
        </Switch>
    </div>
);

export default AppRoutes;
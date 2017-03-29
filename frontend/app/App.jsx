import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';
import {Provider} from 'react-redux';
import axios from 'axios';
import injectTapEventPlugin from 'react-tap-event-plugin';
import _ from 'lodash';
import './styles.scss';
import 'font-awesome/css/font-awesome.css';
import 'flexboxgrid/css/flexboxgrid.css';

import store, {history} from './utils/stores/RootStore.js';

import {AuthHelper} from './accounts/reducers/AccountReducer.js';

import {AccountActions} from './accounts/actions/AccountActions.js';

import {setupAuthHeader, requireAuth} from './accounts/utils/utils.js';

import Root from './Root.jsx';
import AccountRouting from './accounts/Routing.jsx';
import ListTasks from './tasks/components/ListTasks.jsx';
import NotFoundPage from './utils/components/NotFoundPage.jsx';

if (AuthHelper.isAuthenticated) {
    setupAuthHeader();

    store.dispatch(AccountActions.refreshToken());
}

injectTapEventPlugin();

ReactDOM.render((
    <Provider store={store}>
        <Router history={history}>
            {AccountRouting}
            <Route path="/" component={Root} onEnter={requireAuth}>
                <IndexRoute component={ListTasks} />
                <Route path="*" component={NotFoundPage} />
            </Route>
        </Router>
    </Provider>
), document.getElementById('app'));

import React from 'react'
import { Switch, Route } from 'react-router'

import MainPage from './Containers/Pages/MainPage/index'

const Routes = props => {
    return (<Switch>
        <Route exact path='/' component={MainPage} />
    </Switch>)
}

export default Routes
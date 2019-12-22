import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import MainPage from './Containers/Pages/MainPage/index'

const Routes = props => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={MainPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
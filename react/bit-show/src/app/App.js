import React, { Fragment } from 'react';
import {Switch, Route} from 'react-router-dom' 

import { HomePage } from './HomePage'
import { ShowDetails } from './DetailsPage'

export const App = () => {
    return (
      <Fragment>
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route path="/showdetails/:id" component={ShowDetails}></Route>
          </Switch>
      </Fragment>
    );
}


import React from 'react';
import { Switch, Route } from 'react-router-dom'; 

import { Footer } from './partials/footer'
import { UserPage } from './users/UserPage';
import { AboutPage } from './AboutPage/AboutPage';

export const App = () => {

  return (
    <div className="container">
		<Switch>
			<Route path="/" component={UserPage}></Route>
			<Route exect path="/about" component={AboutPage}></Route>    
		</Switch> 
			<Footer />
    </div>
  )
}

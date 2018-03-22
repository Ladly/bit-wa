import React from 'react';

import { Footer } from './partials/footer'

import { UserPage } from './users/UserPage';

export const App = () =>{

  return (
    <div className="container">       
      <UserPage />
      <Footer />
    </div>
  )
}

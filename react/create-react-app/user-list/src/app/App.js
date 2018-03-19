import React from 'react';

import { Header } from './partials/header'
import { Footer } from './partials/footer'
import { UserList } from './users/UserList';

const App = () => {
  return (
      <div>
            <Header />
            <UserList />
            <Footer />
      </div>
  )
}

export default App;

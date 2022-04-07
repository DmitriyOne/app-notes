import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import About from './About';
import Home from './Home';

import { AlertContextProvider, FirebaseContext, FirebaseContextProvider, SearchContextPropvider } from './context';

import { Footer, Header } from './components';
import { ROUTES } from './constants/index';

const App: React.FunctionComponent = () => {
  const { notes } = React.useContext(FirebaseContext)

  return (
    <SearchContextPropvider>
      <FirebaseContextProvider notes={notes}>
        <AlertContextProvider>
          <BrowserRouter>
            <Header />
            <main className='main'>
              <Routes>
                <Route path={ROUTES.HOME} element={<Home />} />
                <Route path={ROUTES.ABOUT_US} element={<About />} />
              </Routes>
            </main>
            <Footer />
          </BrowserRouter>
        </AlertContextProvider>
      </FirebaseContextProvider>
    </SearchContextPropvider>
  )
};

export default App;

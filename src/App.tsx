/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import About from './About';
import Home from './Home';

import { AlertContextProvider, FirebaseContext, FirebaseContextProvider, SearchContextProvider } from './context';

import { ROUTES } from './constants/index';
import { Footer, Header } from './components';
import { useTheme } from './hooks';
import Create from './Create';

const App: React.FunctionComponent = () => {
  const firebase = React.useContext(FirebaseContext)
  const { theme, setTheme } = useTheme()
  
  return (
    <SearchContextProvider>
      <FirebaseContextProvider notes={firebase.notes}>
        <AlertContextProvider>
          <BrowserRouter>
            <Header />
            <main className='main'>
              <Routes>
                <Route path={ROUTES.HOME} element={<Home />} />
                <Route path={ROUTES.ABOUT_US} element={<About />} />
                <Route path={ROUTES.CREATE_NODE} element={<Create />} />
              </Routes>
            </main>
            <Footer />
          </BrowserRouter>
        </AlertContextProvider>
      </FirebaseContextProvider>
    </SearchContextProvider>
  )
};

export default App;

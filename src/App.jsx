import React from 'react'
import { Header } from './components/Header.jsx';
import { Newslatter } from './components/Newslatter.jsx';
import Provider from './context/Provider.jsx';
import { AppRoutes } from './routes.js';

export function App() {
  return (
    <div id='main-content'>
      <Provider>
        <div id='content'>
          <Header/>
          <Newslatter/>
          <AppRoutes/>
        </div>
      </Provider>
    </div>
  )
}

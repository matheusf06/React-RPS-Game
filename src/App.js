import React from 'react';
import './style.css';

import Header from './containers/Header';
import DivButtons from './containers/DivButtons';
import DisplayResult from './containers/DisplayResult';
import Footer from './containers/Footer';

export default function App() {
  return (
    <div className="App">
      <div className="wrapperApp">
        <Header />
        <div className="content">
          <h2>Sua escolha</h2>
          <DivButtons />
          <DisplayResult />
        </div>
        <Footer />
      </div>
    </div>
  );
}

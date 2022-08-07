import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import './styles/app.scss'

function App() {
  return (
    <>
      <Topbar/>
      <div className="containerApp">
        <Sidebar/>
        <Home />
      </div>
    </>
  );
}

export default App;

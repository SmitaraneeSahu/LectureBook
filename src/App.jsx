import React from 'react';
import AllRoutes from './routes/AllRoutes';
import './App.css';
import Header from './components/Layouts/Header';
import Footer from './components/Layouts/Footer';



function App() {
  return (
    <div className='App bg-white dark:bg-gray-900' >
      <Header/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;

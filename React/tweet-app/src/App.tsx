import React from 'react';
import './App.css';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useSelector } from 'react-redux';
import { IRootState } from './Store';
import View from './Pages/View';
import Tweet from './Pages/Tweet';


function App() {

  const loggedIn = useSelector((state: IRootState)=> state.user.loggedIn);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        
        { loggedIn && <Sidebar /> }
        
        <div style={{
          left: (loggedIn ? 200 : 0),
        }} className='main-content'>
          <Routes>
            
            <Route path='' element={ loggedIn ? <Outlet /> : <Navigate to={'/login'} />} >
              <Route path='/home' element={ <Home /> }/>
              <Route path='/view' element={ <View/> }/>
              <Route path='/tweet' element={ <Tweet/> }/>
            </Route>

            <Route path='/login' element={ <Login /> }/>
            <Route path='/register' element={ <Register /> }/>
          </Routes>
        </div>

        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;

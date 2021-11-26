import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@material-ui/core';
import Header from './Components/Header/Header';
import Cart from './Components/Cart/Cart';
import Login from './Components/Signup/Login';
import Slide from './Components/Home/Slide';
import Search from '@material-ui/icons/Search';
import NavButtons from './Components/Header/NavButtons';
import Register from './Components/Signup/Register';
import Home from './Components/Home/Home';
import InfoDetail from './Components/ProductDetails.js/InfoDetail';
import ContextProvider from './context/ContextProvider';

function App() {
  return (
    <>
        <ContextProvider>
          <Header />
          <Box style={{marginTop: 54}}>
            <Routes>
              <Route exact={true} path= '/' element={<Home/>} />
              <Route exact={true} path='/login' element={<Login/>}/>
              <Route exact={true} path='/register' element={<Register/>}/>
              <Route exact={true} path= '/cart' element={<Cart/>} />
              <Route exact={true} path='/product/:id' element={<InfoDetail/>}/>
            </Routes>
          </Box>
        </ContextProvider>  
    </>
  )
};

export default App;

import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import {Provider} from 'react-redux';
import store from './store';
import Login from './components/Login';
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

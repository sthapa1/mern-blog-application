import React from 'react';
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import {Provider} from 'react-redux';
import store from './store';
import Login from './components/Login';
import Profile from './components/Profile';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
              <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  CIT Blog
              </Typography>
              <Link to='/login' >
                  <Button color="inherit">Login</Button>
              </Link>
              <Link to='/register' >
                  <Button color="inherit">Register</Button>
              </Link>
              <Link to='/profile' >
                  <Button color="inherit">Profile</Button>
              </Link>
              <Button color="inherit">Logout</Button>
              </Toolbar>
          </AppBar>
        </Box>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

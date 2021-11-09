import React, {useState} from 'react'
import {TextField, Button, Alert} from '@mui/material';
import {useDispatch} from 'react-redux'
import './style.css';
import { loginUserAction } from '../../store/slices/authSlice';
export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const dispatch = useDispatch();

    const reset = () => {
        setErrors([]);
        setEmail('');
        setPassword('');
    }

    const handleSubmit = () => {
        const error = []
        if(email === ''){
            error.push('Email is required.');
        }
        if(password === ''){
            error.push('Password cannot be empty.');
        }

        if(error.length > 0){
            setErrors(error);
            return;
        }else {
            const payload = {
                email,
                password
            };
            dispatch(loginUserAction(payload));
            reset();

        }
    }
    return (
        <div id="register">
            <div className='register-container'>
                {errors.length > 0 && errors.map(err=><Alert severity="error">{err}</Alert>)}
                <h3>Login</h3>
                <TextField type="email" className="form-input" label="Email" onChange={(e)=>setEmail(e.target.value)} fullWidth variant="outlined" />
                <TextField type="password" className="form-input" fullWidth label="Password" onChange={(e)=>setPassword(e.target.value)} variant="outlined" />
                <Button type="submit" onClick= {handleSubmit} variant="contained" color="primary">Login</Button>
            </div>
        </div>
    )
}

import React, {useState} from 'react'
import {TextField, Button, Alert} from '@mui/material';
import {useDispatch} from 'react-redux'
import './style.css';
import { registerUserAction } from '../../store/slices/authSlice';
import {useNavigate} from 'react-router-dom'
export default function Register() {
    let navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const dispatch = useDispatch();

    const reset = () => {
        setErrors([]);
        setLastName('');
        setFirstName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }

    const handleSubmit = () => {
        const error = []
        if(email === ''){
            error.push('Email is required');
        }
        if(password !== confirmPassword){
            error.push('Password didn\'t match');
        }

        if(error.length > 0){
            setErrors(error);
            return;
        }else {
            const payload = {
                firstname: firstName,
                lastname: lastName,
                email,
                password
            };
            dispatch(registerUserAction(payload));
            navigate('/login')
            reset();
        }
    }
    return (
        <div id="register">
            <div className='register-container'>
                {errors.length > 0 && errors.map(err=><Alert severity="error">{err}</Alert>)}
                <h3>Register</h3>
                <TextField className="form-input" label="First Name" onChange={(e)=>setFirstName(e.target.value)} fullWidth variant="outlined" />
                <TextField className="form-input" label="Last Name" onChange={(e)=>setLastName(e.target.value)} fullWidth variant="outlined" />
                <TextField type="email" className="form-input" label="Email" onChange={(e)=>setEmail(e.target.value)} fullWidth variant="outlined" />
                <TextField type="password" className="form-input" fullWidth label="Password" onChange={(e)=>setPassword(e.target.value)} variant="outlined" />
                <TextField type="password" className="form-input" fullWidth label="Confirm Password" onChange={(e)=>setConfirmPassword(e.target.value)} variant="outlined" />  
                <Button type="submit" onClick= {handleSubmit} variant="contained" color="primary">Register</Button>
            </div>
        </div>
    )
}

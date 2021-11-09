import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import API_URL from '../../constants/apiRoute';
const sliceName = 'auth'
const initialState = {
    loggedInUser: {},
    isLoggedIn: false,
    loading: false,
}

export const registerUserAction = createAsyncThunk(
    `${sliceName}/registerUserAction`,
    async (payload, thunkAPI) => {
        try {
            const response = await axios.post(`${API_URL.AUTH_BASE_URL}/register`, payload);
            console.log(response);
        } catch (error) {
            console.log(error)
        }
    } 
)
export const loginUserAction = createAsyncThunk(
    `${sliceName}/loginUserAction`,
    async (payload, thunkAPI) => {
        try {
            const response = await axios.post(`${API_URL.AUTH_BASE_URL}/login`, payload);
            localStorage.setItem('token', response.data.token);
        } catch (error) {
            console.log(error)
        }
    } 
)

const authSlice = createSlice({
    name: sliceName,
    initialState,
    reducers: {
        create: (action) => {

        }
    },
})

export default authSlice.reducer;
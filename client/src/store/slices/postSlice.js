import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import API_URL from '../../constants/apiRoute';
import Status from '../../constants/status';
import axiosInstance from '../../helpers/axiosInstance';

const sliceName = 'posts';

const initialState = {
    postsList: [],
    userPosts: [],
    loading: false,
    status: Status.IDLE,
    error: null
}

export const fetchPostsAction = createAsyncThunk(
    `${sliceName}/fetchPostsAction`,
    async(payload, thunkAPI) => {
        try {
            const response = await axios.get(`${API_URL.POST_BASE_URL}`);
            return response.data;
        } catch (error) {
            throw(error);
        }
    }
)

export const createPostsAction = createAsyncThunk(
    `${sliceName}/createPostsAction`,
    async(payload, thunkAPI) => {
        try {
            const response = await axiosInstance.post(`${API_URL.POST_BASE_URL}`, payload);
            return response.data;
        } catch (error) {
            if(!error.response){
                throw(error);
            }
            return thunkAPI.rejectWithValue(error.response.data.message);
        }
    }
)

export const fetchPostByUserAction = createAsyncThunk(
    `${sliceName}/fetchPostByUserAction`,
    async(payload, thunkAPI) => {
        try {
            const response = await axiosInstance.get(`${API_URL.USER_BASE_URL}/${payload}/posts`);
            return response.data;
        } catch (error) {
            if(!error.response){
                throw(error);
            }
            return thunkAPI.rejectWithValue(error.response.data.message);
        }
    }
)

const postSlice = createSlice({
    name: sliceName,
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPostByUserAction.pending, (state, action)=>{
                state.loading = true;
            })
            .addCase(fetchPostByUserAction.rejected, (state, action) => {
                state.loading = false;
                state.error = 'Failed to load data.';
            })
            .addCase(fetchPostByUserAction.fulfilled, (state, action)=>{
                state.userPosts = action.payload;
                state.loading = false;
                state.error = null;
            })
        builder
            .addCase(fetchPostsAction.pending, (state, action)=>{
                state.loading = true;
            })
            .addCase(fetchPostsAction.rejected, (state, action) => {
                state.loading = false;
                state.error = 'Failed to load data.';
            })
            .addCase(fetchPostsAction.fulfilled, (state, action)=>{
                state.postsList = action.payload;
                state.loading = false;
                state.error = null;
            })
        builder
            .addCase(createPostsAction.pending, (state, action)=>{
                state.status = Status.PENDING;
            })
            .addCase(createPostsAction.rejected, (state, action) => {
                state.status = Status.ERROR;
                state.error = action.payload;
            })
            .addCase(createPostsAction.fulfilled, (state, action)=>{
                state.status = Status.SUCCESS;
                state.error = null;
                state.userPosts = [...state.userPosts, action.payload];
            })
    }
})

export default postSlice.reducer;
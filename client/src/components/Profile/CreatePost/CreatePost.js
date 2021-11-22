import React, {useState, useEffect} from 'react';
import { Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import Status from '../../../constants/status';
import { createPostsAction } from '../../../store/slices/postSlice';
import {toast} from 'react-hot-toast';

const CreatePost = ({close}) => {
    const initialState= {
        title: '',
        content: '',
        postImage: '',
        category: ''
    }
    const [postDetail, setPostDetail] = useState(initialState);

    const {categoriesList} = useSelector(state=>state.categories);
    const {status} = useSelector(state=>state.posts);

    const dispatch = useDispatch();

    const handleFormChange = (e) => {
        if(e.target.type === 'file'){
            setPostDetail({...postDetail, [e.target.name]: e.target.files[0]});
            return
        }
        setPostDetail({...postDetail, [e.target.name]: e.target.value});
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const payload = new FormData();
        payload.append('title', postDetail.title);
        payload.append('content', postDetail.content);
        payload.append('postImage', postDetail.postImage);
        payload.append('category', postDetail.category);
            
        dispatch(createPostsAction(payload));
    }

    useEffect(()=>{
        if(status === Status.ERROR){
            toast.error('Something went wrong.');
        } else if(status===Status.SUCCESS){
            toast.success('Post created successfully.');
            setPostDetail(initialState);
            close();
        }
    }, [status])

    return <div className="container card p-2">
        <div className="card-header">
            Create Post
        </div>
        <div className="card-body">
            <form onSubmit={handleFormSubmit} encType='multipart/form-data'>
                <input required type='text' placeholder='Title' value={postDetail.title} onChange={handleFormChange} name='title' className="form-control mb-2" />
                <textarea required value={postDetail.content} onChange={handleFormChange} rows="6"  placeholder='Post Content' name='content' className="form-control mb-2" />
                <Form.Select required className='mb-2' name='category' value={postDetail.category} onChange={handleFormChange}>
                    <option>--Select Category--</option>
                    {categoriesList.map(category=>{
                       return <option key={category._id} value={category._id}>{category.title}</option>
                    })}
                </Form.Select>
                <Form.Group required controlId="postImage" className="mb-4">
                    <Form.Label>Upload Post Image</Form.Label>
                    <Form.Control onChange={handleFormChange} type="file" name='postImage'/>
                </Form.Group>
                <button type="button" onClick={close} className="btn btn-danger">Cancel</button>&nbsp;
                <button type='submit' className="btn btn-info">{ status===Status.PENDING ? 'Creating..' : 'Create'}</button>
            </form>
        </div>
    </div>
}

export default CreatePost;
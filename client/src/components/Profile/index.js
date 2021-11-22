import React, { useEffect } from 'react'
import CreatePost from './CreatePost/CreatePost'
import ProfileHeader from './ProfileHeader'
import {Button, Card, Container, Modal} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import { fetchAllCategoriesAction } from '../../store/slices/categorySlice';
import { fetchPostByUserAction } from '../../store/slices/postSlice';
import getImage from '../../helpers/getImage';

export default function Profile() {

    const { user } = useSelector(state=>state.auth);
    const { userPosts } = useSelector(state=>state.posts);
    const dispatch = useDispatch();
    const [openModal, setOpenModal] = React.useState(false);

    const handleCreatePostClick = () => {
        setOpenModal(true)
        dispatch(fetchAllCategoriesAction());
    };

    const handleClose = () => {
        setOpenModal(false)
    }

    useEffect(()=>{
        dispatch(fetchPostByUserAction(user._id));
    }, [])

    return (
        <Container>
            <Card className='p-4 w-100 d-flex justify-content-center'>
                <ProfileHeader user={user || {}} />
                <div className='d-flex justify-content-between align-items-center mb-3'>
                    <h4 className='pt-4 text-muted'>My Posts</h4>
                    <Button onClick={handleCreatePostClick}>Create Post</Button>
                </div>
                {
                    userPosts.map(post=>{
                        return <div className='card p-3 mb-2'>
                            <img src={getImage(post.postImage)} />
                            <h4>{post.title}</h4>
                            <p className='mb-2'>{post.content}</p>
                            <p className='text-muted'>{post.createdBy && post.createdBy.firstname} {post.createdBy && post.createdBy.lastname} | {post.createdAt}</p>
                        </div>
                    })
                }
            
            </Card>
            <Modal show={openModal} onHide={handleClose}>
                <CreatePost close={handleClose} />
            </Modal>
        </Container>
    )
}

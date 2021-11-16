import React from 'react'
import CreatePost from './CreatePost/CreatePost'
import ProfileHeader from './ProfileHeader'
import {Button, Card, Container, Modal} from 'react-bootstrap';
import {useSelector} from 'react-redux';

export default function Profile() {

    const { user } = useSelector(state=>state.auth);

    const [openModal, setOpenModal] = React.useState(false);

    const handleCreatePostClick = () => setOpenModal(true);

    const handleClose = () => {
        setOpenModal(false)
    }

    return (
        // <div className='container'>
        //     <div className='d-flex justify-content-end mb-2 mt-2'>
        //         <button onClick={handleCreatePostClick} className="btn btn-primary">Create post</button>
        //     </div>
        //     <UserCard />
        //     <Modal show={openModal} onHide={handleClose}>
        //         <CreatePost close={handleClose} />
        //     </Modal>
        // </div>
        <Container>
            <Card className='p-4 w-100 d-flex justify-content-center'>
                <ProfileHeader user={user || {}} />
                <div className='d-flex justify-content-between align-items-center'>
                    <h4 className='pt-4 text-muted'>My Posts</h4>
                    <Button>Create Post</Button>
                </div>
            </Card>
        </Container>
    )
}

import React from 'react'
import CreatePost from './CreatePost/CreatePost'
import UserCard from './UserCard'
import {Modal} from 'react-bootstrap';
export default function Profile() {

    const [openModal, setOpenModal] = React.useState(false);

    const handleCreatePostClick = () => setOpenModal(true);

    const handleClose = () => {
        setOpenModal(false)
    }

    return (
        <div className='container'>
            <div className='d-flex justify-content-end mb-2 mt-2'>
                <button onClick={handleCreatePostClick} className="btn btn-primary">Create post</button>
            </div>
            <UserCard />
            <Modal show={openModal} onHide={handleClose}>
                <CreatePost close={handleClose} />
            </Modal>
        </div>
    )
}

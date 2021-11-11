import React from 'react';

const CreatePost = ({close}) => {

    return <div className="container card p-2">
        <div className="card-header">
            Create Post
        </div>
        <div className="card-body">
            <form>
                <input type='text' placeholder='Title' name='title' className="form-control mb-2" />
                <textarea rows="6"  placeholder='Post Content' name='content' className="form-control mb-2" />

                <button type="button" onClick={close} className="btn btn-danger">Cancel</button>&nbsp;
                <button type='submit' className="btn btn-info">Create</button>
            </form>
        </div>
    </div>
}

export default CreatePost;
import React, { useState } from 'react';

const CommentForm = () => {
    const [comment, setComment] = useState('');

    const handleChange = (event) => {
        setComment(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(comment);
        setComment('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="comment">
                    Comment: 
                    <textarea value={comment} onChange={handleChange} id="comment" />
                </label>
                <button type="submit">Post Comment</button>
            </form>
            <div>
                <h2>Your Comment:</h2>
                <p>{comment}</p>
            </div>
        </div>
    )
}

export default CommentForm;

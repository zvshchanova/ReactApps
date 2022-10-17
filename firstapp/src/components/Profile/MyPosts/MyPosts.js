import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts =() =>{
    return(
            <div>
                My Posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>                    
                    <button>Remove post</button>
                </div>
                <Post message='First post'/>
                <Post message='Second post'/>

            </div>

    )
}
export default MyPosts;


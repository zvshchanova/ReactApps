import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts =(props) =>{
    let postsItems = props.posts.map( el => <Post id={el.id} message={el.message} likescount={el.likescount} key={el.id}/>);

    return(
            <div className={style.postBlock}>
                <h2>My Posts</h2>
                <div>
                    <div>
                    <textarea></textarea>
                    </div>
                    <div>
                    <button>Add post</button>                    
                    <button>Remove post</button>
                    </div>
                </div>
                <div className={style.posts}>
                    { postsItems }
                </div>

            </div>

    )
}
export default MyPosts;


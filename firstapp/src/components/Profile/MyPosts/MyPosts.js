import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';


let postsData = [
    {id: "1", message: "First post", likescount: "0"},
    {id: "2", message: "Second pos", likescount: "15"},
];
 let postsItems = postsData.map( el => <Post id={el.id} message={el.message} likescount={el.likescount} key={el.id}/>);

const MyPosts =() =>{
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


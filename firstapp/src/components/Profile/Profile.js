import style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
const Profile =() =>{
    return(
        <main className={style.content}>
        <img className={style.img} src="https://images.pexels.com/photos/635279/pexels-photo-635279.jpeg" 
        alt="image"></img>
        <MyPosts />
        </main>

    )
}
export default Profile;


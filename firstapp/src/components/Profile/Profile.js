import style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

// let postsData = [
//     {id: "1", message: "First post", likescount: "0"},
//     {id: "2", message: "Second pos", likescount: "15"},
// ];

const Profile =(props) =>{
    return(
        <main className={style.content}>
        <ProfileInfo />
        <MyPosts posts={props.postsData} />
        </main>

    )
}
export default Profile;


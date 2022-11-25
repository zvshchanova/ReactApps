import style from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile =() =>{
    return(
        <main className={style.content}>
        <ProfileInfo />
        <MyPosts />
        </main>

    )
}
export default Profile;


import React from 'react';
import style from './Nav.module.css'
const Navbar =() =>{
    return(
        <nav className={style.nav}>
        <div className={`${style.item} ${style.active}`}>
        {/* <div className={style.active}> */}
         Profile
        </div>
        <div className={style.item}>
         Messages
        </div>
        <div className={style.item}>
         News
        </div>
        <div className={style.item}>
         Musik
        </div>
      </nav>
    )
}
export default Navbar;

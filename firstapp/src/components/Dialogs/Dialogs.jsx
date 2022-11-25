import React from "react"
import { NavLink } from "react-router-dom";
import style from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';


let dialogsData = [
    {id: 1, name: 'Roman'},
    {id: 2, name: 'Sophia'},
    {id: 3, name: 'Alex'}
];

let dialogsItems = dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>);

let messagesData = [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'Hello!'},
    {id: 3, message: 'Yo!'},
];

let messageItems = messagesData.map( el => <Message message={el.message} id={el.id} key= {el.id}/>)
const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                { dialogsItems }
            </div>
             <div className={style.messages}>
             { messageItems }
             </div> 
        </div>
    )
}

export default Dialogs;
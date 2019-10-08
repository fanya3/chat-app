import React from 'react';
import './Contact.css';


const Contact = (props) => {
    return (
    <div className="Contact">
        <img className="avatar" src={props.avatar} alt={props.name}/>
        <div class= "name">
            <h4>{props.name}</h4>
            <div class="status">
                <div class={props.online? 'status-online':'status-offline'}></div>
                <p class="status-text">{props.online? 'Online':'Offline'}</p>
            </div>
        </div>
    </div>
    );
}



export default Contact;

// const Contact = (props) => {
//     return (
//     <div className="Contact">
//         <img className="avatar" src={props.avatar} alt={props.name}/>
//         <div class= "name">
//             <h4>{props.name}</h4>
//             <div class="status">
//                 <div class={`status-${props.online?  'online':'offline'}`}></div>
//                 <p class="status-text">{props.online?  'Online':'Offline'}</p>
//             </div>
//         </div>
//     </div>
//     );
// }
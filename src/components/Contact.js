import React from 'react';
import './Contact.css';


class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          online : false,
        };
      } 


    render () {
        return (
        <div className="Contact"
        onClick={event => {
            this.setState({ online : !this.state.online });
          }}>
            <img className="avatar" src={this.props.avatar} alt={this.props.name}/>
            <div className= "name">
                <h4>{this.props.name}</h4>
                <div className="status">
                    <div className={this.state.online? 'status-online':'status-offline'}></div>
                    <p className="status-text">{this.state.online? 'Online':'Offline'}</p>
                </div>
            </div>
        </div>
        );
    }
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
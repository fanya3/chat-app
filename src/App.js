import React from 'react';
import './App.css';
import Contact from './components/Contact.js';

const App = () => {
  return (
    <div className="App">
    <Contact avatar = {"https://randomuser.me/api/portraits/med/men/75.jpg"} name="Michael Adams" online={true}/>
    <Contact avatar = {"https://randomuser.me/api/portraits/women/69.jpg"} name="Felecia Schmidt" online = {false} />
    <Contact avatar = {"https://randomuser.me/api/portraits/men/58.jpg"} name="Joshua Powell" online = {true} />
    </div>
  );
}

export default App;

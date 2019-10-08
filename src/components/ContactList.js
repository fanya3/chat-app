import React from "react";
import Contact from "./Contact";

const list = [
    {
        avatar: "https://randomuser.me/api/portraits/med/men/75.jpg",
        name: "Michael Adams",
        online: true
    },

    {
        avatar: "https://randomuser.me/api/portraits/women/69.jpg",
        name: "Felecia Schmidt",
        online: false
    },

    {
        avatar: "https://randomuser.me/api/portraits/men/58.jpg",
        name: "Joshua Powell",
        online: true
    },

    {
        avatar: "https://randomuser.me/api/portraits/women/59.jpg",
        name: "Sheila Elliott",
        online: false
    },

    {
        avatar: "https://randomuser.me/api/portraits/men/44.jpg",
        name: "Scott Howard",
        online: false
    }
];

const ContactList = () => (
    <div>
      {list.map(item => (
    <Contact avatar={item.avatar} name={item.name} online={item.online} />
      )
      )}
    </div>
  );


export default ContactList;
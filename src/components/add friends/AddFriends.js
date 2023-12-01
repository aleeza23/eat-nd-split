import React, { useState } from "react";
import { Button } from "react-bootstrap";

const AddFriends = ({onAddFriends}) => {
    const [name, setname] = useState('');
    const [img, setimg] = useState('https://i.pravatar.cc/48');
    const id =  crypto.randomUUID();

    const handleAddFriends = () => {
   
        if (!name ) return;
        const newFriends = { name , img : `${img}?u=${id}` , balance : 10 , id}
        // console.log(newFriends);
        onAddFriends(newFriends)
        setname('')

    }
  return <>
    <div className="add-friends__container p-4 mt-3 rounded mx-0 mx-lg-5">
   
        <label>👩🏼‍🤝‍👩🏻Friend Name</label>
        <input type="text" value={name} onChange={(e) => setname(e.target.value)}/>

        <label className="mt-2">🌄Img URL</label>
        <input type="text" value={img} disabled onChange={(e) => setimg(e.target.value)} />

        <Button className="mt-3 text-dark fw-bold" onClick={handleAddFriends}>Add</Button>
       
    </div>
  </>;
};

export default AddFriends;

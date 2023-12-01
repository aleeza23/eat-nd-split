import React from "react";
import Button from "../constant/Button";

const FriendsList = ({friendsData,onCurrentFriend,currentFriend}) => {
//match id of current friend with friends in a list
const isActive = friendsData.name === currentFriend?.name
  return (
    <>
      <div className={`friends-list ${isActive ? 'active' : '' }  rounded mb-2 p-2 `}>
        <div className='friends-testimonial'>
          <img className="rounded-pill" src={friendsData.img} alt={friendsData.name} />
          <div className="ms-3">
            <strong>{friendsData.name}</strong>
            <p>{`Your balance is ${friendsData.balance}`}</p>
          </div>
        </div>

        <Button onClick={() => onCurrentFriend(friendsData)}>Select</Button>
      </div>
    </>
  );
};

export default FriendsList;

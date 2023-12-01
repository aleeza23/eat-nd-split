import React from "react";
import Button from "../constant/Button";

const FriendsList = ({friendsData}) => {
  return (
    <>
      <div className='friends-list rounded p-3 '>
        <div className='friends-testimonial'>
          <img src={friendsData.img} alt={friendsData.name} />
          <div className="ms-3">
            <strong>{friendsData.name}</strong>
            <p>{`Your balance is ${friendsData.balance}`}</p>
          </div>
        </div>

        <Button>Select</Button>
      </div>
    </>
  );
};

export default FriendsList;

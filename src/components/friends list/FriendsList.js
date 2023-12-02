import React from "react";
import Button from "../constant/Button";

const FriendsList = ({friendsData, onCurrentFriend, currentFriend}) => {
  //match id of current friend with friends in a list
  const isActive = friendsData.name === currentFriend?.name;
  return (
    <>
      <div
        className={`friends-list ${
          isActive ? "active" : ""
        }  rounded mb-2 p-2 `}
      >
        <div className='friends-testimonial'>
          <img
            className='rounded-pill'
            src={friendsData.img}
            alt={friendsData.name}
          />
          <div className='ms-3'>
            <strong>{friendsData.name}</strong>
            <br />
            <i
              className={
                friendsData.balance < 0
                  ? "text-danger fw-bold"
                  : friendsData.balance > 0 && "text-success fw-bold"
              }
            >
              {friendsData.balance < 0
                ? `You owe ${friendsData.name} ${ Math.abs(friendsData.balance) } `
                : friendsData.balance > 0
                ? `${friendsData.name} owes you ${friendsData.balance} `
                : friendsData.balance === 0 &&
                  `You and ${friendsData.name} are even `}
            </i>
          </div>
        </div>
        <Button
          className='py-2 px-3'
          onClick={() => onCurrentFriend(friendsData)}
        >
          {isActive ? "Close" : "Select"}
        </Button>
      </div>
    </>
  );
};

export default FriendsList;

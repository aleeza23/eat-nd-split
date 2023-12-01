import React from "react";
import FriendsList from "./FriendsList";

const Friends = ({friends, onCurrentFriend, currentFriend}) => {
  return (
    <>
      <div className='friends-container  mx-0 mx-lg-5 '>
        {friends.map((currElm) => (
          <FriendsList
            currentFriend={currentFriend}
            onCurrentFriend={onCurrentFriend}
            key={currElm.id}
            friendsData={currElm}
          />
        ))}
      </div>
    </>
  );
};

export default Friends;

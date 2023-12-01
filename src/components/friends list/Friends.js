import React from "react";
import FriendsList from "./FriendsList";

const Friends = ({friends}) => {
  return <>
    <div className="friends-container ">
  {friends.map((currElm) => <FriendsList key={currElm.id} friendsData={currElm} />)}
    </div>
  </>;
};

export default Friends;

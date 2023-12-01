import React, {useState} from "react";
import Friends from "./friends list/Friends";
import Button from "./constant/Button";
import AddFriends from "./add friends/AddFriends";
import SplitBill from "./split bill/SplitBill";

const initialData = [
  {
    id: 12,
    name: "Clark",
    balance: 0,
    img: "https://i.pravatar.cc/48?u=118836",
  },
  {
    id: 13,
    name: "Sarah",
    balance: 0,
    img: "https://i.pravatar.cc/48?u=933372",
  },
  {
    id: 14,
    name: "Smith",
    balance: 0,
    img: "https://i.pravatar.cc/48?u=499476",
  },
];

const Main = () => {
  const [showAddFriends, setshowAddFriends] = useState(false);
  const [friends, setfriends] = useState(initialData);
  const [currentFriend, setcurrentFriend] = useState(null);

  //toggle add friends form
  const handleShowAddFriends = () => {
    setshowAddFriends((show) => !show);
  };

  //set friends array
  const handleAddFriends = (friends) => {
    setfriends((prev) => [...prev, friends]);
    setshowAddFriends(false);
  };

  //handle current friend  
  const handleCurrentFriend = (currentFriend) => {
    setcurrentFriend(currentFriend);
  };

  return (
    <>
      <div className='container '>
        <div className='row g-3  '>
          <div className='col-12 col-lg-6'>
            <Friends friends={friends} onCurrentFriend={handleCurrentFriend} currentFriend={currentFriend} />
            {showAddFriends && <AddFriends onAddFriends={handleAddFriends} />}
            <Button
              className='float-end mt-3 py-2 px-2 mx-0 mx-lg-5 fw-bold'
              onClick={handleShowAddFriends}
            >
              {showAddFriends ? "Close" : "Add Friends"}
            </Button>
          </div>

          <div className='col-12 col-lg-6'>
            <div className='row'>
              <div className='col-12'>
               {currentFriend && <SplitBill currentFriend={currentFriend} /> } 
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;

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
    balance: -7,
    img: "https://i.pravatar.cc/48?u=933372",
  },
  {
    id: 14,
    name: "Smith",
    balance: 20,
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
    setcurrentFriend((prev) =>
      prev?.id === currentFriend?.id ? null : currentFriend
    );
  };

  //get updated current friend
  const getUpdatedFriend = (value) => {
    setfriends((prev) =>
      prev.map((currElm) =>
        currElm.id === currentFriend.id
          ? {...currElm, balance: currElm.balance + value}
          : currElm
      )
    );
    setcurrentFriend(null)
    // console.log(value);
  };

  return (
    <>
      <div className='container '>
        <div className='row g-3  '>
          <div className='col-12 col-lg-6'>
            <Friends
              friends={friends}
              onCurrentFriend={handleCurrentFriend}
              currentFriend={currentFriend}
            />
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
                {currentFriend && (
                  <SplitBill
                    onUpdateFriend={getUpdatedFriend}
                    currentFriend={currentFriend}
                    key={currentFriend.id}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;

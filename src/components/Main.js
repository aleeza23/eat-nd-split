import React, {useState} from "react";
import Friends from "./friends list/Friends";
import Button from "./constant/Button";
import AddFriends from "./add friends/AddFriends";

const initialData = [
  {
    id: 12,
    name: "Clark",
    balance: 0,
    img: "https://i.pravatar.cc/48?u=118836",
  },
  {
    id: 13,
    name: "Clarkk",
    balance: 0,
    img: "https://i.pravatar.cc/48?u=118836",
  },
];
const Main = () => {
  const [showAddFriends, setshowAddFriends] = useState(false);
  const [friends, setfriends] = useState(initialData);

  //toggle add friends form
  const handleShowAddFriends = () => {
    setshowAddFriends((show) => !show);
  };

  //set friends array
  const handleAddFriends = (friends) => {
    setfriends((prev) => [...prev, friends]);
    setshowAddFriends(false);
  };

  return (
    <>
      <div className='container '>
        <div className='row g-3 '>
          <div className='col-12 col-lg-6'>
            <Friends friends={friends} />
            {showAddFriends && <AddFriends onAddFriends={handleAddFriends} />}
            <Button
              className='float-end mt-3 py-2 px-2 fw-bold'
              onClick={handleShowAddFriends}
            >
              {showAddFriends ? "Close" : "Add Friends"}
            </Button>
          </div>

          <div className='col-12 col-lg-6 '></div>
        </div>
      </div>
    </>
  );
};

export default Main;

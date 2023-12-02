import React, {useState} from "react";
import Button from "../constant/Button";

const SplitBill = ({currentFriend, onUpdateFriend}) => {
  const [totalBill, settotalBill] = useState("");
  const [yourExpense, setyourExpense] = useState("");
  const friendExpense = totalBill ? totalBill - yourExpense : "";
  const [whoIsPaying, setwhoIsPaying] = useState("you");

  // console.log(whoIsPaying);
  // console.log(friendExpense);

  const handleSplitBill = () => {
    //check who is paying bill
    const checkingUser = whoIsPaying === "you" ? friendExpense : -friendExpense;
    //  console.log(checkingUser);
    onUpdateFriend(checkingUser);
  };

  return (
    <>
      <div className='split-bill__container p-3 rounded'>
        <strong className='fs-3'>
          SPLIT A BILL WITH {currentFriend?.name}
        </strong>
        <div className='group-inputs mt-3'>
          <label className=' fw-bold fs-5'>💰 Bill value</label>
          <input
            type='text'
            className='px-1 py-2'
            value={totalBill}
            onChange={(e) => settotalBill(Number(e.target.value))}
          />
        </div>
        <div className='group-inputs mt-3'>
          <label className=' fw-bold fs-5'>🧍‍♀️ Your expense</label>
          <input
            type='text'
            className='px-1 py-2'
            value={yourExpense}
            onChange={(e) =>
              setyourExpense(
                +e.target.value > totalBill ? yourExpense : +e.target.value
              )
            }
          />
        </div>
        <div className='group-inputs mt-3'>
          <label className=' fw-bold fs-5'>
            👫 {currentFriend?.name}'s expense
          </label>
          <input
            type='text'
            className='px-1 py-2'
            value={friendExpense}
            disabled
          />
        </div>
        <div className='group-inputs mt-3'>
          <label className=' fw-bold fs-5'>🤑 Who is paying the bill</label>

          <select
            className='px-5 py-2 fw-bold'
            value={whoIsPaying}
            onChange={(e) => setwhoIsPaying(e.target.value)}
          >
            <option value='you'>You</option>
            <option value='friend'>{currentFriend?.name}</option>
          </select>
        </div>

        <Button onClick={handleSplitBill} className='me-auto my-3 py-2 px-3'>
          Split Bill
        </Button>
      </div>
    </>
  );
};

export default SplitBill;

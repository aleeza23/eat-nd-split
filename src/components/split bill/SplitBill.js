import React from "react";
import Button from "../constant/Button";

const SplitBill = ({currentFriend}) => {



  return (
    <>
      <div className='split-bill__container p-3 rounded'>
        <strong className='fs-3'>SPLIT A BILL WITH {currentFriend?.name}</strong>
        <div className='group-inputs mt-3'>
          <label className=" fw-bold fs-5">💰 Bill value</label>
          <input type='text' className="px-1 py-2"/>
        </div>
        <div className='group-inputs mt-3'>
          <label className=" fw-bold fs-5">🧍‍♀️ Your expense</label>
          <input type='text'  className="px-1 py-2"/>
        </div>
        <div className='group-inputs mt-3'>
          <label className=" fw-bold fs-5">👫 {currentFriend?.name}'s expense</label>
          <input type='text' className="px-1 py-2" disabled />
        </div>
        <div className='group-inputs mt-3'>
          <label className=" fw-bold fs-5">🤑 Who is paying the bill</label>

          <select className='px-5 py-2 fw-bold'>
            <option value='you'>You</option>
            <option value='friend'>{currentFriend?.name}</option>
          </select>
        </div>

        <Button className='me-auto my-3 py-2 px-3'>Split Bill</Button>
      </div>
    </>
  );
};

export default SplitBill;

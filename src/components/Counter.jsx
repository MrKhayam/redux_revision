import React, { useState } from 'react'
import { BtnSimple } from "react-buttons-library";
import { useDispatch, useSelector } from 'react-redux';
import { add, sub } from '../features/counter/countSlice';


const Counter = () => {
    const value = useSelector(state => state.count)
    const dispatch = useDispatch();
    const handleIncrease = () => {
        dispatch(add())
    }
    const handleDecrease = () => {
        dispatch(sub())
    }
  return (
    <>
      <div className="w-[500px] h-[700px] bg-white rounded-xl flex flex-col gap-8 items-center justify-center">
        <h1 className="text-8xl font-bold">{value}</h1>
        <div className="flex gap-3 items-center">
          <BtnSimple
            label="Increase"
            btnClass="info"
            onClick={handleIncrease}
          />
          <BtnSimple
            label="Decrease"
            btnClass="danger"
            onClick={handleDecrease}
          />
        </div>
      </div>
    </>
  );
}

export default Counter

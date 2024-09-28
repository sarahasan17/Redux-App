import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../state";
import { bindActionCreators } from "redux";

function Shop() {
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const balance = useSelector((state) => state.amount); // Assuming 'amount' is the key for your balance

  return (
    <div className="container">
      <h2>Your Transaction Details</h2>
      <div>
        {/* Withdraw button */}
        <button
          className="btn btn-primary mx-2"
          onClick={() => withdrawMoney(1)} // Withdraw 1 unit
        >
          -
        </button>

        {/* Display balance */}
        <span>{balance}</span>

        {/* Deposit button */}
        <button
          className="btn btn-primary mx-2"
          onClick={() => depositMoney(1)} // Deposit 1 unit
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Shop;

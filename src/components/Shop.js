import React from 'react'

function Shop() {
  return (
    <div className='container'>
      <h2>Your Transaction details</h2>
      <form>
        <button className="btn btn-primary mx-2">-</button>
        <a>Update transaction</a>
        <button className="btn btn-primary mx-2">+</button>
      </form>
    </div>
  );
}

export default Shop

import React from "react";

function Quantity(props) {
  const handleIncrementQuantity = () =>
    props.onIncrementQuantity(props.item.id);

  const handleDecrementQuantity = () =>
    props.onDecrementQuantity(props.item.id);
  console.log({ props });
  return (
    <span>
      <button onClick={handleDecrementQuantity}>-</button>
      {props.item.quantity}
      <button onClick={handleIncrementQuantity}>+</button>
    </span>
  );
}

export default Quantity;

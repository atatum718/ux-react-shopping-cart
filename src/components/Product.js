import React from "react";
import Quantity from "./Quantity";

function Product(props) {
  return (
    <span>
      {props.item.name} -${props.item.price} -
      <Quantity
        item={props.item}
        onIncrementQuantity={props.onIncrementQuantity}
        onDecrementQuantity={props.onDecrementQuantity}
      />
    </span>
  );
}

export default Product;

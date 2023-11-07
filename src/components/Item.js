import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setCart] = useState(true)

  function handleClick() {
    setCart((inCart)=>!inCart)
  }

  const cartClass = inCart ? "" : "in-cart"

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">{inCart ? "Add To Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;

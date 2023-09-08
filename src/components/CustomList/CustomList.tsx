import React from "react";

const CustomList = ({ items }) => {
  return (
    <ul>
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  );
}

export default CustomList;
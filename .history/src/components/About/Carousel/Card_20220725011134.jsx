import React, { useState }  from "react";

function Card({ prop }) {
  const [editable, setEditable] = useState(false);
  const handleClick = () => {
    setEditable(!editable);
  };
  return (
    <div
      className="
      
    >
      
    </div>
  );
}

export default Card;
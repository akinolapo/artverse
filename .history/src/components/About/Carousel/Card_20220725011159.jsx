import React, { useState }  from "react";

function Card({ prop }) {
  const [editable, setEditable] = useState(false);
  const handleClick = () => {
    setEditable(!editable);
  };
  return (
    <div
      className="
        flex
        justify-center
        text-3xl 
        items-center
        drop-shadow-md	
        rounded-md"
    >
      
    </div>
  );
}

export default Card;
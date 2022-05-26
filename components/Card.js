import React from "react";

const Card = ({ title, text, image, line }) => {
  return (
    <div className="bg-white w-full">
      <div className={`h-1 ${line}`} />
      <div className="p-8">
        <h1 className="text-xl font-semibold text-very-dark-blue">{title}</h1>
        <p className="mt-2 text-grayish-blue text-sm ">{text}</p>
        <div>
          <img src={image} alt={title} className="ml-auto mt-8" />
        </div>
      </div>
    </div>
  );
};

export default Card;

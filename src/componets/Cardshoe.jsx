import React from "react";

const Cardshoe = ({ imageURL, changeBigShoeImage, bigShoeImg }) => {
  const handleclick = () => {
    if (bigShoeImg !== imageURL.bigShoe) {
      changeBigShoeImage(imageURL.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imageURL.bigShoe
          ? "border-orange-600"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleclick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imageURL.thumbnail}
          alt="shoe collection"
          width={127}
          height={103.34}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Cardshoe;

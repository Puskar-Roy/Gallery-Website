import React from "react";
import { ThreeDots } from "react-loader-spinner";

const Loder = () => {
  return (
    <div className="flex justify-center items-center h-[20vh]">
      <ThreeDots
        visible={true}
        height="100"
        width="100"
        color="#EB5286"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loder;

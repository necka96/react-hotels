import React from "react";

const Preloader = ({ loading, children }) => {
  if (loading) {
    return (
      <div className='flex w-full justify-center items-center h-screen'>
        <div className='overflow-hidden  w-full'>
          <div className='relative h-[2px] w-[90%] mx-auto max-w-[500px] bg-white mt-[150px]'>
            <div className='absolute -top-[30px] h-[60px] w-[60px] left-0 md:ml-[-35px] ml-[-100px] bg-white rounded-[30%] move'></div>
            <p className='absolute -top-[25px] md:-right-[85px] right-0 text-[#222831] font-bold uppercase'>
              Loading
            </p>
          </div>
        </div>
      </div>
    );
  }
  return children;
};

export default Preloader;

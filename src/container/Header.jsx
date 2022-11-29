import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { client, urlFor } from "../client";
const Header = () => {
  const [header, setHeader] = useState([]);
  useEffect(() => {
    const query = '*[_type == "header"]';
    client.fetch(query).then((data) => {
      setHeader(data);
    });
  }, []);

  return (
    <header id='home' className='w-full min-h-screen '>
      <div className='container mx-auto p-8 flex h-full justify-center items-center'>
        {header.map((item) => (
          <div
            key={Math.random()}
            className='grid grid-cols-12  w-full h-full my-32 relative'
          >
            <motion.div
              whileInView={{ x: [-300, 0], opacity: [0, 1] }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
              className='lg:col-span-7 md:col-span-6 col-span-12  lg:col-start-2  '
            >
              <div className='w-[90%] max-w-[500px] mx-auto'>
                <h1 className='text-7xl text-white  font-bold '>
                  Discover Deals <br />
                  <span className='text-[#ffd369] '>{item.heding}</span>
                </h1>
                {/*<p className='text-lg text-[#eee] my-6'>{item.text}</p>**/}
                <a
                  href='#home'
                  className='text-[#222831] inline-flex mt-10 hover:bg-[#ffd369] py-2 px-4 rounded-sm bg-[#eee] transition-all duration-150'
                >
                  Exploer Rooms
                </a>
              </div>
            </motion.div>
            <div className=' -z-10 absolute left-[35%] top-[35%]  '>
              <motion.img
                whileInView={{ scale: [0, 1], opacity: [0, 1] }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                src={urlFor(item.image)}
                alt='header img'
                className='object-cover rounded-md shadow-md lg:h-[25rem] h-[20rem]'
              />
            </div>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;

import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
const Nav = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='w-full grid grid-cols-12 items-center app__nav px-4 py-8'>
      <div className=' col-start-2 col-span-4 '>
        <a
          href='#home'
          className='capitalize text-xl text-white underline underline-offset-8'
        >
          <span className='text-[#ffd369] uppercase font-bold text-2xl'>
            Lus
          </span>
          trio
        </a>
      </div>
      <ul className='col-start-8 col-span-3 md:flex items-center justify-end hidden'>
        {["home", "about", "services", "contact"].map((item, index) => (
          <li className='mx-2 capitalize text-xl ' key={Math.random()}>
            <a
              className='hover:text-[#ffd369]   transition-colors text-white'
              href={`#${item}`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <div className='col-start-8 col-span-3 flex  items-center justify-end md:hidden'>
        <FaBars
          onClick={() => setToggle(true)}
          className='text-xl cursor-pointer  text-white  hover:text-[#ffd369]'
        />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeInOut" }}
            className='fixed top-0 bottom-0 right-0 z-20 p-4 w-[80%] h-screen flex justify-end items-end flex-col  bg-[#222831] shadow-sm'
          >
            <IoMdClose
              className='text-3xl text-white  hover:text-[#ffd369]  transition-colors cursor-pointer'
              onClick={() => setToggle(false)}
            />
            <ul className='h-full w-full flex justify-start items-start flex-col'>
              {["home", "about", "services", "contact"].map((item, index) => (
                <li key={Math.random()} className='my-2 capitalize text-2xl '>
                  <a
                    href={`#${item}`}
                    className='text-white  hover:text-[#ffd369] transition-colors'
                    onClick={() => setToggle(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Nav;

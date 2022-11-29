import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { client, urlFor } from "./../client";
const Categorys = () => {
  const [activFilter, setActivFilter] = useState("camping");
  const [animateCategorys, setAnimateCategorys] = useState({
    y: 0,
    opacity: 1,
  });
  const [categorys, setCategorys] = useState([]);
  const [filterCategorys, setFilterCategorys] = useState([]);
  useEffect(() => {
    const query = '*[_type == "categoris"]';
    client.fetch(query).then((data) => {
      setCategorys(data);
      setFilterCategorys(data);
    });
  }, []);

  const handleClick = (item) => {
    setActivFilter(item);
    setAnimateCategorys([{ y: 100, opacity: 0 }]);
    setTimeout(() => {
      setAnimateCategorys([{ y: 0, opacity: 1 }]);
      setFilterCategorys(
        categorys.filter((prevCategorys) => prevCategorys.tag.includes(item))
      );
    }, 1200);
  };
  return (
    <section
      className='p-8 md:p-32 min-h-screen overflow-x-hidden
    '
    >
      <motion.div
        className='text-center text-white overflow-x-hidden'
        whileInView={{ x: [-300, 0], opacity: [0, 1] }}
      >
        <small>Explore</small>
        <h2 className='  text-4xl text-[#ffd369] font-bold'>
          Popular Category
        </h2>
        <p>
          It had been a late night. To be more correct, it had been an early
          morning.{" "}
        </p>
      </motion.div>
      <motion.div
        className='max-w-5xl mx-auto flex gap-2 items-center justify-center flex-wrap mt-7 overflow-x-hidden'
        whileInView={{ x: [300, 0], opacity: [0, 1] }}
      >
        {["hotel", "motel", "apartment", "camping"].map((item) => (
          <div
            key={Math.random()}
            className={`${
              activFilter === item ? "bg-[#ffd369]" : "bg-[#eee]"
            } text-[#222831] py-2 px-4 rounded-sm transition-all duration-150 capitalize cursor-pointer hover:bg-[#ffd369]`}
            onClick={() => handleClick(item)}
          >
            {item}
          </div>
        ))}
        <div className='categorys flex flex-col  my-8'>
          {filterCategorys.map((item) => (
            <motion.div
              key={Math.random()}
              className='flex items-center justify-center gap-5 flex-wrap md:flex-nowrap '
              animate={animateCategorys}
              transition={{ duration: 1, ease: "backIn" }}
            >
              <div className='bg-white h-fit rounded-md '>
                <div className='rounded-t-md'>
                  <img
                    src={urlFor(item.imageUrl1)}
                    alt='hotel 2'
                    className='w-[400px] object-cover h-[400px] rounded-t-md'
                  />
                </div>
                <div className='flex justify-between items-center p-4'>
                  <div className='flex text-[#ffd369]'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p className=''>{item.riwiews} riwiews</p>
                  <p>${item.cost}/night</p>
                </div>
              </div>

              <div className='bg-white rounded-md  h-fit overflow-x-hidden'>
                <div className='rounded-t-md'>
                  <img
                    src={urlFor(item.imageUrl2)}
                    alt='hotel 2'
                    className='w-[400px] object-cover h-[400px] rounded-t-md'
                  />
                </div>
                <div className='flex justify-between items-center p-4'>
                  <div className='flex text-[#ffd369]'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p className=''>{item.riwiews} riwiews</p>
                  <p>${item.cost}/night</p>
                </div>
              </div>
              <div className='bg-white rounded-md h-fit overflow-x-hidden'>
                <div className='rounded-t-md'>
                  <img
                    src={urlFor(item.imageUrl3)}
                    alt='hotel 2'
                    className='w-[400px] object-cover h-[400px] rounded-t-md'
                  />
                </div>
                <div>
                  <div className='flex justify-between items-center p-4'>
                    <div className='flex text-[#ffd369]'>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <p className=''>{item.riwiews} riwiews</p>
                    <p>${item.cost}/night</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Categorys;

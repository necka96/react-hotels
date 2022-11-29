import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { CgGym } from "react-icons/cg";
import { FcWiFiLogo } from "react-icons/fc";
import { IoMdRestaurant } from "react-icons/io";
import { MdSecurity } from "react-icons/md";
import { TbSwimming } from "react-icons/tb";
import { client, urlFor } from "./../client";
const Services = () => {
  const [activeFilter, setActiveFilter] = useState("wi-fi");
  const [animate, setAnimate] = useState({ scale: 1, opacity: 1 });
  const [services, setServices] = useState([]);
  const [filterServices, setfilterServices] = useState([]);
  useEffect(() => {
    const query = '*[_type == "facilties"]';
    client.fetch(query).then((data) => {
      setServices(data);
      setfilterServices(data);
    });
  }, []);
  const handleClick = (item) => {
    setActiveFilter(item);
    setAnimate([{ scale: 0, opacity: 0 }]);
    setTimeout(() => {
      setAnimate([{ scale: 1, opacity: 1 }]);
      setfilterServices(
        services.filter((service) => service.heading.includes(item))
      );
    }, 1200);
  };
  const data = [
    {
      id: 1,
      name: "restaurant",
      icon: <IoMdRestaurant />,
    },
    {
      id: 2,
      name: "wi-fi",
      icon: <FcWiFiLogo />,
    },
    {
      id: 3,
      name: "gym",
      icon: <CgGym />,
    },
    {
      id: 4,
      name: "swimming pool",
      icon: <TbSwimming />,
    },
    {
      id: 5,
      name: "24 hour's security",
      icon: <MdSecurity />,
    },
  ];
  return (
    <section className='min-h-screen overflow-x-hidden' id='services'>
      <motion.div
        className='p-8 text-center text-white '
        whileInView={{ x: [-300, 0], opacity: [0, 1] }}
      >
        <h2 className='  text-4xl text-[#ffd369] font-bold'>Hotel Facitiels</h2>
        <p className='w-4/5 max-w-[700px] my-5 mx-auto'>
          The tree missed the days the kids used to come by and play. It still
          wore the tire swing the kids had put up in its branches years ago
          although both the tire and the rope had seen better days.
        </p>
      </motion.div>
      <motion.div
        className='relative'
        whileInView={{ x: [300, 0], opacity: [0, 1] }}
      >
        <div className='categorys '>
          {filterServices.map((item) => (
            <motion.div
              animate={animate}
              transition={{ duration: 1, ease: "backIn" }}
              key={Math.random()}
              className='absolute inset-0 w-full h-[30rem] -z-10'
            >
              <img
                src={urlFor(item.imageUrlBg)}
                alt=''
                className='w-full h-full object-cover'
              />
            </motion.div>
          ))}
        </div>
        <div className='p-8 flex flex-col justify-center items-center md:h-[90vh] overflow-x-hidden'>
          <div className=' flex w-full max-w-[1000px]  '>
            {data.map((item) => (
              <div
                key={item.id}
                className={`${
                  activeFilter === item.name
                    ? "bg-[#ffd369] border-none"
                    : "bg-[#eee] border-2"
                } text-[#222831] w-[80%]  h-[100px] flex flex-col justify-center items-center  py-2 px-4  transition-all duration-150 capitalize cursor-pointer hover:bg-[#ffd369] hover:border-none relative text-center `}
                onClick={() => handleClick(item.name)}
              >
                <div className='md:absolute md:-top-5 flex justify-center items-center text-xl md:shadow-md md:w-14 h-14 md:rounded-full md:bg-white'>
                  {item.icon}
                </div>
                <h3 className='md:block hidden'>{item.name}</h3>
              </div>
            ))}
          </div>
          <div className='categorys overflow-x-hidden'>
            {" "}
            {filterServices.map((item) => (
              <motion.div
                animate={animate}
                key={Math.random()}
                className='bg-[#eee] p-8 w-full  max-w-[1000px] gap-5 flex flex-col md:flex-row overflow-x-hidden '
                transition={{ duration: 1, ease: "backIn" }}
              >
                <div>
                  <img
                    src={urlFor(item.image)}
                    alt='servicesImg'
                    className='w-full h-full object-cover'
                  />
                </div>
                <div>
                  <h3 className='text-3xl font-bold capitalize'>
                    {item.heading}
                  </h3>
                  <p className='my-2'>{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Services;

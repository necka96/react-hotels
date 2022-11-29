import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { client, urlFor } from "./../client";

const About = () => {
  const [about, setAbout] = useState([]);
  useEffect(() => {
    const query = '*[_type == "about"]';
    client.fetch(query).then((data) => {
      setAbout(data);
    });
  }, []);

  return (
    <section
      id='about'
      className='min-h-screen  md:p-32 grid md:grid-cols-8 overflow-x-hidden  grid-cols-1 grid-flow-dense gap-5 p-4'
    >
      <motion.div
        className='md:col-span-3  md:row-span-3 md:mt-20  bg-[#eee] shadow-md'
        whileInView={{ x: [-300, 0], opacity: [0, 1] }}
      >
        {about.map((item) => (
          <div key={Math.random()}>
            <div className='h-[20rem]'>
              <img
                src={urlFor(item.imageOne)}
                alt='imageOne'
                className='h-full w-full object-cover'
              />
            </div>
            <div className='p-5'>
              <h2 className=' text-4xl font-bold'>{item.title}</h2>
              <p className=' my-2'>{item.textOne}</p>
              <a
                className='text-[#222831] bg-[#ffd369] py-2 mt-2 inline-block px-4 rounded-sm hover:bg-[#222831] hover:text-white transition-all duration-150'
                href='#home'
              >
                Lean More
              </a>
            </div>
          </div>
        ))}
      </motion.div>
      <motion.div
        className='md:col-span-5 md:row-span-2 shadow-md'
        whileInView={{ y: [-300, 0], opacity: [0, 1] }}
      >
        {about.map((item) => (
          <div key={Math.random()} className='h-full'>
            <img
              src={urlFor(item.imageTwo)}
              alt='imageTwo'
              className='w-full h-full object-cover'
            />
          </div>
        ))}
      </motion.div>
      <motion.div
        className='md:col-span-3 md:row-span-3 bg-[#eee] shadow-md'
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
      >
        {about.map((item) => (
          <div key={Math.random() + item}>
            <div>
              <img
                src={urlFor(item.imageThree)}
                alt='imageThree'
                className='w-full object-cover'
              />
            </div>
            <div className='p-5 '>
              <h3 className='text-3xl font-bold'>{item.heading}</h3>
              <p className=' my-2'>{item.textTwo}</p>
            </div>
          </div>
        ))}
      </motion.div>
      <motion.div
        className='md:col-span-2 md:mt-10  '
        whileInView={{ x: [300, 0], opacity: [0, 1] }}
      >
        {about.map((item) => (
          <div key={Math.random() + item}>
            <img
              src={urlFor(item.imageFour)}
              alt='imageFour'
              className='w-full object-cover shadow-md '
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default About;

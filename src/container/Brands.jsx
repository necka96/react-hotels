import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { client, urlFor } from "./../client";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    const query = '*[_type == "brands"]';
    client.fetch(query).then((data) => {
      setBrands(data);
    });
  }, []);

  return (
    <section className='p-8 '>
      <h2 className='text-center mt-8  text-4xl text-[#ffd369] font-bold'>
        Our Trasted Partners
      </h2>
      <div className='max-w-3xl mx-auto grid lg:grid-cols-5  md:grid-cols-3 grid-cols-1 gap-5 my-8'>
        {brands.map((item) => (
          <motion.div
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{
              duration: 0.6,
              staggerChildren: 0.5,
              delayChildren: 0.5,
              staggerDirection: -1,
              ease: "linear",
            }}
            key={Math.random()}
            className='w-full  bg-[#eee] shadow-md rounded-md'
          >
            <div className='flex p-4 gap-2 items-center justify-center flex-row-reverse '>
              <img
                src={urlFor(item.imgURL)}
                alt='brands logo'
                className='h-[5rem] '
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Brands;

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { client } from "./../client";

const Footer = () => {
  const [isFormSubmitt, setIsFormSubmitt] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formData;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };
    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitt(true);
      setTimeout(() => {
        setIsFormSubmitt(false);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }, 2200);
    });
  };
  const [date, setDate] = useState("");
  useEffect(() => {
    setDate(new Date().getFullYear());
  }, []);

  return (
    <div className='p-8 max-w-5xl mx-auto ' id='contact'>
      <motion.h2
        className='  text-4xl text-[#ffd369] font-bold '
        whileInView={{ x: [-300, 0], opacity: [0, 1] }}
      >
        Love to hear from you <br />
        Get in touch 👋
      </motion.h2>
      {!isFormSubmitt ? (
        <motion.form
          whileInView={{ x: [300, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          onSubmit={handleSubmit}
          className='grid grid-cols-12 gap-5 my-5 '
        >
          <div className='flex flex-col col-span-12 md:col-span-6'>
            <label htmlFor='name' className='text-white text-xl font-bold mb-2'>
              Your Name
            </label>
            <input
              type='text'
              className='p-2 bg-transparent border-b-2 focus:outline-none text-white focus:text-[#222831] focus:bg-[#eee]  transition-all w-full'
              placeholder='John Smith'
              id='name'
              name='name'
              value={name}
              required
              onChange={handleChange}
            />
          </div>
          <div className='flex flex-col col-span-12 md:col-span-6'>
            <label
              htmlFor='email'
              className='text-white text-xl font-bold mb-2'
            >
              Your email
            </label>
            <input
              type='email'
              id='email'
              className='p-2 bg-transparent border-b-2 focus:outline-none text-white focus:text-[#222831] focus:bg-[#eee]  transition-all w-full'
              placeholder='example@gmail.com'
              name='email'
              value={email}
              required
              onChange={handleChange}
            />
          </div>

          <div className='col-span-12 md:col-span-6'>
            <label htmlFor='mes' className='text-white text-xl font-bold mb-2'>
              Message
            </label>
            <textarea
              className='p-2 bg-transparent border-b-2 focus:outline-none h-[15rem] resize-none text-white focus:text-[#222831] focus:bg-[#eee]  transition-all w-full'
              id='mes'
              placeholder='let tell us what is your favorite hotel'
              name='message'
              value={message}
              required
              onChange={handleChange}
            />
            <button className='text-[#222831]  font-bold mt-2 inline-flex  hover:bg-[#ffd369] py-2 px-4 rounded-sm bg-[#eee] transition-all duration-150'>
              <span> {!loading ? "Send Message" : "Sending..."}</span>
            </button>
          </div>
        </motion.form>
      ) : (
        <div>
          <motion.h3
            className='text-white text-xl font-bold my-5'
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            Thank you for trusting us!
          </motion.h3>
        </div>
      )}
      <p className='text-white'>
        Copyright © {date} All rights reserved | This template is made with{" "}
        <span className='text-red-600'>♥</span> by{" "}
        <a
          href='https://nemanjadjordjevicportfolio.netlify.app/'
          target='_blank'
          rel='noreferrer'
          className='text-xl font-bold'
        >
          Nemanja Djordjevic
        </a>
      </p>
    </div>
  );
};

export default Footer;

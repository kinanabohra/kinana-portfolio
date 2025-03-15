import React, { useRef, useState } from 'react';
import Title from '../layouts/Title'
import emailjs from '@emailjs/browser';
import { FaMapMarkerAlt, FaEnvelope, FaUser, FaPhoneAlt } from "react-icons/fa"


const Contact = () => {

  const form = useRef();
  const [popupVisible, setPopupVisible] = useState(false);
  const [error, setError] = useState('');
  

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const userName = formData.get('user_name').trim();
    const userEmail = formData.get('user_email').trim();
    const subject = formData.get('subject').trim();
    const message = formData.get('message').trim();
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!userName || !userEmail || !subject || !message) {
      setError('All fields are required!');
      return;
    }

    if (!emailRegex.test(userEmail)) {
      setError('Please enter a valid email address!');
      return;
    }

    setError('');

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      }
    )    
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
          setPopupVisible(true);
          setTimeout(() => setPopupVisible(false), 6000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };


  return (
    <section id='contact' className='w-full pt-20 pb-10'>
  <div className='flex justify-center items-center text-center'>
    <Title title="Contact Me" des="I Want to Hear from You" />
  </div>
  <div className="flex flex-wrap justify-center items-start px-4 md:px-8 lg:px-16">
    <div className="mt-2 w-full md:w-1/2 lg:w-1/3 space-y-12 pr-0 md:pr-6">
      <div className="flex items-center">
        <div className="w-12 h-12 bg-designColor rounded-full flex items-center justify-center text-white text-xl">
          <FaMapMarkerAlt />
        </div>
        <div className="w-8 h-[3px] bg-designColor"></div>
        <div className="ml-4">
          <h3 className="text-xl font-semibold">Address</h3>
          <p className="text-gray-300 text-sm md:text-base">Jaipur, Rajasthan</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-designColor rounded-full flex items-center justify-center text-white text-xl">
          <FaUser />
        </div>
        <div className="w-8 h-[3px] bg-designColor"></div>
        <div className="ml-4">
          <h3 className="text-xl font-semibold">Freelancing</h3>
          <p className="text-gray-300 text-sm md:text-base">Available Right Now</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-designColor rounded-full flex items-center justify-center text-white text-xl">
          <FaEnvelope />
        </div>
        <div className="w-8 h-[3px] bg-designColor"></div>
        <div className="ml-4">
          <h3 className="text-xl font-semibold">Email</h3>
          <p className="text-gray-300 text-sm md:text-base">kinanabohra@gmail.com</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-designColor rounded-full flex items-center justify-center text-white text-xl">
          <FaPhoneAlt />
        </div>
        <div className="w-8 h-[3px] bg-designColor"></div>
        <div className="ml-4">
          <h3 className="text-xl font-semibold">Phone</h3>
          <p className="text-gray-300 text-sm md:text-base">+91 8529482153</p>
        </div>
      </div>
    </div>

    <div className="w-full md:w-1/2 lg:w-2/3 mt-10 md:mt-0">
      <h3 className="text-2xl md:text-3xl font-semibold mb-6">Get in Touch</h3>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form className="space-y-4" ref={form} onSubmit={sendEmail} autoComplete="off">
        <div className="flex gap-4">
          <div className="w-full md:w-1/2">
            <label htmlFor="name" className="block text-sm md:text-lg mb-2">Your Name</label>
            <input
              type="text" id="name" name="user_name"
              className="w-full p-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-designColor focus:outline-none"
            />
          </div>
          <div className="w-full md:w-1/2">
            <label htmlFor="email" className="block text-sm md:text-lg mb-2">Your Email</label>
            <input
              type="email" id="email" name="user_email"
              className="w-full p-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-designColor focus:outline-none"
            />
          </div>
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm md:text-lg mb-2">Subject</label>
          <input
            type="text" id="subject" name="subject"
            className="w-full p-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-designColor focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm md:text-lg mb-2">Message</label>
          <textarea
            id="message" name="message" rows="3"
            className="w-full p-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-designColor focus:outline-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-designColor text-white rounded-lg hover:bg-opacity-90 active:scale-95 active:bg-opacity-70 transition-transform duration-300"
        >
          Send Message
        </button>
      </form>

      {popupVisible && (
        <div className="fixed bottom-4 right-4 bg-gray-700 text-white px-4 sm:px-6 py-3 rounded-lg shadow-lg text-sm sm:text-base flex items-center space-x-2 animate-slide-up">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M20 12a8.1 8.1 0 11-4-7.9" />
          </svg>
          <span>Message Sent Successfully!</span>
        </div>
      )}
    </div>
  </div>
</section>

  )
}

export default Contact

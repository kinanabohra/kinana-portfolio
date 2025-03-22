import React, { useRef, useState } from "react";
import Title from "../layouts/Title";
import emailjs from "@emailjs/browser";
import { FaMapMarkerAlt, FaEnvelope, FaUser, FaPhoneAlt } from "react-icons/fa";

const contactDetails = [
  { icon: <FaMapMarkerAlt />, title: "Address", text: "Jaipur, Rajasthan" },
  { icon: <FaUser />, title: "Freelancing", text: "Available Right Now" },
  { icon: <FaEnvelope />, title: "Email", text: "kinanabohra@gmail.com" },
  { icon: <FaPhoneAlt />, title: "Phone", text: "+91 8529482153" },
];

const formFields = [
  { label: "Your Name", id: "name", name: "user_name", type: "text" },
  { label: "Your Email", id: "email", name: "user_email", type: "email" },
  { label: "Subject", id: "subject", name: "subject", type: "text" },
  { label: "Message", id: "message", name: "message", type: "textarea" },
];

const Contact = () => {
  const form = useRef();
  const [popupVisible, setPopupVisible] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError(""); // Remove error when user starts typing
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const { user_name, user_email, subject, message } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!user_name || !user_email || !subject || !message) {
      setError("All fields are required!");
      setIsLoading(false);
      return;
    }
    if (!emailRegex.test(user_email)) {
      setError("Please enter a valid email address!");
      setIsLoading(false);
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      .then(() => {
        form.current.reset();
        setFormData({ user_name: "", user_email: "", subject: "", message: "" });
        setPopupVisible(true);
        setTimeout(() => setPopupVisible(false), 6000);
      })
      .catch((error) => console.log("FAILED...", error.text))
      .finally(() => setIsLoading(false));
  };

  return (
    <section id="contact" className="w-full pt-20 pb-10">
      <div className="flex justify-center items-center text-center">
        <Title title="Contact Me" des="I Want to Hear from You" />
      </div>

      <div className="flex flex-wrap justify-center items-start px-4 md:px-8 lg:px-16">
        {/* Contact Details */}
        <div className="mt-2 w-full md:w-1/2 lg:w-1/3 space-y-12 pr-0 md:pr-6">
          {contactDetails.map((item, index) => (
            <ContactInfo key={index} {...item} />
          ))}
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/2 lg:w-2/3 mt-10 md:mt-0">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6">Get in Touch</h3>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form className="space-y-4" ref={form} onSubmit={sendEmail} autoComplete="off">
            <div className="flex gap-4">
              {formFields.slice(0, 2).map((field) => (
                <InputField key={field.id} {...field} value={formData[field.name]} onChange={handleChange} />
              ))}
            </div>
            {formFields.slice(2).map((field) =>
              field.type === "textarea" ? (
                <TextAreaField key={field.id} {...field} value={formData[field.name]} onChange={handleChange} />
              ) : (
                <InputField key={field.id} {...field} value={formData[field.name]} onChange={handleChange} />
              )
            )}

            <button
              type="submit"
              className="w-full py-3 bg-designColor text-white rounded-lg hover:bg-opacity-90 active:scale-95 active:bg-opacity-70 transition-transform duration-300 flex justify-center items-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                  </svg>
                  <span>Sending...</span>
                </div>
              ) : (
                "Send Message"
              )}
            </button>
          </form>

          {/* Popup Message */}
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
  );
};

// Component for Contact Info Section
const ContactInfo = ({ icon, title, text }) => (
  <div className="flex items-center">
    <div className="w-12 h-12 bg-designColor rounded-full flex items-center justify-center text-white text-xl">{icon}</div>
    <div className="w-8 h-[3px] bg-designColor"></div>
    <div className="ml-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-300 text-sm md:text-base">{text}</p>
    </div>
  </div>
);

// Component for Input Fields
const InputField = ({ label, id, name, type, value, onChange }) => (
  <div className="w-full">
    <label htmlFor={id} className="block text-sm md:text-lg mb-2">{label}</label>
    <input
      type={type} id={id} name={name} value={value} onChange={onChange}
      className="w-full p-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-designColor focus:outline-none"
    />
  </div>
);

// Component for Textarea Field
const TextAreaField = ({ label, id, name, value, onChange }) => (
  <div>
    <label htmlFor={id} className="block text-sm md:text-lg mb-2">{label}</label>
    <textarea
      id={id} name={name} rows="3" value={value} onChange={onChange}
      className="w-full p-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-designColor focus:outline-none"
    ></textarea>
  </div>
);

export default Contact;

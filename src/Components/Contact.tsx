import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWraper } from "../Utils";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = () => {};
  const handleSubmit = () => {};
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-8 overflow-hidden`}
    >
      <motion.div
        className="flex-[0.75] p-8 rounded-2xl "
        style={{ border: "#4dba87 2px solid", height: "95vh" }}
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-5 flex flex-col gap-4"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-primary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-[#4dba87] outline outline-offset-1 outline-1  border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-primary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-[#4dba87] outline outline-offset-1 outline-1  border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-primary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-[#4dba87] outline outline-offset-1 outline-1  border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary mt-5 py-3 px-8 rounded-xl w-fit text-white font-bold shadow-md shadow-primary"
            style={{ backgroundColor: "#4dba87" }}
          >
            {isLoading ? "Sending...." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWraper(Contact, "contact");

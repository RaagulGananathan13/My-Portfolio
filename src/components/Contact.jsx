import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-light tracking-tighter font-semibold">
        Get in Touch
      </motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4">
          {CONTACT.address}
        </motion.p>
        <motion.p 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4">
          <a href={`tel:${CONTACT.phoneNo}`} className="text-blue-500 hover:underline">{CONTACT.phoneNo}</a>
        </motion.p>
        <motion.a 
          href={`mailto:${CONTACT.email}`} // This opens the email client
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="border-b">
          {CONTACT.email}
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;

import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  const normalizedPhone = CONTACT.phoneNo.replace(/\s+/g, "").replace("+", "");
  const whatsappMessage = encodeURIComponent(
    "Hi Raagul, I would like to discuss a website quotation and schedule a meeting."
  );
  const googleCalendarLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    "Website Quotation Discussion"
  )}&details=${encodeURIComponent(
    "Hi Raagul, I would like to discuss a website quotation. Please share your preferred agenda, timeline, and budget range."
  )}`;

  return (
    <section className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl tracking-tighter font-semibold">
        Get in Touch
      </motion.h1>

      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 24 }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-10 max-w-2xl px-4 text-center text-neutral-400"
      >
        Available for freelance web projects and long-term collaboration. Reach out to
        discuss your requirements, timeline, and website quotation.
      </motion.p>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-4 md:grid-cols-3">
        <motion.a
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          href={`https://wa.me/${normalizedPhone}?text=${whatsappMessage}`}
          target="_blank"
          rel="noreferrer"
          className="rounded-2xl border border-emerald-700/40 bg-emerald-900/10 p-6 transition-all hover:-translate-y-1 hover:border-emerald-500/60"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-400">WhatsApp</p>
          <h3 className="mt-2 text-xl font-semibold text-white">Quick Message</h3>
          <p className="mt-2 text-sm text-neutral-300">Chat directly for quick responses and project discussions.</p>
          <p className="mt-4 text-sm font-medium text-emerald-300">{CONTACT.phoneNo}</p>
        </motion.a>

        <motion.a
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          href={`mailto:${CONTACT.email}`}
          className="rounded-2xl border border-blue-700/40 bg-blue-900/10 p-6 transition-all hover:-translate-y-1 hover:border-blue-500/60"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-blue-400">Email</p>
          <h3 className="mt-2 text-xl font-semibold text-white">Send an Email</h3>
          <p className="mt-2 text-sm text-neutral-300">Share project scope, features, and budget expectations.</p>
          <p className="mt-4 break-all text-sm font-medium text-blue-300">{CONTACT.email}</p>
        </motion.a>

        <motion.a
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          href={googleCalendarLink}
          target="_blank"
          rel="noreferrer"
          className="rounded-2xl border border-violet-700/40 bg-violet-900/10 p-6 transition-all hover:-translate-y-1 hover:border-violet-500/60"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-violet-400">Meeting</p>
          <h3 className="mt-2 text-xl font-semibold text-white">Schedule Discussion</h3>
          <p className="mt-2 text-sm text-neutral-300">Request a meeting to discuss website quotation, timeline, and deliverables.</p>
          <p className="mt-4 text-sm font-medium text-violet-300">Book via Google Calendar</p>
        </motion.a>
      </div>

      <div className="mt-10 text-center tracking-tighter text-neutral-400">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4">
          {CONTACT.address}
        </motion.p>
      </div>
    </section>
  );
};

export default Contact;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What makes your salon different?",
    answer:
      "Our salon offers precision haircuts, luxury treatments, and a personalized experience tailored to enhance your unique beauty.",
  },
  {
    question: "Do I need an appointment?",
    answer:
      "Yes, we operate on a by-appointment-only basis to ensure every client gets our full attention and a premium experience.",
  },
  {
    question: "What is the Glass Hair Treatment?",
    answer:
      "It’s a keratin-infused glossing service that creates a mirror-like shine and ultra-sleek finish, lasting up to 6 weeks.",
  },
  {
    question: "How can I book an appointment?",
    answer:
      "You can book online through our website, call us, or email us. We recommend booking at least 1-2 weeks in advance.",
  },
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="md:max-w-2xl w-full mx-auto text-primary px-6 px:px-0">
      <h2 className="text-3xl font-bold text-center mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <button
              className="w-full text-left text-lg font-semibold flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <motion.span
                initial={{ rotate: 0 }}
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaChevronDown />
              </motion.span>
            </button>

            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={
                activeIndex === index
                  ? { height: "auto", opacity: 1 }
                  : { height: 0, opacity: 0 }
              }
              transition={{ duration: 0.3 }}
              style={{ overflow: "hidden" }}
            >
              <p className="mt-2 text-gray-400">{faq.answer}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;

import React, { useState } from "react";
import "./Faq.css";

const faqs = [
  {
    id: 1,
    question: "01 : Do you offer a free initial consultation?",
    answer:
      "Yes. We provide a free initial consultation to understand your case and guide you on the best legal steps forward.",
  },
  {
    id: 2,
    question: "02 : Personalized Case Strategies",
    answer:
      "Each case is unique. We develop customized strategies based on your specific legal needs.",
  },
  {
    id: 3,
    question: "03 : Confidential & Secure Process",
    answer:
      "Your privacy matters. All information is handled with strict confidentiality and security.",
  },
  {
    id: 4,
    question: "04 : Transparent & Clear Communication",
    answer:
      "We maintain open and honest communication so you always know the status of your case.",
  },
  {
    id: 5,
    question: "05 : Transparent & Clear Communication",
    answer:
      "We maintain open and honest communication so you always know the status of your case.",
  },
];

const Faq = () => {
  const [openId, setOpenId] = useState(1);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (!value.trim()) return;
    console.log(value);
    setValue("");
  };

  return (
    <div>
      <section className="text-center">
        <button className="inline-flex items-center gap-2 py-2 px-4 md:py-3 md:px-7 mb-5 border border-blue-600 rounded-2xl text-lg font-medium bg-white hover:bg-blue-600 hover:text-white ">
          <span className="w-4 h-4 bg-black rounded-full" />
          FAQ
        </button>
        <h2 className="text-xl md:text-4xl font-bold">
          Frequently Asked Questions?
        </h2>
      </section>

      <section>
        <div className="grid md:grid-cols-2 justify-center gap-5 m-6 md:m-16">
          <div>
            <img
              className="w-full h-80 md:h-100"
              src="/assets/Frame2147230090.png"
              alt=""
            />
            <div className="bg-white py-5 px-7 mt-5 rounded-4xl">
              <h1 className="text-xl md:text-3xl font-bold mb-9">
                Still have any legal question <br /> in your mind?
              </h1>
              <div className="input-wrapper">
                <input
                  type="text"
                  placeholder="Type Question?"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
                <button onClick={handleSubmit}>➤</button>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 md:p-10 rounded-4xl">
            <div className="faq">
              {faqs.map((item) => (
                <div
                  key={item.id}
                  className={`faq-item ${openId === item.id ? "active" : ""}`}
                  onClick={() => toggleFAQ(item.id)}
                >
                  <div className="faq-question">
                    <h4>{item.question}</h4>
                    <span>{openId === item.id ? "−" : "+"}</span>
                  </div>
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;

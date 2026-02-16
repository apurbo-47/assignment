import React, { useState } from "react";
import "./DetailsCard.css";
import "./Hero3.css";

const faqs = [
  {
    id: 1,
    question: "01 : Legal Expertise",
    answer:
      "Our experienced legal professionals provide expert guidance tailored to your case, ensuring the best possible outcome.",
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
];

const Hero3 = () => {
  const [openId, setOpenId] = useState(1);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="bg-white m-3 md:m-15">
      <div className=" pt-5 pb-5 md:pt-10 md:pb-15 md:px-15">
        <section className="text-center">
          <button className="inline-flex items-center gap-2 py-3 px-6 border border-green-400 rounded-2xl md:text-lg text-sm font-medium bg-white hover:bg-green-400 hover:text-white ">
            <span className="w-4 h-4 bg-black rounded-full" />
            Why Choose Me
          </button>
          <h1 className="mt-5 text-2xl md:text-5xl font-bold text-[#333333] px-2.5 md:px-72">
            String Legal Solutions Built Around Your need
          </h1>
          <p className="description">
            We provide reliable clear and strategic legal support to help
            individuals and business <br /> complex situations with confidence.
          </p>
        </section>
      </div>

      <div>
        <section className="legal-section">
          <div className="legal-container">
            {/* LEFT - FAQ */}
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
            {/* RIGHT - IMAGE */}
            <div className="legal-image">
              <img
                src="public/assets/e1bc4f2d4da0d41d1ae8864d23fe40c1a2b7df3a.png"
                alt="Justice Scale"
              />
            </div>
          </div>

          {/* Learn More – always bottom */}
          <div className="learn-more-wrapper">
            <button className="learn-btn">Learn More →</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero3;

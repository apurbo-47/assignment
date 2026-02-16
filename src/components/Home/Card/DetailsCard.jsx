import React from "react";
import "./DetailsCard.css";

const services = [
  {
    title: "Corporate Law",
    desc: "Strategic counsel for mergers, acquisitions, and corporate governance matters.",
    img: "/assets/032b7d1648ac464686803af350c5903db03ea6c8.png",
  },
  {
    title: "Criminal Defense",
    desc: "Aggressive representation for white-collar crimes and federal investigations.",
    img: "/assets/21666982dd0b3666648ec128a104ada48c8bc695.png",
  },
  {
    title: "Family Law",
    desc: "Compassionate guidance through divorce, custody, and estate planning.",
    img: "/assets/270001d28f908076b4abf258be7d3ed8960ad8b7.png",
  },
  {
    title: "Real Estate",
    desc: "Commercial and residential property transactions, zoning, and disputes.",
    img: "/assets/4cb6d9f002ed223096c8f9b995e9c537da911379.png",
  },
  {
    title: "Civil Litigation",
    desc: "Resolving complex disputes through mediation, arbitration, or trial.",
    img: "/assets/8c1657028de4b4845fc8e84deb8af2ce7182b207.png",
  },
  {
    title: "Intellectual Property",
    desc: "Protecting your trademarks, copyrights, and trade secrets.",
    img: "/assets/c54e362b890eedef09e02f278559330dfce6430a.png",
  },
];

const DetailsCard = () => {
  return (
    <div>
      <section className="legal-section">
        <button className="inline-flex items-center gap-2 py-4 px-7 border border-blue-600 rounded-2xl text-lg font-medium bg-white hover:bg-blue-600 hover:text-white ">
          <span className="w-4 h-4 bg-black rounded-full" />
          Practice Areas
        </button>
        <h1 className="title">Comprehensive Legal Expertise</h1>
        <p className="description">
          We offer a full spectrum of legal services, tailored <br /> to meet
          the unique needs of individuals and businesses alike.
        </p>
      </section>
      <div>
        <div className="card-grid max-w-7xl mx-auto">
          {services.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.img} alt={item.title} />
              <div className="card-body">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <a href="#">Learn More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;

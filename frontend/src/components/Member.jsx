import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3 },
  }),
};

const CommitteeCard = ({ title, members, index }) => (
  <motion.div
    className="mb-10 border-b"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeIn}
    custom={index}
  >
    <h2 className="text-2xl font-semibold text-blue-800 bg-blue-100 py-4 px-6 rounded-t-md">
      {title}
    </h2>
    <div className="grid gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-white">
      {members.map((member, i) => (
        <motion.div
          key={i}
          className="bg-gray-50 p-4 rounded-xl shadow text-center hover:shadow-md transition"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.2 }}
        >
          <img
            src={
              member.image && member.image.trim() !== ""
                ? `/${member.image}`
                : "/default.png"
            }
            alt={member.name}
            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-blue-300"
          />
          <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
          <p className="text-sm text-gray-500">{member.role}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

function App() {
  const committees = [
    {
      title: "Cyber Security Members",
      members: [
        { name: "Ankush Kumar", role: "Member", image: "Ankush.jpg" },
        { name: "Sneha Jaiswal", role: "Member", image: "sneha.jpg" },
        { name: "Adiba Naz", role: "Member", image: "Adiba.jpg" },
      ],
    },
    {
      title: "Web Development Members",
      members: [
        { name: "Adarsh kumar Singh", role: "Member", image: "adarsh.jpg" },
        { name: "Abishek Jaiswal", role: "Member", image: "Abhi.jpg" }, // fallback to default
        { name: "Aditee Ray", role: "Member", image: "Aaditi.jpg" },
        { name: "Raj Kushwaha", role: "Member", image: "Raj.jpg" },
      ],
    },
    {
      title: "Tech Cordinator Members",
      members: [
        { name: "Adarsh kumar Singh", role: "Member", image: "adarsh.jpg" },
        { name: "Abishek Jaiswal", role: "Member", image: "Abhi.jpg" }, // fallback to default
        { name: "Aditee Ray", role: "Member", image: "Aaditi.jpg" },
        { name: "Raj Kushwaha", role: "Member", image: "Raj.jpg" },
      ],
    },
    {
      title: "AI/ML & Cloud Members",
      members: [
        { name: "Adarsh kumar Singh", role: "Member", image: "adarsh.jpg" },
        { name: "Abishek Jaiswal", role: "Member", image: "Abhi.jpg" }, // fallback to default
        { name: "Aditee Ray", role: "Member", image: "Aaditi.jpg" },
        { name: "Raj Kushwaha", role: "Member", image: "Raj.jpg" },
      ],
    },
    {
      title: "Social Media & OutReach Members",
      members: [
        { name: "Adarsh kumar Singh", role: "Member", image: "adarsh.jpg" },
        { name: "Abishek Jaiswal", role: "Member", image: "Abhi.jpg" }, // fallback to default
        { name: "Aditee Ray", role: "Member", image: "Aaditi.jpg" },
        { name: "Raj Kushwaha", role: "Member", image: "Raj.jpg" },
      ],
    },
    {
      title: "DSA & CPMembers",
      members: [
        { name: "Adarsh kumar Singh", role: "Member", image: "adarsh.jpg" },
        { name: "Abishek Jaiswal", role: "Member", image: "Abhi.jpg" }, // fallback to default
        { name: "Aditee Ray", role: "Member", image: "Aaditi.jpg" },
        { name: "Raj Kushwaha", role: "Member", image: "Raj.jpg" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 mt-20">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-xl">
        <h1 className="text-4xl font-bold text-center text-blue-800 py-8 border-b">
          All Committee Members
        </h1>
        {committees.map((committee, idx) => (
          <CommitteeCard
            key={idx}
            title={committee.title}
            members={committee.members}
            index={idx}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

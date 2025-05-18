// import React from "react";
// import { motion } from "framer-motion";

// const fadeIn = {
//   hidden: { opacity: 0, y: 50 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.2 },
//   }),
// };
// const CommitteeCard = ({ title, members, index }) => (
//   <motion.div
//     className="mb-10 border-b"
//     initial="hidden"
//     whileInView="visible"
//     // viewport={{ once: true }}
//     variants={fadeIn}
//     custom={index}
//   >
//     <h2 className="text-2xl font-semibold text-blue-800 bg-blue-100 py-4 px-6 rounded-t-md">
//       {title}
//     </h2>
//     <div className="grid gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-white">
//       {members.map((member, i) => (
//         <motion.div
//           whileHover={{scale:3}}
//           key={i}
//           className="bg-gray-50 p-4 rounded-xl shadow text-center hover:shadow-md transition"
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: false }}
//           transition={{ delay: i * 0.2 }}
          
//         >
//           <img
//             src={
//               member.image && member.image.trim() !== ""
//                 ? `/${member.image}`
//                 : "/default.png"
//             }
//             alt={member.name}
//             className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-blue-300"
//           />
//           <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
//           <p className="text-sm text-gray-500">{member.role}</p>

//         </motion.div>
//       ))}
//     </div>
//   </motion.div>
// );

// function App() {
//   const committees = [
//     {
//       title: "Cyber Security Members",
//       members: [
//         { name: "Ankush Kumar", role: "Member", image: "Ankush.jpg" },
//         { name: "Sneha Jaiswal", role: "Member", image: "sneha.jpg" },
//         { name: "Adiba Naz", role: "Member", image: "Adiba.jpg" },
//       ],
//     },
//     {
//       title: "Web Development Members",
//       members: [
//         { name: "Adarsh kumar Singh", role: "Member", image: "adarsh.jpg" },
//         { name: "Abishek Jaiswal", role: "Member", image: "Abhi.jpg" }, // fallback to default
//         { name: "Aditee Ray", role: "Member", image: "Aaditi.jpg" },
//         { name: "Raj Kushwaha", role: "Member", image: "Raj.jpg" },
//       ],
//     },
//     {
//       title: "Tech Cordinator Members",
//       members: [
//         { name: "Adarsh kumar Singh", role: "Member", image: "adarsh.jpg" },
//         { name: "Abishek Jaiswal", role: "Member", image: "Abhi.jpg" }, // fallback to default
//         { name: "Aditee Ray", role: "Member", image: "Aaditi.jpg" },
//         { name: "Raj Kushwaha", role: "Member", image: "Raj.jpg" },
//       ],
//     },
//     {
//       title: "AI/ML & Cloud Members",
//       members: [
//         { name: "Adarsh kumar Singh", role: "Member", image: "adarsh.jpg" },
//         { name: "Abishek Jaiswal", role: "Member", image: "Abhi.jpg" }, // fallback to default
//         { name: "Aditee Ray", role: "Member", image: "Aaditi.jpg" },
//         { name: "Raj Kushwaha", role: "Member", image: "Raj.jpg" },
//       ],
//     },
//     {
//       title: "Social Media & OutReach Members",
//       members: [
//         { name: "Adarsh kumar Singh", role: "Member", image: "adarsh.jpg" },
//         { name: "Abishek Jaiswal", role: "Member", image: "Abhi.jpg" }, // fallback to default
//         { name: "Aditee Ray", role: "Member", image: "Aaditi.jpg" },
//         { name: "Raj Kushwaha", role: "Member", image: "Raj.jpg" },
//       ],
//     },
//     {
//       title: "DSA & CPMembers",
//       members: [
//         { name: "Adarsh kumar Singh", role: "Member", image: "adarsh.jpg" },
//         { name: "Abishek Jaiswal", role: "Member", image: "Abhi.jpg" }, // fallback to default
//         { name: "Aditee Ray", role: "Member", image: "Aaditi.jpg" },
//         { name: "Raj Kushwaha", role: "Member", image: "Raj.jpg" },
//       ],
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 py-10 px-4">
//       <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-xl">
//         <h1 className="text-4xl font-bold text-center text-blue-800 py-8 border-b">
//           All Committee Members
//         </h1>
//         {committees.map((committee, idx) => (
//           <CommitteeCard
//             key={idx}
//             title={committee.title}
//             members={committee.members}
//             index={idx}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ImLinkedin } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

// Animation variant
const fadeIn = {
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 },
  }),
};

// Component for each committee
const CommitteeCard = ({
  title,
  head,
  coHead,
  members,
  index,
  onMemberClick,
  selectedMemberId,
}) => (
  <motion.div
    className="mb-8"
    initial="visible"
    animate="visible"
    variants={fadeIn}
    custom={index}
  >
    {/* Committee title */}
    <h2 className="text-xl sm:text-2xl text-center font-semibold text-blue-800 bg-blue-100 py-3 sm:py-4 px-4 rounded-t-md">
      {title}
    </h2>

    {/* Head & Co-Head section */}
    <div className="flex justify-center gap-6 sm:gap-16 my-3 flex-wrap px-2">
      {[head, coHead].map((leader, idx) => {
        if (!leader) return null;
        return (
          <motion.div
            key={`${title}-leader-${idx}`}
            layoutId={`${title}-leader-${idx}`}
            className="bg-transparent sm:p-4 rounded-xl text-center w-1/4 sm:w-1/4 md:w-1/6 lg:w-1/6 cursor-pointer"
            onClick={(e) => onMemberClick(`${title}-leader-${idx}`, leader, e)}
            style={{
              pointerEvents:
                selectedMemberId && selectedMemberId !== `${title}-leader-${idx}`
                  ? "none"
                  : "auto",
              opacity:
                selectedMemberId && selectedMemberId !== `${title}-leader-${idx}`
                  ? 0.5
                  : 1,
            }}
          >
            {/* Leader image */}
            <img
              src={
                leader.image && leader.image.trim() !== ""
                  ? `/${leader.image}`
                  : "/default.png"
              }
              alt={leader.name}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-2 object-cover border-4 border-blue-300"
            />
            <h3 className="text-sm sm:text-lg font-bold text-gray-800">{leader.name}</h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-2">{leader.role}</p>
          </motion.div>
        );
      })}
    </div>

    {/* Members section */}
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 bg-white px-2">
      {members.map((member, i) => {
        const id = `${title}-${i}`;
        return (
          <motion.div
            key={id}
            layoutId={id}
            className="bg-transparent pb-4 rounded-xl text-center cursor-pointer w-1/4 sm:w-1/4 md:w-1/6 lg:w-1/6 "
            initial={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2 }}
            onClick={(e) => onMemberClick(id, member, e)}
            style={{
              pointerEvents:
                selectedMemberId && selectedMemberId !== id ? "none" : "auto",
              opacity: selectedMemberId && selectedMemberId !== id ? 0.5 : 1,
            }}
          >
            {/* Member image */}
            <img
              src={
                member.image && member.image.trim() !== ""
                  ? `/${member.image}`
                  : "/default.png"
              }
              alt={member.name}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-2 object-cover border-4 border-blue-300"
            />
            <h3 className="text-sm sm:text-lg font-bold text-gray-800">{member.name}</h3>
            <p className="text-xs sm:text-sm text-gray-500">{member.role}</p>
          </motion.div>
        );
      })}
    </div>
  </motion.div>
);

// Main Members component
export default function Members() {
  // Define your committees here
  const committees = [
    {
      title: " Enigma Club Coordinator",
      members: [
        {
          name: "Atebar Haider",
          role: "Club Coordinator",
          image: "atebar.jpg",
          description: "Passionate about network security and ethical hacking.",
          social: {
            linkedin: "https://linkedin.com/in/ankushkumar",
            twitter: "https://twitter.com/ankushk",
            instagram: "https://instagram.com/ankushk",
            email: "ankush.kumar@example.com",
            github: "https://github.com/ankushkumar",
          }
        }
        ]
    },
    {
      title : " Student Coordinator",
      members: [
        {
          name : "SPARSH MISHRA",
          image :"Sparsh.jpg",
          description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, ipsa.",
          social: {
            linkedin: "https://linkedin.com/in/ankushkumar",
            twitter: "https://twitter.com/ankushk",
            instagram: "https://instagram.com/ankushk",
            email: "ankush.kumar@example.com",
            github: "https://github.com/ankushkumar",
          }
        },
        {
          name : "YOGESH PRAJAPATI",
          image :"Sparsh.jpg",
          description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, ipsa.",
          social: {
            linkedin: "https://linkedin.com/in/ankushkumar",
            twitter: "https://twitter.com/ankushk",
            instagram: "https://instagram.com/ankushk",
            email: "ankush.kumar@example.com",
            github: "https://github.com/ankushkumar",
          }
        },
        {
          name : "VISHAL KUMAR",
          image :"Sparsh.jpg",
          description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, ipsa.",
          social: {
            linkedin: "https://linkedin.com/in/ankushkumar",
            twitter: "https://twitter.com/ankushk",
            instagram: "https://instagram.com/ankushk",
            email: "ankush.kumar@example.com",
            github: "https://github.com/ankushkumar",
          }
        },
      ]
    },
    {
      title: "Cyber Security Team",
      head: {
        name: "Ayushi Shukla",
        role: "Head",
        image: "ayushi1.jpg",
        description: "Passionate about network security and ethical hacking.",
        social: {
          linkedin: "https://linkedin.com/in/ayushishukla",
          twitter: "dcdcd",
          instagram: "dvfsvfv",
          email: "ayushi@example.com",
          github: "dvfvfsd"
        },
        },
        coHead: {
          name: "Rohit Singh Chauhan",
          role: "Co-Head",
          image: "ayushi2.jpg",
          description: "Passionate about network security and ethical hacking.",
          social: {
            linkedin: "fvfsdvsd",
            twitter: "https://twitter.com/ayushi",
            instagram: "fvdsfvdf",
            email: "ayushi.only@example.com",
            github: "fsdvfssdv"
          },
        },
         members: [
        {
          name: "Ankush Kumar",
          role: "Member",
          image: "Ankush.jpg",
          description: "Passionate about network security and ethical hacking.",
          social: {
            linkedin: "https://linkedin.com/in/ankushkumar",
            twitter: "https://twitter.com/ankushk",
            instagram: "https://instagram.com/ankushk",
            email: "ankush.kumar@example.com",
            github: "https://github.com/ankushkumar",
          },
        },
        {
          name: "Sneha Jaiswal",
          role: "Member",
          image: "sneha.jpg",
          description: "Focused on cryptography and malware analysis.",
          social: {
            linkedin: "https://linkedin.com/in/snehajaiswal",
            twitter: "https://twitter.com/snehaj",
            instagram: "https://instagram.com/snehaj",
            email: "sneha.jaiswal@example.com",
            github: "https://github.com/snehajaiswal",
          },
        },
        {
          name: "Adiba Naz",
          role: "Member",
          image: "Adiba.jpg",
          description: "Loves penetration testing and security audits.",
          social: {
            linkedin: "https://linkedin.com/in/adibanaz",
            twitter: "https://twitter.com/adibanaz",
            instagram: "https://instagram.com/adibanaz",
            email: "adiba.naz@example.com",
            github: "https://github.com/adibanaz",
          },
        },
      ],
    },
    {
      title: "Web Development Team",
      head: {
        name: "Rajkumar Gupta",
        role: "Head",
        image: "",
        description: "Passionate about network security and ethical hacking.",
        social: {
          linkedin: "https://linkedin.com/in/ayushishukla",
          twitter: "dcdcd",
          instagram: "dvfsvfv",
          email: "ayushi@example.com",
          github: "dvfvfsd"
        },
        },
        coHead: {
          name: "ADITI SINGH",
          role: "Co-Head",
          image: "ayushi2.jpg",
          description: "Passionate about network security and ethical hacking.",
          social: {
            linkedin: "fvfsdvsd",
            twitter: "https://twitter.com/ayushi",
            instagram: "fvdsfvdf",
            email: "ayushi.only@example.com",
            github: "fsdvfssdv"
          },
        },
      members: [
        {
          name: "Adarsh kumar Singh",
          role: "Member",
          image: "adarsh.jpg",
          description: "Full stack developer with a love for React and Node.js.",
          social: {
            linkedin: "https://linkedin.com/in/adarshks",
            twitter: "https://twitter.com/adarshks",
            instagram: "https://instagram.com/adarshks",
            email: "adarsh.ks@example.com",
            github: "https://github.com/adarshks",
          },
        },
        {
          name: "Abishek Jaiswal",
          role: "Member",
          image: "Abhi.jpg",
          description: "Front-end enthusiast focusing on UI/UX.",
          social: {
            linkedin: "https://linkedin.com/in/abishekj",
            twitter: "https://twitter.com/abishekj",
            instagram: "https://instagram.com/abishekj",
            email: "abishek.jaiswal@example.com",
            github: "https://github.com/abishekj",
          },
        },
        {
          name: "Aditee Ray",
          role: "Member",
          image: "Aaditi.jpg",
          description: "Passionate about building responsive websites.",
          social: {
            linkedin: "https://linkedin.com/in/aditeeray",
            twitter: "https://twitter.com/aditeeray",
            instagram: "https://instagram.com/aditeeray",
            email: "aditee.ray@example.com",
            github: "https://github.com/aditeeray",
          },
        },
        {
          name: "Raj Kushwaha",
          role: "Member",
          image: "Raj.jpg",
          description: "Specializes in backend APIs and database management.",
          social: {
            linkedin: "https://linkedin.com/in/rajkushwaha",
            twitter: "https://twitter.com/rajkushwaha",
            instagram: "https://instagram.com/rajkushwaha",
            email: "raj.kushwaha@example.com",
            github: "https://github.com/rajkushwaha",
          },
        },
        {
          name: "Aryan Gupta",
          role: "Member",
          image: "",
          description: "Specializes in backend APIs and database management.",
          social: {
            linkedin: "https://linkedin.com/in/rajkushwaha",
            twitter: "https://twitter.com/rajkushwaha",
            instagram: "https://instagram.com/rajkushwaha",
            email: "raj.kushwaha@example.com",
            github: "https://github.com/rajkushwaha",
          },
        },
      ],
    },
    {
      title: "AI / ML & CLOUD Team",
      head: {
        name: "Priya Chugh",
        role: "Head",
        image: ".jpg",
        description: "Passionate about network security and ethical hacking.",
        social: {
          linkedin: "https://linkedin.com/in/ayushishukla",
          twitter: "dcdcd",
          instagram: "dvfsvfv",
          email: "ayushi@example.com",
          github: "dvfvfsd"
        },
        },
        coHead: {
          name: "Amal Prasad Trivedi",
          role: "Co-Head",
          image: ".jpg",
          description: "Passionate about network security and ethical hacking.",
          social: {
            linkedin: "fvfsdvsd",
            twitter: "https://twitter.com/ayushi",
            instagram: "fvdsfvdf",
            email: "ayushi.only@example.com",
            github: "fsdvfssdv"
          },
        },
         members: [
        {
          name: "Priti Kumari",
          role: "Member",
          image: ".jpg",
          description: "Passionate about network security and ethical hacking.",
          social: {
            linkedin: "https://linkedin.com/in/ankushkumar",
            twitter: "https://twitter.com/ankushk",
            instagram: "https://instagram.com/ankushk",
            email: "ankush.kumar@example.com",
            github: "https://github.com/ankushkumar",
          },
        },
        {
          name: "Rishu Kesarwani",
          role: "Member",
          image: ".jpg",
          description: "Focused on cryptography and malware analysis.",
          social: {
            linkedin: "https://linkedin.com/in/snehajaiswal",
            twitter: "https://twitter.com/snehaj",
            instagram: "https://instagram.com/snehaj",
            email: "sneha.jaiswal@example.com",
            github: "https://github.com/snehajaiswal",
          },
        },
        {
          name: "Suryansh kumar shukla",
          role: "Member",
          image: ".jpg",
          description: "Loves penetration testing and security audits.",
          social: {
            linkedin: "https://linkedin.com/in/adibanaz",
            twitter: "https://twitter.com/adibanaz",
            instagram: "https://instagram.com/adibanaz",
            email: "adiba.naz@example.com",
            github: "https://github.com/adibanaz",
          },
        },
        {
          name: "Riya Srivastava",
          role: "Member",
          image: ".jpg",
          description: "Loves penetration testing and security audits.",
          social: {
            linkedin: "https://linkedin.com/in/adibanaz",
            twitter: "https://twitter.com/adibanaz",
            instagram: "https://instagram.com/adibanaz",
            email: "adiba.naz@example.com",
            github: "https://github.com/adibanaz",
          },
        },
        {
          name: "Yash Vardhan",
          role: "Member",
          image: "Ad",
          description: "Loves penetration testing and security audits.",
          social: {
            linkedin: "https://linkedin.com/in/adibanaz",
            twitter: "https://twitter.com/adibanaz",
            instagram: "https://instagram.com/adibanaz",
            email: "adiba.naz@example.com",
            github: "https://github.com/adibanaz",
          },
        },
      ],
    },
  ];

  const [selectedMemberId, setSelectedMemberId] = useState(null);
  const [selectedMemberData, setSelectedMemberData] = useState(null);
  const expandedCardRef = useRef(null);
  const justClosedRef = useRef(false);

  // Close popup on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        selectedMemberId &&
        expandedCardRef.current &&
        !expandedCardRef.current.contains(e.target)
      ) {
        setSelectedMemberId(null);
        setSelectedMemberData(null);
        justClosedRef.current = true;
        setTimeout(() => (justClosedRef.current = false), 100);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [selectedMemberId]);

  // Handle member card click
  const onMemberClick = (id, member, e) => {
    e.stopPropagation();
    if (justClosedRef.current) return;

    if (selectedMemberId === id) {
      setSelectedMemberId(null);
      setSelectedMemberData(null);
      return;
    }

    setSelectedMemberId(id);
    setSelectedMemberData(member);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-2 sm:px-4 relative">
      {/* Card container */}
      <div
        className={`max-w-6xl mx-auto bg-white shadow-xl rounded-xl transition-all duration-300 ${
          selectedMemberId ? "blur-sm pointer-events-none" : ""
        }`}
      >
        {/* Page title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-800 py-6 sm:py-8 border-b">
          All Committee Teams
        </h1>

        {/* Committee list */}
        {committees.map((committee, idx) => (
          <CommitteeCard
            key={idx}
            title={committee.title}
            head={committee.head}
            coHead={committee.coHead}
            members={committee.members}
            index={idx}
            onMemberClick={onMemberClick}
            selectedMemberId={selectedMemberId}
          />
        ))}
      </div>

      {/* Pop-up expanded card */}
      <AnimatePresence>
        {selectedMemberId && selectedMemberData && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setSelectedMemberId(null);
              setSelectedMemberData(null);
            }}
          >
            <motion.div
              layoutId={selectedMemberId}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-xs sm:max-w-md md:max-w-lg bg-white rounded-xl shadow-2xl p-4 sm:p-6 cursor-auto"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.2 }}
              ref={expandedCardRef}
            >
              {/* Pop-up content */}
              <div className="flex flex-col items-center">
                <img
                  src={
                    selectedMemberData.image?.trim()
                      ? `/${selectedMemberData.image}`
                      : "/default.png"
                  }
                  alt={selectedMemberData.name}
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-blue-300 mb-3"
                />
                <h2 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">{selectedMemberData.name}</h2>
                <p className="text-sm sm:text-base text-gray-600 mb-1">{selectedMemberData.role}</p>
                <p className="text-xs sm:text-sm text-gray-500 italic mb-3 text-center">{selectedMemberData.description}</p>

                {/* Social media icons */}
                <div className="flex flex-wrap justify-center gap-4 text-blue-600 text-xl">
                  {selectedMemberData.social.linkedin && (
                    <a
                      href={selectedMemberData.social.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                      className="text-blue-700"
                    >
                      <ImLinkedin />
                    </a>
                  )}
                  {selectedMemberData.social.twitter && (
                    <a
                      href={selectedMemberData.social.twitter}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Twitter"
                      className="text-black"
                    >
                      <BsTwitterX />
                    </a>
                  )}
                  {selectedMemberData.social.email && (
                    <a
                      href={`mailto:${selectedMemberData.social.email}`}
                      aria-label="Email"
                      className="text-red-600"
                    >
                      <IoMail />
                    </a>
                  )}
                  {selectedMemberData.social.github && (
                    <a
                      href={selectedMemberData.social.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      className="text-gray-900"
                    >
                      <FaGithub />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

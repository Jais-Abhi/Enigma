import React, { useState } from "react";
import { useGetAllMembers } from "../hooks/members/useGetAllMembers";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const MemberList = () => {
  const { members, loading } = useGetAllMembers();
  const [tab, setTab] = useState("active");

  if (loading)
    return (
      <p className="text-center text-xl mt-10 text-blue-700 animate-pulse">
        Loading members...
      </p>
    );

  const activeMembers = members
    .filter((member) => member.isActive)
    .sort((a, b) => a.rollNo.localeCompare(b.rollNo));

  const pastMembers = members
    .filter((member) => !member.isActive)
    .sort((a, b) => a.rollNo.localeCompare(b.rollNo));

  const buttonClass = (value) =>
    `px-6 py-2 font-semibold rounded-full transition duration-300 ${
      tab === value
        ? "bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg scale-105"
        : "bg-white border border-blue-300 text-blue-700 hover:bg-blue-50"
    }`;

  const renderMemberCard = (member) => (
    <div
      key={member._id}
      className="p-6 backdrop-blur-sm bg-white/80 border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
    >
      {member.image && (
        <img
          src={member.image}
          alt={member.name}
          className="w-28 h-28 object-cover rounded-full border-4 border-blue-500 shadow mb-4 hover:scale-105 transition"
        />
      )}
      <h2 className="text-lg font-bold text-gray-800">{member.name}</h2>
      <p className="text-sm text-gray-600">{member.committee} {member.position}</p>

      <div className="flex items-center justify-center gap-4 mt-3 flex-wrap text-gray-700 text-xl">
        {member.email && (
          <a
            href={`mailto:${member.email}`}
            className="hover:text-blue-800 transition"
            title={member.email}
          >
            <MdEmail />
          </a>
        )}
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition"
          >
            <FaLinkedin />
          </a>
        )}
        {member.github && (
          <a
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            <FaGithub />
          </a>
        )}
      </div>
    </div>
  );

  const renderGroupedMembers = (membersArray) => {
    const grouped = {};
    membersArray.forEach((member) => {
      const committee = member.committee || "Others";
      if (!grouped[committee]) grouped[committee] = [];
      grouped[committee].push(member);
    });

    return Object.entries(grouped).map(([committeeName, membersInGroup]) => (
      <div key={committeeName} className="mb-12">
        <h4 className="text-2xl font-semibold text-center text-blue-700 mb-6 border-b pb-2">
          {committeeName} Community
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {membersInGroup.map((member) => renderMemberCard(member))}
        </div>
      </div>
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4 md:p-10">
      <h2 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-400 drop-shadow mb-12 animate-fade-in">
        Our Members
      </h2>

      <div className="flex justify-center gap-4 mb-12">
        <button onClick={() => setTab("active")} className={buttonClass("active")}>
          Active Members
        </button>
        <button onClick={() => setTab("past")} className={buttonClass("past")}>
          Past Members
        </button>
      </div>

      <div className="max-w-7xl mx-auto">
        {tab === "active" ? (
          <>
            <h3 className="text-2xl font-semibold text-center text-blue-800 mb-6">
              Active Members
            </h3>
            {activeMembers.length === 0 ? (
              <p className="text-center text-gray-500">No active members available.</p>
            ) : (
              renderGroupedMembers(activeMembers)
            )}
          </>
        ) : (
          <>
            <h3 className="text-2xl font-semibold text-center text-blue-800 mb-6">
              Past Members
            </h3>
            {pastMembers.length === 0 ? (
              <p className="text-center text-gray-500">No past members available.</p>
            ) : (
              renderGroupedMembers(pastMembers)
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MemberList;

import React, { useState } from "react";
import { useGetAllMembers } from "../hooks/members/useGetAllMembers";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const MemberList = () => {
  const { members, loading } = useGetAllMembers();
  const [tab, setTab] = useState("active");

  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      onClick={() => {
        setSelectedMember(member);
        setIsModalOpen(true);
      }}
      className="cursor-pointer w-full max-w-xs p-6 backdrop-blur-sm bg-white/80 border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
    >
      {member.image && (
        <img
          src={member.image}
          alt={member.name}
          className="w-28 h-28 object-cover rounded-full border-4 border-blue-600 shadow mb-4 hover:scale-105 transition"
        />
      )}
      <h2 className="text-lg font-bold text-gray-800">{member.name}</h2>
      <p className="text-sm text-gray-600">{member.position}</p>
    </div>
  );

  const renderGroupedMembers = (membersArray) => {
    const grouped = {};
    membersArray.forEach((member) => {
      const committee = member.committee || "Others";
      if (!grouped[committee]) grouped[committee] = [];
      grouped[committee].push(member);
    });

    return Object.entries(grouped).map(([committeeName, membersInGroup]) => {
      // Filter Head and CoHead
      const headAndCoHead = membersInGroup
        .filter(
          (m) =>
            m.position?.toLowerCase() === "head" ||
            m.position?.toLowerCase() === "cohead"
        )
        .sort((a, b) => {
          const order = { head: 1, cohead: 2 };
          return (
            (order[a.position?.toLowerCase()] || 99) -
            (order[b.position?.toLowerCase()] || 99)
          );
        });

      // Filter Other Members
      const others = membersInGroup.filter(
        (m) =>
          m.position?.toLowerCase() !== "head" &&
          m.position?.toLowerCase() !== "cohead"
      );

      return (
        <div key={committeeName} className="mb-16">
          <h4 className="text-3xl font-semibold text-center text-blue-700 mb-4 border-b pb-2">
            {committeeName} Committee
          </h4>

          {headAndCoHead.length > 0 && (
            <>
              <h5 className="text-xl font-semibold text-center text-gray-700 mb-4">
                Head & Co-Head
              </h5>
              <div className="flex flex-wrap justify-center gap-6 mb-6">
                {headAndCoHead.map((member) => renderMemberCard(member))}
              </div>
            </>
          )}

          {others.length > 0 && (
            <>
              <h5 className="text-xl font-semibold text-center text-gray-700 mb-4">
                Team Members
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                {others.map((member) => renderMemberCard(member))}
              </div>
            </>
          )}
        </div>
      );
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-10">
      <h2 className="text-5xl md:text-4xl font-bold text-center text-blue-800 mb-8">
        Our Team Members
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
            <h3 className="text-2xl font-semibold text-center text-brown-800 mb-6">
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
            <h3 className="text-2xl font-semibold text-center text-brown-800 mb-6">
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

      {isModalOpen && selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md relative animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-3 text-gray-600 hover:text-red-500 text-xl font-bold"
            >
              ×
            </button>
            <div className="flex flex-col items-center text-center">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-32 h-32 rounded-full border-4 border-blue-600 shadow mb-4 object-cover"
              />
              <h2 className="text-xl font-bold text-gray-800 mb-1">
                {selectedMember.name}
              </h2>
              <p className="text-sm text-gray-500 mb-1">{selectedMember.position}</p>
              <p className="text-sm text-gray-400 mb-2">
                {selectedMember.committee} Committee
              </p>

              <div className="flex gap-4 text-xl mt-2 text-gray-700">
                {selectedMember.email && (
                   <a href={`mailto:${selectedMember.email}`}title={selectedMember.email}>
                    <MdEmail className="hover:text-blue-600" />
                  </a>
                )}
                {selectedMember.linkedin && (
                  <a
                    href={selectedMember.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="hover:text-blue-700" />
                  </a>
                )}
                {selectedMember.github && (
                  <a
                    href={selectedMember.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="hover:text-black" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MemberList;
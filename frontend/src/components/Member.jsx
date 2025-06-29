import React, { useState } from "react";
import { useGetAllMembers } from "../hooks/members/useGetAllMembers";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const MemberList = () => {
return(
    <div className="m-8 text-2xl h-[calc(100vh-20rem)]">
    Coming soon.......
  </div>
)
  // const { members, loading } = useGetAllMembers();
  // const [tab, setTab] = useState("active");

<<<<<<< HEAD
  if (loading)
    return <p className="text-center text-xl mt-10 text-blue-700">Loading members...</p>;
=======
  // if (loading)
  //   return <p className="text-center text-xl mt-10">Loading members...</p>;
>>>>>>> 9f14f450690327e7cbdd53d23bbc8a89fe75a904

  // const activeMembers = members
  //   .filter((member) => member.isActive)
  //   .sort((a, b) => a.rollNo.localeCompare(b.rollNo));

  // const pastMembers = members
  //   .filter((member) => !member.isActive)
  //   .sort((a, b) => a.rollNo.localeCompare(b.rollNo));

<<<<<<< HEAD
  const buttonClass = (value) =>
    `px-6 py-2 font-semibold rounded-full transition duration-300 ${
      tab === value
        ? "bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-md"
        : "bg-blue-100 text-blue-900 hover:bg-blue-200"
    }`;

  const renderMemberCard = (member) => (
    <div
      key={member._id}
      className="p-6 bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center text-center"
    >
      {member.image && (
        <img
          src={member.image}
          alt={member.name}
          className="w-28 h-28 object-cover rounded-full border-4 border-blue-500 shadow mb-4"
        />
      )}
      <h3 className="text-lg font-bold text-blue-800">
        {member.name} ({member.rollNo})
      </h3>
      <p className="text-sm text-gray-700 mt-1">
        {member.branch} - Sec {member.sec}
      </p>
      <p className="text-sm text-gray-600">
        {member.committee} | {member.position}
      </p>
      <p className="text-sm mt-1 text-gray-700">📧 {member.email}</p>
      <p className="text-sm text-gray-700">📞 {member.contactNo}</p>
      <div className="flex gap-4 mt-3">
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 text-xl"
          >
            <FaLinkedin />
          </a>
        )}
        {member.github && (
          <a
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black text-xl"
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
      <div key={committeeName} className="mb-10">
        <h4 className="text-xl font-bold text-blue-700 mb-4 border-b pb-2 text-center">
          {committeeName} Community
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {membersInGroup.map((member) => renderMemberCard(member))}
        </div>
      </div>
    ));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-10">
      <h2 className="text-4xl font-extrabold text-center mb-8 text-blue-800 drop-shadow">
        Our Members
      </h2>
      <div className="flex justify-center gap-4 mb-10">
        <button
          onClick={() => setTab("active")}
          className={buttonClass("active")}
        >
          Active Members
        </button>
        <button
          onClick={() => setTab("past")}
          className={buttonClass("past")}
        >
          Past Members
        </button>
      </div>
      <div className="max-w-7xl mx-auto">
        {tab === "active" && (
          <>
            <h3 className="text-2xl font-semibold text-center text-blue-800 mb-6">
              Active Members
            </h3>
            {activeMembers.length === 0 ? (
              <p className="text-center text-gray-500">
                No active members available.
              </p>
            ) : (
              renderGroupedMembers(activeMembers)
            )}
          </>
        )}

        {tab === "past" && (
          <>
            <h3 className="text-2xl font-semibold text-center text-blue-800 mb-6">
              Past Members
            </h3>
            {pastMembers.length === 0 ? (
              <p className="text-center text-gray-500">
                No past members available.
              </p>
            ) : (
              renderGroupedMembers(pastMembers)
            )}
          </>
        )}
      </div>
    </div>
  );
=======
  // const buttonClass = (value) =>
  //   `px-4 py-2 rounded-xl ${
  //     tab === value ? "bg-green-500 text-white" : "bg-green-300"
  //   }`;

  // const renderMemberCard = (member) => (
  //   <div
  //     key={member._id}
  //     className="p-4 border rounded-xl shadow flex flex-col items-center text-center"
  //   >
  //     {member.image && (
  //       <img
  //         src={member.image}
  //         alt={member.name}
  //         className="w-32 h-32 object-cover rounded-full mb-4"
  //       />
  //     )}
  //     <p className="text-xl font-semibold">
  //       {member.name} ({member.rollNo})
  //     </p>
  //     <p className="text-gray-600">
  //       Section: {member.sec} | Branch: {member.branch}
  //     </p>
  //     <p>Committee: {member.committee}</p>
  //     <p>Position: {member.position}</p>
  //     <p>Email: {member.email}</p>
  //     <p>Contact: {member.contactNo}</p>
  //     <div className="flex gap-4 mt-2">
  //       {member.linkedin && (
  //         <a
  //           href={member.linkedin}
  //           className="text-blue-600"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           LinkedIn
  //         </a>
  //       )}
  //       {member.github && (
  //         <a
  //           href={member.github}
  //           className="text-blue-600"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           GitHub
  //         </a>
  //       )}
  //     </div>
  //   </div>
  // );

  // return (
  //   <div className="p-4">
  //     <h2 className="text-3xl font-bold mb-6 text-center">Our Members</h2>

  //     {/* Tabs */}
  //     <div className="flex justify-center gap-4 mb-8">
  //       <button
  //         onClick={() => setTab("active")}
  //         className={buttonClass("active")}
  //       >
  //         Active Members
  //       </button>
  //       <button onClick={() => setTab("past")} className={buttonClass("past")}>
  //         Past Members
  //       </button>
  //     </div>

  //     {/* Members List */}
  //     {tab === "active" && (
  //       <div>
  //         <h3 className="text-2xl font-semibold mb-4 text-center">
  //           Active Members
  //         </h3>
  //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  //           {activeMembers.length === 0 && <p>No active members available.</p>}
  //           {activeMembers.map((member) => renderMemberCard(member))}
  //         </div>
  //       </div>
  //     )}

  //     {tab === "past" && (
  //       <div>
  //         <h3 className="text-2xl font-semibold mb-4 text-center">
  //           Past Members
  //         </h3>
  //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  //           {pastMembers.length === 0 && <p>No past members available.</p>}
  //           {pastMembers.map((member) => renderMemberCard(member))}
  //         </div>
  //       </div>
  //     )}
  //   </div>
  // );
>>>>>>> 9f14f450690327e7cbdd53d23bbc8a89fe75a904
};

export default MemberList;

import React, { useState } from "react";
import { useGetAllMembers } from "../hooks/members/useGetAllMembers";

const MemberList = () => {
return(
    <div className="m-8 text-2xl h-[calc(100vh-20rem)]">
    Coming soon.......
  </div>
)
  // const { members, loading } = useGetAllMembers();
  // const [tab, setTab] = useState("active");

  // if (loading)
  //   return <p className="text-center text-xl mt-10">Loading members...</p>;

  // const activeMembers = members
  //   .filter((member) => member.isActive)
  //   .sort((a, b) => a.rollNo.localeCompare(b.rollNo));

  // const pastMembers = members
  //   .filter((member) => !member.isActive)
  //   .sort((a, b) => a.rollNo.localeCompare(b.rollNo));

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
};

export default MemberList;

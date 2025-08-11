import React, { useState } from "react";
import { FaEdit, FaTrash, FaCheck, FaTimes } from "react-icons/fa";
import { useGetAllMembers } from "../../../hooks/members/useGetAllMembers";
import { useCreateMember } from "../../../hooks/members/useCreateMember";
import { useUpdateOrDeleteMember } from "../../../hooks/members/useUpdateOrDeleteMember";
import { useToggleMemberStatus } from "../../../hooks/members/useToggleMemberStatus";

const AdminMemberDashboard = ({ onSuccess }) => {
  const { members, refetchMembers } = useGetAllMembers();
  const { createMember } = useCreateMember();
  const { updateMember, deleteMember } = useUpdateOrDeleteMember();
  const { toggleStatus } = useToggleMemberStatus();

  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    sec: "",
    branch: "",
    committee: "",
    position: "Member",
    contactNo: "",
    email: "",
    linkedin: "",
    github: "",
  });

  const [editId, setEditId] = useState(null);
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleCreateOrUpdate = async (e) => {
    e.preventDefault();

    if (!file && !editId) {
      alert("Image is required for creating a new member");
      return;
    }

    try {
      const form = new FormData();
      for (const key in formData) {
        form.append(key, formData[key]);
      }
      if (file) {
        form.append("image", file);
      }

      if (editId) {
        await updateMember(editId, form);
      } else {
        await createMember(form);
      }

      setFormData({
        name: "",
        rollNo: "",
        sec: "",
        branch: "",
        committee: "",
        position: "Member",
        contactNo: "",
        email: "",
        linkedin: "",
        github: "",
      });
      setFile(null);
      setEditId(null);

      await refetchMembers();
      if (onSuccess) onSuccess();
    } catch (err) {
      console.error("Failed to save member", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteMember(id);
      await refetchMembers();
    } catch (err) {
      console.error("Failed to delete member", err);
    }
  };

  const handleToggleStatus = async (id) => {
    try {
      await toggleStatus(id);
      await refetchMembers();
    } catch (err) {
      console.error("Failed to toggle status", err);
    }
  };

  const handleEdit = (member) => {
    setFormData({
      name: member.name,
      rollNo: member.rollNo,
      sec: member.sec,
      branch: member.branch,
      committee: member.committee,
      position: member.position,
      contactNo: member.contactNo,
      email: member.email,
      linkedin: member.linkedin,
      github: member.github,
    });
    setEditId(member._id);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-600 mb-6 border-b pb-2">
        Manage Members
      </h1>
      <form
        onSubmit={handleCreateOrUpdate}
        className="grid md:grid-cols-2 gap-4 bg-white p-6 rounded-xl shadow mb-10"
      >
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-orange-400" />
        <input type="text" name="rollNo" value={formData.rollNo} onChange={handleChange} placeholder="Roll No" required className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-orange-400" />
        <input type="text" name="sec" value={formData.sec} onChange={handleChange} placeholder="Section" required className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-orange-400" />
        <input type="text" name="branch" value={formData.branch} onChange={handleChange} placeholder="Branch" required className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-orange-400" />

        <select name="committee" value={formData.committee} onChange={handleChange} required className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-orange-400">
          <option value="">Select Committee</option>
          <option value="AI/ML & Cloud">AI/ML & Cloud</option>
          <option value="Cybersecurity">Cybersecurity</option>
          <option value="Technical">Technical</option>
          <option value="Co-Founders">Co-Founders</option>
          <option value="DSA & CP">DSA & CP</option>
          <option value="Web Development">Web Development</option>
          <option value="Social Media">Social Media</option>
        </select>

        {/* 🔄 Updated Positions Dropdown */}
        <select name="position" value={formData.position} onChange={handleChange} className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-orange-400">
          <option value="Head">Head</option>
          <option value="CoHead">CoHead</option>
          <option value="Member">Member</option>
        </select>

        <input type="text" name="contactNo" value={formData.contactNo} onChange={handleChange} placeholder="Contact No" required className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-orange-400" />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-orange-400" />
        <input type="text" name="linkedin" value={formData.linkedin} onChange={handleChange} placeholder="LinkedIn URL" required className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-orange-400" />
        <input type="text" name="github" value={formData.github} onChange={handleChange} placeholder="GitHub URL" required className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-orange-400" />
        <input type="file" accept="image/*" onChange={handleFileChange} required className="w-full p-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-orange-400" />

        <div className="col-span-2 text-right">
          <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded shadow">
            {editId ? "Update Member" : "Add Member"}
          </button>
        </div>
      </form>

      {/* Member List */}
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">All Members</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member) => (
          <div key={member._id} className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="flex flex-col items-center text-center">
              {member.image && <img src={member.image} alt={member.name} className="w-24 h-24 object-cover rounded-full mb-3" />}
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.rollNo}</p>
              <p className="text-sm">{member.committee}</p>
              <p className="text-sm font-medium">
                <span
                  className={`inline-block px-2 py-1 text-xs rounded-full ${
                    member.position === "Incharge"
                      ? "bg-purple-100 text-purple-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {member.position}
                </span>
              </p>
              <p className="mt-2 text-xs text-gray-600">
                Status:{" "}
                <span className={`font-semibold ${member.isActive ? "text-green-600" : "text-red-600"}`}>
                  {member.isActive ? "Active" : "Inactive"}
                </span>
              </p>
            </div>

            <div className="mt-4 flex justify-center gap-2">
              <button
                onClick={() => handleToggleStatus(member._id)}
                className={`text-white p-2 rounded-full ${member.isActive ? "bg-red-500" : "bg-green-500"}`}
                title={member.isActive ? "Deactivate" : "Activate"}
              >
                {member.isActive ? <FaTimes /> : <FaCheck />}
              </button>
              <button onClick={() => handleEdit(member)} className="bg-yellow-500 text-white p-2 rounded-full" title="Edit">
                <FaEdit />
              </button>
              <button onClick={() => handleDelete(member._id)} className="bg-red-600 text-white p-2 rounded-full" title="Delete">
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminMemberDashboard;

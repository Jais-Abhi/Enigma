import React, { useState } from "react";
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

      form.append("name", formData.name);
      form.append("rollNo", formData.rollNo);
      form.append("sec", formData.sec);
      form.append("branch", formData.branch);
      form.append("committee", formData.committee);
      form.append("position", formData.position);
      form.append("contactNo", formData.contactNo);
      form.append("email", formData.email);
      form.append("linkedin", formData.linkedin);
      form.append("github", formData.github);

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
    <div className="p-4">
      {/* Member Form */}
      <form onSubmit={handleCreateOrUpdate} className="space-y-4 mb-8">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
          className="border p-2 w-full"
        />
        <input
          type="text"
          name="rollNo"
          value={formData.rollNo}
          onChange={handleChange}
          placeholder="Roll No"
          required
          className="border p-2 w-full"
        />
        <input
          type="text"
          name="sec"
          value={formData.sec}
          onChange={handleChange}
          placeholder="Section"
          required
          className="border p-2 w-full"
        />
        <input
          type="text"
          name="branch"
          value={formData.branch}
          onChange={handleChange}
          placeholder="Branch"
          required
          className="border p-2 w-full"
        />
        <select
          name="committee"
          value={formData.committee}
          onChange={handleChange}
          required
          className="border p-2 w-full"
        >
          <option value="">Select Committee</option>
          <option value="AI/ML & Cloud">AI/ML & Cloud</option>
          <option value="Cybersecurity">Cybersecurity</option>
          <option value="Technical">Technical</option>
          <option value="Knowledge & Collaboration Hub">
            Knowledge & Collaboration Hub
          </option>
          <option value="DSA & CP">DSA & CP</option>
          <option value="Web Development">Web Development</option>
          <option value="Social Media">Social Media</option>
        </select>
        <select
          name="position"
          value={formData.position}
          onChange={handleChange}
          className="border p-2 w-full"
        >
          <option value="Member">Member</option>
          <option value="Incharge">Incharge</option>
        </select>
        <input
          type="text"
          name="contactNo"
          value={formData.contactNo}
          onChange={handleChange}
          placeholder="Contact No"
          required
          className="border p-2 w-full"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="border p-2 w-full"
        />
        <input
          type="text"
          name="linkedin"
          value={formData.linkedin}
          onChange={handleChange}
          placeholder="LinkedIn"
          className="border p-2 w-full"
        />
        <input
          type="text"
          name="github"
          value={formData.github}
          onChange={handleChange}
          placeholder="GitHub"
          className="border p-2 w-full"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="border p-2 w-full"
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          {editId ? "Update Member" : "Add Member"}
        </button>
      </form>

      {/* Member List */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">All Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {members.map((member) => (
            <div
              key={member._id}
              className="p-4 border rounded shadow flex justify-between items-center"
            >
              <div>
                {member.image && (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 object-cover rounded-full mb-2"
                  />
                )}
                <p>
                  <strong>{member.name}</strong> ({member.rollNo})
                </p>
                <p>Committee: {member.committee}</p>
                <p>Position: {member.position}</p>
                <p>Status: {member.isActive ? "Active" : "Inactive"}</p>
              </div>
              <div className="flex gap-2 flex-col">
                <button
                  onClick={() => handleToggleStatus(member._id)}
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                >
                  {member.isActive ? "Deactivate" : "Activate"}
                </button>
                <button
                  onClick={() => handleEdit(member)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(member._id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminMemberDashboard;

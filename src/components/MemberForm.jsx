import { useState } from "react";
import { createMember } from "../services/memberApi";

export default function MemberForm({ onAdd }) {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [position, setPosition] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newMember = { name, lastname, position };

    try {
      await createMember(newMember);

      setName("");
      setLastname("");
      setPosition("");

      if (onAdd) onAdd(); // แจ้ง parent (AdminView) ให้ reload ตาราง
    } catch (error) {
      console.error("Error creating member:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10">
      <div className="mb-4">
        <label className="block font-bold mb-1">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border px-3 py-2 w-full"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-1">Last Name</label>
        <input
          type="text"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          className="border px-3 py-2 w-full"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block font-bold mb-1">Position</label>
        <input
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="border px-3 py-2 w-full"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        Add Member
      </button>
    </form>
  );
}
import { useEffect, useState } from "react";
import { getMembers } from "../services/memberApi";

export default function MemberTable({ isAdmin, reloadTrigger, latestID }) {
  const [members, setMembers] = useState([]);   // สร้าง state

  const fetchMembers = async () => {
    try {
      const res = await getMembers();           // ดึงข้อมูลจาก API , get response object from API
    
      const sorted = [...res.data].sort((a, b) =>
      a.name.localeCompare(b.name));
      
      setMembers(sorted); // อัปเดต state ด้วยข้อมูลที่เรียงแล้ว

    } catch (error) {
      console.error("Error fetching members:", error);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, [reloadTrigger]); // โหลดใหม่ทุกครั้งที่ reloadTrigger เปลี่ยน

  return (
    <div className="flex justify-center text-amber-950 font-bold mt-10">
      <table className="border border-gray-500 border-collapse">
        <thead>
          <tr className="bg-gray-300">
            <th className="border border-gray-500 px-4 py-2">Name</th>
            <th className="border border-gray-500 px-4 py-2">Last Name</th>
            <th className="border border-gray-500 px-4 py-2">Position</th>
            {isAdmin && <th className="border border-gray-500 px-4 py-2">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {members.map((m) => (
            <tr key={m.id}>
              <td className="border border-gray-500 px-4 py-2">{m.name}</td>
              <td className="border border-gray-500 px-4 py-2">{m.lastname}</td>
              <td className="border border-gray-500 px-4 py-2">{m.position}</td>
              {isAdmin && (
                <td className="border border-gray-500 px-4 py-2">
                  <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
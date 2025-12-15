import { useState } from "react";
import ViewToggleButton from "../components/ViewToggleButton";
import MemberForm from "../components/MemberForm";
import MemberTable from "../components/MemberTable";

export default function AdminView() {
  const [reloadTrigger, setReloadTrigger] = useState(0); // ใช้เป็นตัวกระตุ้น reload

  const handleAddMember = () => {
    setReloadTrigger((prev) => prev + 1); // เปลี่ยนค่าเพื่อ trigger useEffect ใน MemberTable

  };

  return (
    <div className="p-20">
      <h1 className="text-center text-4xl font-bold">Generation Thailand</h1>
      <h1 className="text-center text-4xl font-bold">Home - Administrator View</h1>

      <div className="flex justify-center gap-10 my-8">
        <ViewToggleButton to="/user" label="User Home View" />
        <ViewToggleButton to="/admin" label="🛠️Admin Home View" />
      </div>

      <MemberForm onAdd={handleAddMember} />
      <MemberTable isAdmin={true} reloadTrigger={reloadTrigger} />
    </div>
  );
}

import ViewToggleButton from "./ViewToggleButton";
import { useState } from "react";
import AdminView from "./views/AdminView";
import UserView from "./views/UserView";


export default function ButtonHomeView() {
  const [view, setView] = useState("");

  return (
    <div className="pb-80 py-10 gap-y-4 flex flex-col justify-center items-center min-h-screen bg-gray-800 text-white">
      <div className="flex gap-x-4 mb-8">
        <ViewToggleButton
          onClick={() => {
            setView("adminview");
          }}
        >
          User Home View
        </ViewToggleButton>
        <ViewToggleButton
          onClick={() => {
            setView("userview");
          }}
        >
          Admin Home View
        </ViewToggleButton>
      </div>

      {view === "adminview" && <AdminView />}
      {view === "userview" && <UserView />}
    
    </div>
  );
}




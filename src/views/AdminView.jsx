import ViewToggleButton from "../components/ViewToggleButton";

export default function AdminView() {

return (
    <div className="p-20">
      <h1 className="text-center text-4x font-bold">Generation Thailand</h1>
      <h1 className="text-center text-4x font-bold">Home-Admin View</h1>

      <div className="flex justify-center gap-50"
      >
        <ViewToggleButton to="/user" label="User Home View"/>
        <ViewToggleButton to="/admin" label="Admin Home View"/>
      </div>
    </div>
  );
}

import ViewToggleButton from "../components/ViewToggleButton";

export default function UserView() {
  return (
    <div className="p-20">
      <h1 className="text-center text-4xl font-bold">Generation Thailand</h1>
      <h1 className="text-center text-4xl font-bold">Home-User View</h1>

      <div className="flex justify-center gap-10 my-8">
        <ViewToggleButton to="/user" label="User Home View" />
        <ViewToggleButton to="/admin" label="Admin Home View" />
      </div>

      <div className="flex justify-center text-amber-950 font-bold mt-10">
        <table className="border border-gray-500 border-collapse">
          <thead>
            <tr className="bg-gray-300">
              <th className="border border-gray-500 px-4 py-2">Name</th>
              <th className="border border-gray-500 px-4 py-2">Last Name</th>
              <th className="border border-gray-500 px-4 py-2">Position</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-500 px-4 py-2">John</td>
              <td className="border border-gray-500 px-4 py-2">Doe</td>
              <td className="border border-gray-500 px-4 py-2">Developer</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

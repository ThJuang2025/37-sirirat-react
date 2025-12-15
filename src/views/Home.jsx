import ViewToggleButton from "../components/ViewToggleButton";

export default function Home() {

return (
    <div className="p-20">
      <h1 className="text-center text-4xl font-bold">Generation Thailand</h1>
      <h1 className="text-center text-4xl font-bold">React-Accessment</h1>

      <div className="flex justify-center gap-10 my-8">
        <ViewToggleButton to="/user" label="User Home View" />
        <ViewToggleButton to="/admin" label="🛠️Admin Home View" />
      </div>
    </div>
  );
}



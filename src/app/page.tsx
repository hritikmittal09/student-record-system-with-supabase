import Sidebar from "./components/SideBar";
import StudentTable from "./components/Table";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <StudentTable />
      </div>
    </div>
  );
}

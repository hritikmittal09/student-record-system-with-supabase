import Sidebar from "./components/SideBar";
import StudentTable from "./components/Table";
import NavBar from "./components/NavBar"

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <NavBar/>
        
        <StudentTable />
      </div>
    </div>
  );
}

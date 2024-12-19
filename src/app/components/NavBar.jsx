import helpIcon from "../../../public/help.png"
import bellIcon from "../../../public/bell.png"
import messageIcon from "../../../public/message.png"
import connectIcon from "../../../public/connect.png"
import profileIcon from "../../../public/profile.png"

import Image from "next/image";
const CourseSearchNav = () => {
    return (
      <div className="w-full h-16 bg-white shadow-md flex items-center justify-between px-6">
        {/* Search Section */}
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search your course"
            className="border rounded-md px-4 py-2 w-[300px] focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
  
          {/* Dropdowns */}
          <select
            className="border rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            defaultValue="AY 2024-25"
          >
            <option value="AY 2024-25">AY 2024-25</option>
            <option value="AY 2023-24">AY 2023-24</option>
          </select>
  
          <select
            className="border rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            defaultValue="CBSE 9"
          >
            <option value="CBSE 9">CBSE 9</option>
            <option value="CBSE 10">CBSE 10</option>
            <option value="CBSE 11">CBSE 11</option>
          </select>
        </div>
        <div className=" flex gap-5">
            <div>
                <Image alt="" src={helpIcon} width={20} height={20}/>   
            </div>
            <div>
            <Image alt="" src={messageIcon} width={20} height={20}/>
            </div>
            <div>
            <Image alt="" src={connectIcon} width={20} height={20}/>
            </div>
            <div>
            <Image alt="" src={bellIcon} width={20} height={20}/>
            </div>

        </div>
  
        {/* Profile Section */}
        <div className="flex items-center gap-2">
  <span className="text-sm font-medium text-gray-700">Adeline H. Dancy</span>
  <div className="w-8 h-8 rounded-full bg-orange-400 flex items-center justify-center">
    <Image
      className="bg-center"
      src={profileIcon}
      height={20}
      width={20}
      alt="Profile Icon"
    />
  </div>
</div>
      </div>
    );
  };
  
  export default CourseSearchNav;
  
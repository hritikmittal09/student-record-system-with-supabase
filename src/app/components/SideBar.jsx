"use client";

import { useState } from "react";
import Image from "next/image";

import logo from "../../../public/logo.png";
import DashLogo from "../../../public/dash.png";
import chapterLogo from "../../../public/chapter.png";
import studentLogo from "../../../public/student.png";
import helpLogo from "../../../public/help.png";
import reportLogo from "../../../public/Report.png";
import settingsLogo from "../../../public/settings.png";

const Sidebar = () => {
  const [selected, setSelected] = useState("Students"); // Default selected menu item

  // Menu items array
  const menuItems = [
    { name: "Dashboard", logo: DashLogo },
    { name: "Students", logo: studentLogo },
    { name: "Chapter", logo: chapterLogo },
    { name: "Help", logo: helpLogo },
    { name: "Reports", logo: reportLogo },
    { name: "Settings", logo: settingsLogo },
  ];

  return (
    <div className="w-64 bg-white border-r min-h-screen px-4 py-8 shadow-sm">
      {/* Logo Section */}
      <div className="flex justify-center mb-8">
        <Image src={logo} alt="Logo" width={60} height={80} />
      </div>

      {/* Menu Items */}
      <div className="space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setSelected(item.name)}
            className={`w-full flex items-center gap-4 px-4 py-2 rounded-md transition-all duration-200 ${
              selected === item.name
                ? "bg-gray-100 text-black font-bold"
                : "text-gray-600 hover:bg-gray-50 hover:text-black"
            }`}
          >
            <Image src={item.logo} alt={`${item.name} Icon`} width={20} height={20} />
            <span>{item.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

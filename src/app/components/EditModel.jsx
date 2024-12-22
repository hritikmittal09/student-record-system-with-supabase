"use client";

import React, { useEffect, useState } from "react";
import useStudentStore from "@/store/store";
import axios from "axios";

const EditModel = ({ isOpen, onClose, onSave, initialName ,id}) => {
    const fetchStudents = useStudentStore((state) => state.fetchStudents);

  const [name, setName] = useState(initialName || "");

  useEffect(() => {
    // Sync name state with initialName whenever it changes
    setName(initialName || "");
    //console.log("Updated initialName:", initialName);
    //console.log("studentid",id);
    
  }, [initialName]);
  const handleSave =async () => {
    console.log(name);
    //onSave(name); // Save the updated name
    let url = "api/EditApi"
    let body ={
        id: id,
        name: name,
    }
   const res = await axios.put(url,body);
   console.log(res);
   fetchStudents()
   
    
    onClose(); // Close the modal after saving
  };

  return (
    <div>
      {/* Conditional rendering inside JSX */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md relative">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>

            <h2 className="text-xl font-semibold mb-4">Edit Student Name</h2>

            {/* Input Field */}
            <div className="mb-4">
              
              <span  className=" text-black font-bold"> * you can only name of student in a record </span>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Student Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter student name"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end">
              <button
                onClick={handleSave}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mr-2"
              >
                Save
              </button>
              <button
                onClick={onClose}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditModel;

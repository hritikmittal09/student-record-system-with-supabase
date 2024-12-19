"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";



const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [err, seterr] =useState(false)

  // Data fields
  const [formData, setFormData] = useState({
    name: "",
    cohort: "",
    batch: "",
    sub: "",
    date: "",
    last: "",
    status: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
     try {
      const url = 'api/records'
      const res = await axios.post(url,formData)
      console.log(res);
      setIsOpen(false)
      
     } catch (error) {
      
      seterr(true)
     }
    useEffect(()=>{
      seterr(false)

    },[])
    
  
    console.log('Form Data:', formData);
  
    
  };
  

  // Handle form changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* Button to trigger the modal */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-gray-200 rounded"
      >
       + Add Student
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Add New Student</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            {/* Modal Form */}
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter student name"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Cohort
                </label>
                <input
                  type="text"
                  name="cohort"
                  value={formData.cohort}
                  onChange={handleChange}
                  placeholder="e.g., AY 2024-25"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Batch
                </label>
                <input
                  type="text"
                  name="batch"
                  value={formData.batch}
                  onChange={handleChange}
                  placeholder="e.g., Class 9 Science"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="sub"
                  value={formData.sub}
                  onChange={handleChange}
                  placeholder="e.g., Class 9 Math"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Date Joined
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Last Login
                </label>
                <input
                  type="date"
                  name="last"
                  value={formData.last}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Status
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="">Select status</option>
                  <option value="green">Green</option>
                  <option value="red">Red</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
              onClick={handleSubmit}
                type="submit"
                className="px-4 py-2 bg-gray-200 rounded"
              >
                Add Student
              </button>
              {err ==true && <span className="  text-red-700 text-center"> # fill all details </span>}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;

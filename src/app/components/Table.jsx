"use client"
import { useState, useEffect } from "react";
import AddModel from "./Model"
//import { supabase } from "@/supabase/apis";
import axios from "axios";


const StudentTable = () => {
  const [open,setOpen] =useState(false)  
  const [data,setdata] =useState([])


   const fetch = async ()=>{
    const url = 'api/records'
    
     try {
      const res = await axios.get(url)

      setdata(res.data)
     } catch (error) {
      console.log(error);
      
      
     }


  }

  useEffect(()=>{
  
  fetch()
},[])



  const students = [
      { Name: "Anshuman Kashyap", cohort: "AY 2024-25",batch : "class 9 science",sub : "class 9 math ", date :"12 nov 2023",last : "12 nov 2023", status: "green" },
      ...data
      // Add other student data here
    ];
  
    return (
      <div className="p-6">
        
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-semibold">Students</h2>
          
          
          <AddModel/>
          
        </div>
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b text-left text-sm text-gray-500">
              <th className="p-2">Student Name</th>
              <th className="p-2">Cohort</th>
              <th className="p-2">Courses</th>
              <th className="p-2"></th>

              <th className="p-2">Date Joined</th>
              <th className="p-2">last login</th>

              
              <th className="p-2">Status</th>
              

            </tr>
          </thead>
          <tbody>
            {students.map((student, idx) => (
              <tr key={idx} className="border-b">
                <td className="p-2">{student.Name}</td>
                <td className="p-2">{student.cohort}</td>
                <td className="p-2">{student.batch}</td>
                <td className="p-2">{student.sub}</td>
                <td className="p-2">{student.last}</td>
                <td className="p-2">{student.date}</td>
                

                <td className="p-2">
                  <span
                    className={`h-3 w-3 rounded-full inline-block ${
                      student.online == true ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  export default StudentTable;
  
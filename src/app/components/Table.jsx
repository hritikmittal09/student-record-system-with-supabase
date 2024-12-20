"use client"
import { useState, useEffect } from "react";
import AddModel from "./Model"
import { MdOutlineDeleteOutline } from "react-icons/md";
//import { supabase } from "@/supabase/apis";
import axios from "axios";
import useStudentStore from "@/store/store";



const StudentTable = () => {
  const [open,setOpen] =useState(false)  
  const [data,setdata] =useState([])


   

  const students = useStudentStore((state) => state.students);
  const fetchStudents = useStudentStore((state) => state.fetchStudents);

  useEffect(()=>{
  
  fetchStudents()
},[fetchStudents])


const handlDelete = async(id)=>{
  console.log(id);
  try {
    let url = `api/deleteRecord?id=${id}`
    const res = await axios.delete(url)
    console.log(res);
   await fetchStudents()
    
  } catch (error) {
    console.log(error);
    
    

    
  }

}



 
  
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
              <th className="p-2">Action</th>
              

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
                <td role="button" onClick={()=>{handlDelete(student.id)}}>{<MdOutlineDeleteOutline className=" text-2xl"/>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  export default StudentTable;
  
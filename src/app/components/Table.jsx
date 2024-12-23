"use client"
import { useState, useEffect } from "react";
import AddModel from "./Model"
import { MdOutlineDeleteOutline } from "react-icons/md";
//import { supabase } from "@/supabase/apis";
import axios from "axios";
import useStudentStore from "@/store/store";
import Image from "next/image";
import course from "../../../public/courseTable.png"
import batch from "../../../public/batchTable.png"
import { MdOutlineModeEdit } from "react-icons/md";
import EditModel from "./EditModel"




const StudentTable = () => {
  const [open,setOpen] =useState(false)  
  const [Name,setName] =useState('')
  const [studentid ,setstudentid] =useState(null)


   

  const students = useStudentStore((state) => state.students);
  const fetchStudents = useStudentStore((state) => state.fetchStudents);
  const deleteStudent = useStudentStore((state) => state.deleteStudent);
  const search = useStudentStore((state) => state.searchQuery);
  const searchResults = useStudentStore((state) => state.filteredStudents)



  useEffect(()=>{
  
  fetchStudents()
},[fetchStudents])



useEffect(()=>{
searchResults()
},[search])


const handlDelete = async(id)=>{
  console.log(id);
  try {
    await deleteStudent(id)
    //console.log(res);
   await fetchStudents()
    
  } catch (error) {
    console.log(error);
       
  }

} 
const handleEdit =async(id,initialName)=>{
  console.log(id);
  setOpen(true)
  setName(initialName)
  console.log(Name);
  setstudentid(id)
  
  
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
            {[...searchResults()].map((student, idx) => (
              <tr key={idx} className="border-b">
                <td className="p-2">{student.Name}</td>
                <td className="p-2">{student.cohort}</td>
                <td className="p-2"><Image alt="" src={course}  width={20} height={20} className=" m-2 inline"/> {student.batch}</td>
                <td className="p-2"> <Image alt="" src={batch}  width={20} height={20} className=" m-2 inline"/>{student.sub}</td>
                <td className="p-2">{student.last}</td>
                <td className="p-2">{student.date}</td>
                

                <td className="p-2">
                  <span
                    className={`h-3 w-3 rounded-full inline-block ${
                      student.online == true ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></span>
                </td>
                <td  >{<MdOutlineDeleteOutline onClick={()=>{handlDelete(student.id)}}role="button" className=" text-2xl"/>}


                  {<MdOutlineModeEdit  onClick={()=>handleEdit(student.id,student.Name)}  role="button" className=" text-2xl"/>}

                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <EditModel onClose={()=>setOpen(false)} isOpen = {open}  initialName = {Name} id={studentid}/>
        
      </div>
    );
  };
  export default StudentTable;
  
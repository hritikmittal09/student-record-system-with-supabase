const StudentTable = () => {
    const students = [
      { name: "Anshuman Kashyap", cohort: "AY 2024-25", status: "green" },
      // Add other student data here
    ];
  
    return (
      <div className="p-6">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-semibold">Students</h2>
          <button className="px-4 py-2 bg-gray-200 rounded">+ Add Student</button>
        </div>
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b text-left text-sm text-gray-500">
              <th className="p-2">Student Name</th>
              <th className="p-2">Cohort</th>
              <th className="p-2">Courses</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, idx) => (
              <tr key={idx} className="border-b">
                <td className="p-2">{student.name}</td>
                <td className="p-2">{student.cohort}</td>
                <td className="p-2">CBSE 9 Math</td>
                <td className="p-2">
                  <span
                    className={`h-3 w-3 rounded-full inline-block ${
                      student.status === "green" ? "bg-green-500" : "bg-red-500"
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
  
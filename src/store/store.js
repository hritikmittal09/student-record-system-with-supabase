import { create } from 'zustand';
import axios from 'axios';

const useStudentStore = create((set ,get) => ({
  students: [],
  searchQuery : "", // Initial state
  fetchStudents: async () => {
    try {
      const res = await axios.get('/api/records');
      set({ students: res.data }); // Update Zustand store with fetched data
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  },
  deleteStudent: async (id) => {
    try {
      console.log(`Deleting student with id: ${id}`);
      const url = `/api/deleteRecord?id=${id}`;
      const res = await axios.delete(url);

      if (res.status === 200) {
        console.log('Student deleted successfully:', res.data);
        // Refresh the student list
      } else {
        console.error('Failed to delete student:', res.data);
      }
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  },
  setSearchQuery: (query) => {
    set({ searchQuery: query });
  },
  filteredStudents: () => {
    const { students, searchQuery } = get();
    console.log("Filtering with query:", searchQuery);

    if (!searchQuery) return students; // Return all if no query
    return students.filter((student) =>
      student.Name?.toLowerCase().includes(searchQuery.toLowerCase())
    );
   
  },
  
}));

export default useStudentStore;

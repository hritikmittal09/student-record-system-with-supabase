import { create } from 'zustand';
import axios from 'axios';

const useStudentStore = create((set) => ({
  students: [], // Initial state
  fetchStudents: async () => {
    try {
      const res = await axios.get('/api/records');
      set({ students: res.data }); // Update Zustand store with fetched data
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  },
  
}));

export default useStudentStore;

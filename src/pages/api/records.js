import { log } from 'console';
import supabaseClient from '../../supabase/apis'; // Adjust the path as needed

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Query Supabase
      const { data, error } = await supabaseClient.from('students record').select('*');

      if (error) {
        console.error('Error fetching records:', error.message);
        return res.status(500).json({ error: 'Failed to fetch records' });
      }

      
      
      // Return fetched data
      return res.status(200).json(data);
    } catch (err) {
      console.error('Unexpected error:', err.message);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    // Handle unsupported HTTP methods
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}

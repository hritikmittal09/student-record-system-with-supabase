
import supabaseClient from "../../supabase/apis" // Adjust the path as needed

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Query Supabase
      const { data, error } = await supabaseClient.from('students record').select('*');

      if (error) {
        console.error('Error fetching records:', error.message);
        return res.status(500).json({ error: 'Failed to fetch records' });
      }
      //console.log(data);
      

      
      
      // Return fetched data
      return res.status(200).json(data);
    } catch (err) {
      console.error('Unexpected error:', err.message);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }  if (req.method === 'POST') {
    const { name, cohort, batch, sub, date, last, status } = req.body;
    const record = {
      Name: name, // Match Supabase's column names
      cohort,
      batch,
      sub,
      date,
      last,
      Courses : batch,
      online :status==="green"? true: false
    };
   // console.log(record);
    
    
    

    try {
      // Insert the new record into the Supabase table
      const { data, error } = await supabaseClient
        .from('students record')
        .insert([record]);

      if (error) {
        console.error('Error inserting record:', error.message);
        return res.status(500).json({ error: 'Failed to insert record' });
      }

      // Return the inserted data
      return res.status(200).json({ message: 'Record inserted successfully', data });
    } catch (err) {
      console.error('Unexpected error:', err.message);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } 
}

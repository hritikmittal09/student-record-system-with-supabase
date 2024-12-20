import  supabase  from "../../supabase/apis"  // Adjust the path to your Supabase client

export default async function handler(req, res) {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ error: 'Method not allowed' }); // Handle unsupported methods
  }

  const { id } = req.query; // Get the `id` from the query parameters

  if (!id) {
    return res.status(400).json({ error: 'Missing ID parameter' });
  }

  try {
    // Perform deletion using Supabase
    const { error } = await supabase
      .from('students record') // Replace 'students' with your table name
      .delete()
      .eq('id', id);

    if (error) {
      return res.status(500).json({ error: 'Failed to delete record', details: error.message });
    }

    return res.status(200).json({ message: 'Record deleted successfully' });
  } catch (err) {
    return res.status(500).json({ error: 'Unexpected server error', details: err.message });
  }
}

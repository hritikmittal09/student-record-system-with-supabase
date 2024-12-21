import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://euvccgqgloqqbzucjnly.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1dmNjZ3FnbG9xcWJ6dWNqbmx5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczNDYwMjkxOSwiZXhwIjoyMDUwMTc4OTE5fQ.SrvM9lNlGWECRI_FvWFVDCA7Hra4xknpm676fWVVVnk"

 const supabase = createClient(supabaseUrl|| "", supabaseKey || "");
 export default supabase
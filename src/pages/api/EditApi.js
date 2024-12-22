import supabase from "./config"; // Adjust the path to your Supabase client

export default async function handler(req, res) {
  if (req.method !== "PUT") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { id, name } = req.body;

  if (!id || !name) {
    return res.status(400).json({ error: "Missing ID or name in request body" });
  }

  try {
    const { error } = await supabase
      .from("students record")
      .update({ Name : name })
      .eq("id", id);

    if (error) {
      return res.status(500).json({ error: "Failed to update record", details: error.message });
    }

    return res.status(200).json({ message: "Record updated successfully" });
  } catch (err) {
    return res.status(500).json({ error: "Unexpected server error", details: err.message });
  }
}

-- Create a table to track admin users
CREATE TABLE IF NOT EXISTS admins (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create a secure function to check if a user is an admin
CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM admins
    WHERE id = auth.uid()
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create a row level security policy for the contacts table
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Only admins can view contacts
CREATE POLICY "Admins can view contacts" ON contacts
  FOR SELECT USING (is_admin());

-- Only admins can update contacts
CREATE POLICY "Admins can update contacts" ON contacts
  FOR UPDATE USING (is_admin());

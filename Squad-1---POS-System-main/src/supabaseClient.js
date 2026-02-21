import { createClient } from "@supabase/supabase-js";

// Use this only if the .env method keeps failing
export const supabase = createClient(
  "https://vxwtibmxrhxuyujqzvze.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4d3RpYm14cmh4dXl1anF6dnplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE1NTUwNjIsImV4cCI6MjA4NzEzMTA2Mn0.KQMsec0usmmS3qz0Vq279wlUAaa5h2EdrVsc1q353Yc"
);
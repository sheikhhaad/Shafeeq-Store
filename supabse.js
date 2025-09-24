import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yoepuzvkhjrlmedyqive.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlvZXB1enZraGpybG1lZHlxaXZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3MjI2NTMsImV4cCI6MjA3NDI5ODY1M30.eVwdcPSUu4u9LZQ1SgX-rRSoGVTKXuD7gNXyga7LBew";
export const supabase = createClient(supabaseUrl, supabaseKey);

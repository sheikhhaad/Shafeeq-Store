import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kiqsxuzewbldnpyixlyd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpcXN4dXpld2JsZG5weWl4bHlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc2NzM4NjIsImV4cCI6MjA3MzI0OTg2Mn0.a-e_ay7wmYm7n_4JtxRHLcpnf_6H6cA38A-fZhhR1Bs";
export const supabase = createClient(supabaseUrl, supabaseKey);

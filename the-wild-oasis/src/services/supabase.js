import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ibkrdoizcczwcigmlxfz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlia3Jkb2l6Y2N6d2NpZ21seGZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU2NTIzMzIsImV4cCI6MjA2MTIyODMzMn0.GLj2l85pgQA4dmPlxULuXro_kAnrtJJaxMlI5mq2Jfs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

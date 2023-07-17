// import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = import.meta.env.VITE_SUPAURL;
// const supabaseKey = import.meta.env.VITE_SUPAKEY;


// export const supabase = createClient(supabaseUrl,supabaseKey)


import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://uhpmdspxvlbjktpaaxyx.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVocG1kc3B4dmxiamt0cGFheHl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk1MzgyNzgsImV4cCI6MjAwNTExNDI3OH0.WhQBzBhgIwrU3szwRK2kOhP646_tRVLkaVDnV9hyOVQ";
export const supabase = createClient(supabaseUrl, supabaseKey)
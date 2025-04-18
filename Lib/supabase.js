// lib/supabase.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://sccvaaqdguuzxxkxapon.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjY3ZhYXFkZ3V1enh4a3hhcG9uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5MzI5MTksImV4cCI6MjA2MDUwODkxOX0.KGM5GeHYwDXXezFtGLTqkWZZIZG5PWuxbyiAilrVaIc";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

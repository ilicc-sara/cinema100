import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://yyocycmzxqjdvkwqlpzd.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5b2N5Y216eHFqZHZrd3FscHpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA0Nzg2MzEsImV4cCI6MjA3NjA1NDYzMX0.xiESB6vTdRhwuCLH4ArpMjfzSLGVljwgf9DNHZxb3FM"
);

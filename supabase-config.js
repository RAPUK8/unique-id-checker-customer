// Supabase 云端配置
// 1. 在 Supabase 项目 Settings > API 中复制 Project URL 和 anon public key。
// 2. 只允许填写 anon public key，禁止把 service_role key 放到前端。
// 3. 首次部署前请在 Supabase SQL Editor 执行 supabase-setup.sql。
window.UID_CLOUD_CONFIG = {
  url: "https://jvweyahtdvfaekdltala.supabase.co",
  anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2d2V5YWh0ZHZmYWVrZGx0YWxhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgyMjY0MDEsImV4cCI6MjEwMzgwMjQwMX0.XNMvZnLu_bCSnO3YqMh4egBzcwTC9_7--lSZqMh0jJE",
  table: "uid_rules",
  bucket: "uid-rule-images"
};

import axios from 'axios';

const supabaseURL = 'https://kaabmnscopjdxflepgsf.supabase.co/rest/v1';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImthYWJtbnNjb3BqZHhmbGVwZ3NmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyMzI3OTQsImV4cCI6MjAxNDgwODc5NH0.LfVqz_ByUKr8Ah4LcU42sDCLH4UaK8De-xIdoQAGiDU';

const api = axios.create({
    baseURL: supabaseURL,
    headers: {
      common: {
        apikey: token,
        Authorization: `Bearer ${token}`,
      },
      post: {
        Prefer: 'return=representation',
      },
      patch: {
        Prefer: 'return=representation',
      },
    },
  });

async function read(resource) {
    const { data } = await api.get(resource);

    return data;
}

export { read };
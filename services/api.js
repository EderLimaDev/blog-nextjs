import axios from 'axios';

export const api  = axios.create({
    baseURL: "https://xpghonjczygiivzeitqw.supabase.co/rest/v1/",
    headers: {
        apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhwZ2hvbmpjenlnaWl2emVpdHF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA1NTE4NDIsImV4cCI6MjAyNjEyNzg0Mn0.Wi2jjy5SnISCM_xlDPnxxiajDT5w9oPBuX18_FzJKLA',
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhwZ2hvbmpjenlnaWl2emVpdHF3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMDU1MTg0MiwiZXhwIjoyMDI2MTI3ODQyfQ.XZzOT98NRc0yipTfuhs_0C30wPH-hKDgmneZIKqdBRk"
    }
})
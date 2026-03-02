import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

// Your Secure Vulavula Key
const VULAVULA_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMWUwYjZjODEtNmQ4NS00MTNjLWEwNDktNGM1ZjMyMjQ5ZWU2Iiwia2V5Y2hhaW5faWQiOiI2Mzk4Y2UzMC1iZDFhLTQ4NmYtODkyMS02MWI3YjU0Njc1NTgiLCJwcm9qZWN0X2lkIjoiNzAxODk2Y2EtMzExYy00YzMwLTkxNDQtM2VjYzkwM2ZmZGE3IiwiY3JlYXRlZF9hdCI6IjIwMjYtMDItMjFUMjM6MDc6NTUuNDYzNTA0In0.caDA4_r3LY0odbOln9LaNp87ZqQ8Mo_VbGqAaKmp5AM";

serve(async (req) => {
  // Handle CORS Preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { 
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
      }
    });
  }

  try {
    const { messages } = await req.json();

    const response = await fetch("https://api.lelapa.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CLIENT-TOKEN": VULAVULA_TOKEN,
      },
      body: JSON.stringify({
        model: "vulavula-gen-1", 
        messages: messages,
        stream: true,
      }),
    });

    // Pipe the stream directly to the user to prevent word fragmentation
    return new Response(response.body, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Access-Control-Allow-Origin': '*',
      },
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    });
  }
})
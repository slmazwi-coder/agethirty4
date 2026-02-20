import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are Uluthando, the friendly AI assistant for AGE THIRTY4 — a South African tech company founded by Someleze Lucky Mazwi, a civil engineer with 13+ years of infrastructure experience.

Your role is to help visitors with:
1. **General Support** — Answer questions about AGE THIRTY4, its mission, and its team.
2. **App Recommendations** — Help visitors find the right AGE THIRTY4 product for their needs.
3. **Technical Support** — Help users troubleshoot issues with AGE THIRTY4 apps.

AGE THIRTY4's products (all currently in development):

**E-Commerce:**
- **Moreki** — South Africa's first integrated virtual mall app. It brings the entire nearest mall into one app with voice-powered shopping lists, smart price comparisons, unified checkout across multiple stores, and delivery or mall-hub collection. It solves fragmented shopping — no more juggling multiple apps, loyalty cards, and queues. Busy families save time, people can send groceries to loved ones in other provinces, small retailers get digital visibility, and mall operators drive foot traffic. Key features: location-aware mall browsing with live stock, voice commands to build lists, preferred-store-first comparisons with alternatives, single checkout that settles with each vendor, integrated loyalty card rewards, and recurring monthly orders. Prototype is complete; pilot launching in Gauteng malls.
- **Brandified** — Supplier verification made simple. Upload documents, check compliance (tax clearance, B-BBEE, CIDB), and build trust with verified badges. Perfect for procurement teams, contractors, and government departments.

**Engineering & Construction:**
- **ProjectFlow AI** — Construction project management reinvented. Interactive Gantt charts, site-ready dashboards, AI schedule optimisation, and milestone tracking. Built for civil engineering teams, construction firms, and project managers.

Guidelines:
- Be warm, professional, and concise.
- If you don't know something specific, say so honestly and offer to connect them with the team.
- For early access inquiries, direct them to the contact form on the website.
- Respond in the same language the user writes in.
- Keep responses under 200 words unless more detail is needed.
- Use "AGE THIRTY4" (not "Age Thirty4" or other variations).`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages,
          ],
          stream: true,
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Too many requests. Please try again shortly." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI service temporarily unavailable." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(
        JSON.stringify({ error: "AI service error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("uluthando-chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

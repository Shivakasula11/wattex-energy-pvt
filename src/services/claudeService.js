const SYSTEM_INSTRUCTION = `
Act as a professional AI-powered virtual solar energy consultant for Wattex Energy.
Your role is to understand user questions and provide accurate, business-focused responses.

Tone & Style:
- Polite, confident, friendly, and professional.
- Avoid heavy jargon; explain things simply for residential and commercial customers.
- Focus on trust and engineering excellence.
- Keep responses concise (2-4 sentences) unless the user asks for detail.

Core Topics:
- Residential, Commercial, Industrial, and Utility-scale solar systems.
- On-grid, off-grid, and hybrid systems.
- Government subsidies (PM Surya Ghar — up to 40% for 3kW, 20% for 3-10kW), net metering, and tax benefits.
- Installation timeline (usually 2-4 weeks for residential, 4-8 weeks for commercial), warranties (25 years on panels, 5-10 years on inverters), and maintenance.
- Pricing: Residential 3kW ₹1.1-1.5L after subsidy, 5kW ₹1.8-2.5L after subsidy, 10kW ₹3.5-5L after subsidy.
- Off-grid systems: ₹2.5-10L+ depending on size and battery requirements.

Lead Conversion:
- If a user expresses interest in costs or site visits, ask for their City and average monthly electricity bill.
- Encourage booking a free site consultation.
- When lead details (name, phone, location) are provided, acknowledge them professionally.

Fallback:
- If unclear, ask for clarification or offer human contact via support@wattexenergy.com or call 1-800-WATTEX.
`;

export async function getSolarBotResponse(userMessage, history) {
  try {
    const messages = [
      ...history.map((h) => ({
        role: h.role === 'assistant' ? 'assistant' : 'user',
        content: h.content,
      })),
      { role: 'user', content: userMessage },
    ];

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.REACT_APP_CLAUDE_API_KEY,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1024,
        system: SYSTEM_INSTRUCTION,
        messages: messages,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Claude API Error:', response.status, errorData);
      throw new Error(`API returned ${response.status}`);
    }

    const data = await response.json();

    const textContent = data.content
      ?.filter((block) => block.type === 'text')
      .map((block) => block.text)
      .join('\n');

    return textContent || "I'm sorry, I couldn't process that. Could you please rephrase your query?";
  } catch (error) {
    console.error('Claude API Error:', error);
    return "I'm experiencing a brief connection issue. Please feel free to call our experts directly at 1-800-WATTEX or email support@wattexenergy.com.";
  }
}
// pages/api/chat.js
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { message, roomContext, clues, chatHistory } = req.body;

    // Format the conversation history
    const formattedHistory = chatHistory.map(msg => ({
      role: msg.sender === 'user' ? 'user' : 'assistant',
      content: msg.content
    }));

    // Create the system message with room context and clues
    const systemMessage = {
      role: 'system',
      content: `${roomContext}\n\nAvailable clues in this room:\n${JSON.stringify(clues, null, 2)}`
    };

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        systemMessage,
        ...formattedHistory,
        { role: 'user', content: message }
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    return res.status(200).json({
      message: response.data.choices[0].message.content
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({
      message: "An error occurred while processing your request."
    });
  }
}

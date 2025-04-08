import React from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css'; // Import default styles

// Configuration for the chatbot
const config = {
  botName: "GrowAI Bot",
  initialMessages: [
    {
      id: 1,
      type: 'bot',
      text: 'Hi! I’m GrowAI Bot. How can I assist you today?',
    },
  ],
};

// Parses user input to determine bot responses
const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      actions.handleHello();
    } else if (lowerMessage.includes('content')) {
      actions.handleContentQuery();
    } else {
      actions.handleDefault();
    }
  };

  return <div>{React.cloneElement(children, { parse })}</div>;
};

// Defines bot actions and responses
const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello! Nice to meet you.');
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleContentQuery = () => {
    const botMessage = createChatBotMessage(
      'I can’t generate content yet since the backend isn’t ready, but I can chat with you! What’s on your mind?'
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleDefault = () => {
    const botMessage = createChatBotMessage(
      'I’m not sure how to help with that. Try asking about content or saying hi!'
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return <div>{React.cloneElement(children, { actions: { handleHello, handleContentQuery, handleDefault } })}</div>;
};

// Chatbot component
const ChatbotComponent = () => {
  return (
    <div style={{ maxWidth: '300px', margin: '20px auto' }}>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

export default ChatbotComponent;
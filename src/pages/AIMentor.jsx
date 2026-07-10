import { useState, useEffect } from "react";
import axios from "axios";

import Sidebar from "../components/Sidebar";
import ChatMessage from "../components/ChatMessage";
import ChatInput from "../components/ChatInput";

// AI Mentor page
function AIMentor() {

  // Stores all chat messages
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "ai",
      text: "Hi 👋 I'm your EduNexa AI Mentor."
    }
  ]);

  // Stores current input text
  const [input, setInput] = useState("");

  // Controls typing animation
  const [isTyping, setIsTyping] = useState(false);

  // Load previous chat history when the page opens
  useEffect(() => {

    const fetchHistory = async () => {

      try {

        const userId = localStorage.getItem("userId");

        const response = await axios.get(
          `http://localhost:5000/api/ai/history/${userId}`
        );

        const history = response.data.map(chat => ({
          id: chat._id,
          sender: chat.sender,
          text: chat.text
        }));

        if (history.length > 0) {
          setMessages(history);
        }

      } catch (error) {
        console.log(error);
      }

    };

    fetchHistory();

  }, []);

  // Sends the user's message to the backend
  const handleSend = async () => {

    if (!input.trim()) return;

    const userMessage = input;

    const newMessage = {
      id: Date.now(),
      sender: "user",
      text: userMessage
    };

    // Show the user's message immediately
    setMessages(prev => [...prev, newMessage]);

    setInput("");
    setIsTyping(true);

    try {

      const response = await axios.post(
        "http://localhost:5000/api/ai/chat",
        {
          userId: localStorage.getItem("userId"),
          message: userMessage
        }
      );

      const aiReply = {
        id: Date.now() + 1,
        sender: "ai",
        text: response.data.reply
      };

      // Display AI response
      setMessages(prev => [...prev, aiReply]);

    } catch (error) {

      console.log(error);

      setMessages(prev => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "ai",
          text: "Something went wrong."
        }
      ]);

    } finally {

      setIsTyping(false);

    }

  };

  return (

    <div className="home-page">

      <Sidebar />

      <div className="hero">

        <h1>AI Mentor</h1>

        <div className="chat-container">

          <div className="chat-body">

            {/* Display chat messages */}
            {messages.map(msg => (
              <ChatMessage
                key={msg.id}
                sender={msg.sender}
                text={msg.text}
              />
            ))}

            {/* Show typing animation while waiting for AI */}
            {isTyping && (
              <ChatMessage
                sender="ai"
                text="Typing..."
              />
            )}

          </div>

          {/* Chat input box */}
          <ChatInput
            input={input}
            setInput={setInput}
            handleSend={handleSend}
          />

        </div>

      </div>

    </div>

  );

}

export default AIMentor;
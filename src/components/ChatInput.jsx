import { FiSend } from "react-icons/fi";

// Chat input component
function ChatInput({
  input,
  setInput,
  handleSend
}) {

  return (

    <div className="chat-input">

      {/* User message input */}
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask anything..."
        onKeyDown={(e) => {
          // Send message when Enter key is pressed
          if (e.key === "Enter") {
            handleSend();
          }
        }}
      />

      {/* Send button */}
      <button onClick={handleSend}>
  <FiSend />
</button>

    </div>

  );

}

export default ChatInput;
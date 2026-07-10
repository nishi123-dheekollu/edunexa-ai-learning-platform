import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// Displays individual chat messages
function ChatMessage({ sender, text }) {
  return (
    <div className={sender === "ai" ? "ai-message" : "user-message"}>
      {text === "Typing..." ? (

        // Typing animation while AI is generating a response
        <div className="typing">
          <span></span>
          <span></span>
          <span></span>
        </div>

      ) : (

        // Render AI/User message with Markdown support
        <div className="message-text">
          <ReactMarkdown
            components={{
              code({ className, children, ...props }) {

                // Detect code block language
                const match = /language-(\w+)/.exec(className || "");

                return match ? (

                  // Render formatted code block with syntax highlighting
                  <SyntaxHighlighter
                    style={oneDark}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>

                ) : (

                  // Render inline code
                  <code className={className} {...props}>
                    {children}
                  </code>

                );
              }
            }}
          >
            {text}
          </ReactMarkdown>
        </div>

      )}
    </div>
  );
}

export default ChatMessage;
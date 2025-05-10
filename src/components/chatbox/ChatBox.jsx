import { useState, useRef, useEffect } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

export default function ChatBox({ onClose }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatRef = useRef(null);

  const sendMessage = async () => {
    if (input.trim() === "") return;

    const newUserMessage = { fromUser: true, text: input };
    setMessages((prev) => [...prev, newUserMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, newUserMessage],
        }),
      });

      if (!response.ok) {
        throw new Error("Response not OK");
      }

      const data = await response.json();
      const replyText = data.reply || "(tidak ada balasan dari server)";
      const adminReply = { fromUser: false, text: replyText };
      setMessages((prev) => [...prev, adminReply]);
    } catch (error) {
      console.error("Error:", error);
      // Tambahkan pesan "server down" ke tampilan chat
      const errorReply = {
        fromUser: false,
        text: "Maaf atas ketidaknyamanannya, server sedang down😓",
      };
      setMessages((prev) => [...prev, errorReply]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "80px",
        right: "20px",
        width: "300px",
        backgroundColor: "#fff",
        border: "1px solid #ccc",
        borderRadius: "8px",
        zIndex: 1000,
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      <div className="p-2 border-bottom d-flex justify-content-between align-items-center bg-primary text-white">
        <span>Chat Admin</span>
        <Button variant="light" size="sm" onClick={onClose}>
          ×
        </Button>
      </div>

      <div
        ref={chatRef}
        style={{
          height: "220px",
          overflowY: "auto",
          padding: "10px",
        }}
      >
        {messages.map((msg, idx) => (
          <div
            key={idx}
            style={{
              textAlign: msg.fromUser ? "right" : "left",
              marginBottom: "8px",
            }}
          >
            <span
              style={{
                display: "inline-block",
                backgroundColor: msg.fromUser ? "#d1e7dd" : "#f8d7da",
                padding: "8px 12px",
                borderRadius: "15px",
                maxWidth: "80%",
                wordBreak: "break-word",
              }}
            >
              {msg.text || "(tidak ada balasan)"}
            </span>
          </div>
        ))}
        {loading && (
          <div
            style={{
              textAlign: "center",
              marginTop: "10px",
              color: "#007bff",
            }}
          >
            <span>Loading...</span>
          </div>
        )}
      </div>

      <div className="p-2 border-top">
        <InputGroup>
          <Form.Control
            type="text"
            placeholder="Ketik pesan..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <Button variant="primary" onClick={sendMessage} disabled={loading}>
            {loading ? "Mengirim..." : "Kirim"}
          </Button>
        </InputGroup>
      </div>
    </div>
  );
}

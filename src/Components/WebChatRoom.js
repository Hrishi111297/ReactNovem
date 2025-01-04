// import React, { useEffect, useState, useRef } from "react";
// import { Client } from "@stomp/stompjs";
// import SockJS from "sockjs-client";

// const WebChatRoom = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const clientRef = useRef(null); // Use useRef for the WebSocket client

//   useEffect(() => {
//     // Initialize the WebSocket client
//     const client = new Client({
//       webSocketFactory: () => new SockJS("http://localhost:8080/ws"),
//       onConnect: () => {
//         console.log("Connected to WebSocket");
//         client.subscribe("/topic/ws", (message) => {
//           setMessages((prev) => [...prev, message.body]);
//         });
//       },
//     });

//     client.activate();
//     clientRef.current = client; // Save the client in the ref

//     return () => {
//       if (clientRef.current) clientRef.current.deactivate(); // Cleanup
//     };
//   }, []);

//   const sendMessage = () => {
//     if (clientRef.current && clientRef.current.connected) {
//       clientRef.current.publish({
//         destination: "/app/message",
//         body: input,
//       });
//       setInput("");
//     } else {
//       console.error("WebSocket client is not connected.");
//     }
//   };

//   return (
//     <div className="p-4 mt-20">
//       <div className="mb-4">
//         <h2 className="text-lg font-bold mb-2">Messages:</h2>
//         <ul className="space-y-2">
//           {messages.map((msg, index) => (
//             <li key={index} className="p-2 bg-gray-100 rounded">
//               {msg}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="flex space-x-2">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           className="border rounded p-2 flex-grow"
//           placeholder="Type your message..."
//         />
//         <button
//           onClick={sendMessage}
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// export default WebChatRoom;

import React, { useEffect, useState, useRef } from "react";
import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";

const WebChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [user, setUser] = useState(""); // For specifying the user
  const clientRef = useRef(null); // WebSocket client reference

  useEffect(() => {
    const client = new Client({
      webSocketFactory: () => new SockJS("http://localhost:8080/ws"),
      onConnect: () => {
        console.log("Connected to WebSocket");

        if (user) {
          client.subscribe(`/topic/ws/${user}`, (message) => {
            console.log("Received message:", message.body);
            setMessages((prev) => [...prev, message.body]);
          });
        } else {
          console.error("User is not specified for subscription.");
        }
      },
    });

    client.activate();
    clientRef.current = client;

    return () => {
      if (clientRef.current) clientRef.current.deactivate(); // Cleanup
    };
  }, [user]); // Rerun effect when 'user' changes

  const sendMessage = async () => {
    if (!user) {
      console.error("User must be specified.");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8080/ws/send-notification`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            user: user,
            message: input,
          }),
        }
      );

      if (response.ok) {
        console.log("Message sent successfully!");
        setInput(""); // Clear input field
      } else {
        console.error("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="p-4 mt-20">
      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">Messages:</h2>
        <ul className="space-y-2">
          {messages.map((msg, index) => (
            <li key={index} className="p-2 bg-gray-100 rounded">
              {msg}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col space-y-2">
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="border rounded p-2"
          placeholder="Enter user name..."
        />
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border rounded p-2 flex-grow"
            placeholder="Type your message..."
          />
          <button
            onClick={sendMessage}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default WebChatRoom;

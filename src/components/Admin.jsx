
import React, { useEffect, useState } from "react";
import axios from "axios";

const Admin = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/contact")
      .then((res) => setMessages(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold text-center mb-6">
        Admin Dashboard – Messages
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-black">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Phone</th>
              <th className="border p-2">Company</th>
              <th className="border p-2">Message</th>
            </tr>
          </thead>

          <tbody>
            {messages.map((msg, index) => (
              <tr key={index}>
                <td className="border p-2">{msg.name}</td>
                <td className="border p-2">{msg.email}</td>
                <td className="border p-2">{msg.number}</td>
                <td className="border p-2">{msg.company}</td>
                <td className="border p-2">{msg.message}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {messages.length === 0 && (
          <p className="text-center mt-4">No messages yet</p>
        )}
      </div>
    </div>
  );
};

export default Admin;

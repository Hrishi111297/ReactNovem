import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { motion } from "framer-motion";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      //showLoader();
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Authorization token not found.");
        }
        const response = await fetch("http://localhost:8080/api/getAll", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        //  hideLoader();
      }
    };

    fetchUsers();
  }, []);

  const deleteStudent = (id) => {
    alert("I am delete!" + id);
  };

  return users.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Student List</h1>
      <motion.table
        className="table-auto w-full border-collapse border border-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">#</th>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Email</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((student, index) => (
            <motion.tr
              key={student.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="hover:bg-gray-50"
            >
              <td className="border border-gray-300 p-2 text-center">
                {index + 1}
              </td>
              <td className="border border-gray-300 p-2">
                {student.firstName}
              </td>
              <td className="border border-gray-300 p-2">{student.emailId}</td>
              <td className="border border-gray-300 p-2 text-center">
                <button
                  className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                  onClick={() =>
                    showNotification("Info message displayed!", "info")
                  }
                >
                  Delete
                </button>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </motion.table>
    </div>
  );
};

export default UserList;

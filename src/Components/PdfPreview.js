import React, { useState, useEffect } from "react";
import axios from "axios";

const PdfPreview = ({ documentId }) => {
  const [pdfUrl, setPdfUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // State to store error message

  useEffect(() => {
    const fetchPdf = async () => {
      try {
        setLoading(true); // Start loading
        setError(null); // Reset previous error

        // Make the request using Axios
        const response = await axios.get(
          `http://localhost:8080/auth/${documentId}`,
          { responseType: "blob" }
        );

        if (response.status !== 200) {
          throw new Error(`Failed to fetch PDF. Status: ${response.status}`);
        }

        const url = URL.createObjectURL(response.data); // Use response.data (PDF Blob)
        setPdfUrl(url);
      } catch (error) {
        // Catch and handle errors
        console.error("Error fetching the PDF:", error);
        setError(error.message); // Store the error message
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchPdf();

    // Cleanup URL when the component unmounts
    return () => {
      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl);
      }
    };
  }, [documentId]);

  // Render loading, error, or PDF preview based on the state
  return (
    <div style={{ width: "100%", height: "400px", margin: "10px auto" }}>
      {loading ? (
        <p>Loading PDF...</p>
      ) : error ? (
        <div style={{ color: "red" }}>
          <p>Error: {error}</p> {/* Display the error message */}
        </div>
      ) : pdfUrl ? (
        <iframe
          src={pdfUrl}
          type="application/pdf"
          width="80%"
          height="400vh"
          style={{ border: "none",margin:'0 auto' }}
        >
          <p>Your browser does not support PDFs.</p>
        </iframe>
      ) : (
        <p>No PDF available.</p>
      )}
    </div>
  );
};

export default PdfPreview;

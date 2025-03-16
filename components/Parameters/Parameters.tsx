'use client'

import React, {useState, useEffect} from "react";
// Define the type for JSON data
type JsonData = Record<string, string | number | boolean>;



export function Parameters() {
    const [jsonData, setJsonData] = useState<JsonData | null>(null);
    const [refreshTrigger, setRefreshTrigger] = useState(0); // Triggers re-fetch
  
    const fetchData = () => {
      fetch("/test_full.json") // Ensure data.json is in public/
        .then((response) => {
          if (!response.ok) throw new Error("Failed to load JSON");
          return response.json();
        })
        .then((data: JsonData) => setJsonData(data))
        .catch((error) => console.error("Error loading JSON:", error));
    };
  
    useEffect(() => {
      fetchData(); // Fetch data when component mounts or refreshTrigger changes
    }, [refreshTrigger]);
  
    if (!jsonData) return <p>Loading JSON data...</p>;
  
    return (
      <div>
        <center>
        <h2>JSON Data Table</h2>
      <button onClick={() => setRefreshTrigger((prev) => prev + 1)}>
        Refresh Data
      </button>
      <table style={{ borderCollapse: "collapse", width: "100%", marginTop: "10px" }}>
        <thead>
          <tr style={{ borderBottom: "2px solid black" }}>
            <th style={{ textAlign: "left", padding: "8px" }}>Key</th>
            <th style={{ textAlign: "left", padding: "8px" }}>Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(jsonData).map(([key, value], index, array) => (
            <React.Fragment key={key}>
              <tr>
                <td style={{ padding: "8px" }}>{key}</td>
                <td style={{ padding: "8px" }}>{String(value)}</td>
              </tr>
              {index < array.length - 1 && (
                <tr>
                  <td colSpan={2}>
                    <hr style={{ border: "1px solid #ccc" }} />
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
        </center>
      </div>
    );
  };
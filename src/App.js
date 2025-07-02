import React from "react";

const levels = [
  { level: 1, mastery: 80 },
  { level: 2, mastery: 70 },
  { level: 3, mastery: 50 },
  { level: 4, mastery: 30 },
  { level: 5, mastery: 0 },
  { level: 6, mastery: 0 },
  { level: 7, mastery: 0 },
  { level: 8, mastery: 0 },
  { level: 9, mastery: 0 },
  { level: 10, mastery: 0 },
];

function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Dashboard Latihan Catur (Level 1–10)</h1>
      <ul>
        {levels.map((item) => (
          <li key={item.level}>
  <strong>Level {item.level}:</strong> {item.mastery}%
  <div style={{
    height: "10px",
    width: "100%",
    backgroundColor: "#ddd",
    marginBottom: "1rem"
  }}>
    <div style={{
      height: "10px",
      width: `${item.mastery}%`,
      backgroundColor: "#4caf50"
    }}></div>
  </div>
</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
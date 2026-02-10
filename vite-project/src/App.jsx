import { useState } from "react";
import "./App.css";

function App() {
  const [fact, setFact] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchRandomFact = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://catfact.ninja/fact");
      const data = await response.json();
      setFact(data.fact);
    } catch (error) {
      console.error("Error fetching cat fact:", error);
      setFact("Failed to fetch cat fact. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-wrapper">
      <div className="cat-fact-container">
        {fact && (
          <div className="fact-display">
            <p>{fact}</p>
          </div>
        )}
      </div><p>
      <button
        onClick={fetchRandomFact}
        disabled={loading}
        className="cat-fact-button"
      >
        {loading ? "Loading..." : "Get A Cat Fact"}
      </button></p>
    </div>
  );
}

export default App;

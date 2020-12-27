import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import api from "./api.js";
import "./styles.css";

export default function App() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    setResults(api);
  }, []);
  return (
    <div className="container">
      {results.map((result, indx) => (
        <Card result={result} key={indx} />
      ))}
    </div>
  );
}

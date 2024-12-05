import React, { useState, useEffect } from "react";
import TechStackSelector from "../components/TechStackSelector"; // Keep the stack selector

export default function HomePage() {
  const [selectedTechStack, setSelectedTechStack] = useState("");
  const [pipelines, setPipelines] = useState([]); // Manage pipelines data
  // Sample data fetch simulation (replace with actual API call)
  useEffect(() => {
    const fetchPipelines = async () => {
      // Here you would connect to your backend or API
      const data = [
        { id: 1, name: "Pipeline 1", techStack: "MERN", status: "Running" },
        { id: 2, name: "Pipeline 2", techStack: "T3", status: "Idle" },
      ];
      setPipelines(data);
    };

    fetchPipelines();
  }, []);

  const handleSelect = (stack: string) => {
    setSelectedTechStack(stack);
    console.log(`Selected tech stack: ${stack}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Orbis - Simplifying DevOps</h1>
      <TechStackSelector onSelect={handleSelect} />
      
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Available Pipelines</h2>
        {pipelines.length > 0 ? (
          <ul className="bg-white p-4 rounded shadow-md">
            {pipelines.map((pipeline) => (
              <li key={pipeline.id} className="mb-4">
                <div><strong>{pipeline.name}</strong> - {pipeline.techStack}</div>
                <div>Status: {pipeline.status}</div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No pipelines available.</p>
        )}
      </div>
    </div>
  );
}

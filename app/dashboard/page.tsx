// components/AIPrompt.js
"use client";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";

export default function AIPrompt() {
  const [response, setResponse] = useState("");

  const handleSubmit = () => {
    // Placeholder for API call or logic to get AI response
    setResponse("This is where the AI response will appear.");
  };

  return (
    <div className="bg-slate-900 min-h-screen flex flex-col">
      {/* Navigation Component */}
      <Navigation />

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Prompt Section */}
        <div className="flex-1 bg-slate-900 p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-gray-700">
          <h2 className="text-3xl font-bold mb-6 text-white">Ask the AI</h2>
          <textarea
            rows={6}
            className="w-full border border-gray-600 rounded-lg py-7 px-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition mb-6 bg-slate-700 text-white"
            placeholder="Type your question or command here..."
          />
          <Button variant="regular">Send</Button>
        </div>

        {/* Response Section */}
        <div className="flex-1 bg-slate-900 p-8 lg:p-12">
          <h2 className="text-3xl font-bold mb-6 text-white">AI Respond</h2>
          <div className="bg-slate-700 border border-gray-600 rounded-lg p-6 min-h-[200px]">
            <p className="text-white">{response}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

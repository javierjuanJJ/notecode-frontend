"use client";

import { useState } from "react";
import Editor from "@monaco-editor/react";
import { defaultSnippet } from "../constants/defaultSnippet.js";
import Share from '../components/Share.jsx';

export default function CodeEditor() {
  const [code, setCode] = useState(defaultSnippet);
  const [language, setLanguage] = useState("html");
  const [theme, setTheme] = useState("vs-dark");

  const handleEditorChange = (value) => setCode(value || "");
  const handleShare = () => console.log({ code, language, theme });

  return (
    <div className="bg-white/5 rounded-2xl shadow-lg p-4 relative">
      <Editor
        height="400px"
        value={code}
        language={language}
        theme={theme}
        onChange={handleEditorChange}
        options={{ minimap: { enabled: false }, fontSize: 14, lineNumbers: "on" }}
      />
      <div className="flex justify-between items-center mt-4">
        <div className="flex gap-2">
          <select value={language} onChange={(e) => setLanguage(e.target.value)} className="px-3 py-1 bg-white/10 rounded text-sm">
            <option value="html">HTML</option>
            <option value="javascript">JavaScript</option>
            <option value="css">CSS</option>
          </select>
          <select value={theme} onChange={(e) => setTheme(e.target.value)} className="px-3 py-1 bg-white/10 rounded text-sm">
            <option value="vs-dark">Dark</option>
            <option value="light">Light</option>
          </select>
        </div>
        <button onClick={handleShare} className="px-4 py-2 bg-sky-500/100 hover:bg-blue-60 rounded-lg shadow-md hover:opacity-90 transition">
         Share
        </button>
      </div>
    </div>
  );
}

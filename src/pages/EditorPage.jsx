"use client"
import { useState, useEffect } from "react";

// Simulamos el defaultSnippet
const defaultSnippet = `<!html>
<head>
  <title>HTML Sample</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <style type="text/css">
    h1 {
      color: #CCA3A3;
    }
  </style>
  <script type="text/javascript">
    alert("I am a sample..., visit devChallenges.io for more projects");
  </script>
</head>
<body>
  <h1>Heading No.1</h1>
  <input disabled type="button" value="Click me" />
</body>
</html>`;

export default function EditorPage() {
  const [code, setCode] = useState(defaultSnippet);
  const [language, setLanguage] = useState("html");
  const [theme, setTheme] = useState("vs-dark");
  const [isEdited, setIsEdited] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Evitar hidratación mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleEditorChange = (e) => {
    setCode(e.target.value);
    setIsEdited(true);
  };

  const handleShare = () => {
    console.log("Snippet listo para guardar:", { code, language, theme });
    setIsEdited(false);
  };

  // No renderizar hasta que el componente esté montado
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 right-32 w-40 h-40 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-500/10 rounded-full blur-xl"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
            <span className="text-white text-xs font-bold">{'</>'}</span>
          </div>
          <span className="text-white font-medium">devChallenges.io</span>
        </div>
        
        <div className="text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Code Sharing App
          </h1>
          <p className="text-gray-300 mt-2">Fullstack developer</p>
        </div>
        
        <div className="w-32"></div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          {/* Card principal */}
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden">
            {/* Header del editor */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 px-8 py-6 border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">📝</span>
                    <h2 className="text-2xl font-bold text-gray-800">NoteCode</h2>
                  </div>
                  <span className="text-2xl">✨</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="html">HTML</option>
                    <option value="javascript">JavaScript</option>
                    <option value="css">CSS</option>
                  </select>
                  
                  <select
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="vs-dark">Dark</option>
                    <option value="light">Light</option>
                  </select>
                </div>
              </div>
              
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-gray-800">Create & Share</h3>
                <p className="text-lg text-gray-600">Your Code easily</p>
              </div>
            </div>

            {/* Editor area */}
            <div className="flex">
              {/* Panel izquierdo con avatar y números de línea */}
              <div className="w-16 bg-gray-50 flex flex-col items-center py-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mb-4 flex items-center justify-center">
                  <span className="text-white text-sm font-medium">👨‍💻</span>
                </div>
                
                <div className="flex flex-col gap-1 text-xs text-gray-500">
                  {Array.from({ length: 18 }, (_, i) => (
                    <div key={i} className="h-6 flex items-center justify-center w-8">
                      {i + 1}
                    </div>
                  ))}
                </div>
              </div>

              {/* Área del código */}
              <div className="flex-1 relative">
                <textarea
                  value={code}
                  onChange={handleEditorChange}
                  className="w-full h-96 p-4 font-mono text-sm bg-white border-none outline-none resize-none"
                  style={{ 
                    minHeight: '400px',
                    fontFamily: 'Consolas, Monaco, "Courier New", monospace'
                  }}
                  spellCheck="false"
                />
                
                {/* Panel derecho con preview */}
                <div className="absolute top-4 right-4 w-64 bg-gray-50 rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-blue-600">📝</span>
                    <span className="font-medium text-gray-700">Create & Share</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">Your Code easily</p>
                  
                  <div className="bg-white rounded-lg p-3 mb-4 overflow-hidden">
                    <div className="text-xs font-mono text-gray-700">
                      {code.split('\n').slice(0, 8).map((line, i) => (
                        <div key={i} className="truncate whitespace-nowrap">
                          {line || '\u00A0'}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="px-3 py-1 bg-gray-200 text-gray-600 rounded-lg text-xs font-medium">
                      HTML
                    </button>
                    <button className="px-3 py-1 bg-gray-200 text-gray-600 rounded-lg text-xs font-medium">
                      Live
                    </button>
                  </div>
                  
                  <button
                    onClick={handleShare}
                    disabled={!isEdited}
                    className={`w-full mt-4 px-4 py-2 rounded-xl text-white font-medium flex items-center justify-center gap-2 transition-all duration-200 ${
                      isEdited 
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 shadow-lg hover:shadow-xl transform hover:scale-105" 
                        : "bg-gray-300 cursor-not-allowed"
                    }`}
                  >
                    <span className="text-lg">🚀</span>
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Elementos decorativos adicionales */}
      <div className="absolute bottom-10 left-10 pointer-events-none">
        <div className="w-4 h-4 bg-yellow-400 rounded-full opacity-80"></div>
      </div>
      <div className="absolute top-1/3 right-20 pointer-events-none">
        <div className="w-3 h-3 bg-pink-400 rounded-full opacity-80"></div>
      </div>
    </div>
  );
}
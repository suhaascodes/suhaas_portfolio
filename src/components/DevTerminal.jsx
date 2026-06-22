import React, { useState, useRef, useEffect } from 'react';

const DevTerminal = () => {
  const [history, setHistory] = useState([
    { text: "Welcome to Suhaas' interactive terminal!", type: "info" },
    { text: "Type 'help' to see a list of available commands.", type: "prompt" }
  ]);
  const [input, setInput] = useState("");
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom of terminal
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  // Focus input when terminal is clicked
  const focusInput = () => {
    inputRef.current?.focus();
  };

  const handleCommand = (e) => {
    if (e.key !== 'Enter') return;
    
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    const newHistory = [...history, { text: `guest@suhaas-portfolio:~$ ${trimmedInput}`, type: "command" }];
    const cmd = trimmedInput.toLowerCase().split(' ')[0];

    switch (cmd) {
      case 'help':
        newHistory.push({
          text: "Available commands:\n  about     - Brief bio of Suhaas\n  skills    - List core tech skills & certifications\n  projects  - Show featured development projects\n  contact   - Get contact info and social handles\n  clear     - Clear the terminal screen",
          type: "output"
        });
        break;
      case 'about':
        newHistory.push({
          text: "Suhaas Bandari is a Computer Science & Engineering student at CBIT, Hyderabad specializing in IoT, Cybersecurity, and Blockchain. He designs and builds secure, scalable full-stack web applications and containerized CI/CD pipelines.",
          type: "output"
        });
        break;
      case 'skills':
        newHistory.push({
          text: "Languages:      Java, Python, JavaScript, SQL, HTML, CSS\nFrameworks:     React, Node.js, Express.js, MongoDB\nDevOps & Cloud: Oracle Cloud (OCI Certified), Docker, CI/CD (GitHub Actions), Git\nFundamentals:   OOPS, Data Structures & Algorithms, DBMS, OS, Networks",
          type: "output"
        });
        break;
      case 'projects':
        newHistory.push({
          text: "1. FlowForge: Full Stack Kanban SaaS App (https://suhaas-flowforge.netlify.app/)\n2. Spotify Web App: Dockerized UI with CI/CD pipeline (https://spofity-clone-devops-suhaas.netlify.app/)",
          type: "output"
        });
        break;
      case 'contact':
        newHistory.push({
          text: "Email:    bandari.suhaas12@gmail.com\nGitHub:   https://github.com/suhaascodes\nLinkedIn: https://www.linkedin.com/in/suhaas-bandari-6a6a5a293/",
          type: "output"
        });
        break;
      case 'clear':
        setHistory([]);
        setInput("");
        return;
      default:
        newHistory.push({
          text: `bash: command not found: ${trimmedInput}. Type 'help' for a list of available commands.`,
          type: "error"
        });
    }

    setHistory(newHistory);
    setInput("");
  };

  return (
    <div 
      onClick={focusInput}
      className="w-full bg-black/80 backdrop-blur-md rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden font-mono text-xs text-white max-w-3xl cursor-text mt-12"
      data-aos="fade-up"
    >
      {/* Terminal Title Bar */}
      <div className="bg-white/5 border-b border-white/10 px-4 py-3 flex justify-between items-center select-none">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <span className="text-white/40 text-[10px] font-bold tracking-wider uppercase">suhaas_portfolio_term</span>
        <div className="w-12" /> {/* Spacer */}
      </div>

      {/* Terminal Body */}
      <div className="p-5 min-h-[220px] max-h-[300px] overflow-y-auto flex flex-col gap-2 scrollbar-thin scrollbar-thumb-white/10">
        {history.map((line, idx) => (
          <div 
            key={idx} 
            className={`whitespace-pre-wrap leading-relaxed ${
              line.type === 'command' ? 'text-white font-bold' :
              line.type === 'prompt' ? 'text-gray-400 font-semibold' :
              line.type === 'error' ? 'text-red-400' :
              line.type === 'info' ? 'text-[#ff2a2a] font-bold' : 'text-green-400'
            }`}
          >
            {line.text}
          </div>
        ))}
        
        {/* User Input Prompt */}
        <div className="flex items-center gap-2 text-white font-bold">
          <span className="text-gray-400 shrink-0 select-none">guest@suhaas-portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            className="bg-transparent border-none outline-none focus:ring-0 p-0 m-0 flex-1 font-mono text-xs text-green-400 caret-white"
            autoComplete="off"
            autoCapitalize="off"
            spellCheck="false"
          />
        </div>
        <div ref={terminalEndRef} />
      </div>
    </div>
  );
};

export default DevTerminal;

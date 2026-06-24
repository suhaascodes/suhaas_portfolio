import { useState, useRef, useEffect } from 'react';

const DevTerminal = () => {
  const [history, setHistory] = useState([
    { text: "Welcome to Suhaas' interactive terminal!", type: "info" },
    { text: "Type 'help' to see a list of available commands.", type: "prompt" }
  ]);
  const [input, setInput] = useState("");
  const [isMatrixActive, setIsMatrixActive] = useState(false);
  const terminalBodyRef = useRef(null);
  const inputRef = useRef(null);
  const canvasRef = useRef(null);

  // Auto-scroll to bottom of terminal container only (viewport safe, no page jumps)
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  // Focus input when terminal is clicked
  const focusInput = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    if (!isMatrixActive) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Set canvas dimensions based on terminal container size
    const resizeCanvas = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth - 40; // minus padding
        canvas.height = 220; // matching terminal min-height
      }
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const katakana = "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const alphabet = katakana.split("");

    const fontSize = 12;
    const columns = canvas.width / fontSize;

    const rainDrops = [];
    for (let x = 0; x < columns; x++) {
      rainDrops[x] = 1;
    }

    let animationFrameId;

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0F0'; // Green text
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet[Math.floor(Math.random() * alphabet.length)];
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    // Keydown handler to exit Matrix
    const handleKeyDown = (e) => {
      if (e.key === 'q' || e.key === 'Escape' || (e.ctrlKey && e.key === 'c')) {
        setIsMatrixActive(false);
        setHistory(prev => [...prev, { text: "Matrix simulation terminated.", type: "info" }]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isMatrixActive]);

  const handleCommand = (e) => {
    if (e.key !== 'Enter') return;
    
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    const newHistory = [...history, { text: `guest@suhaas-portfolio:~$ ${trimmedInput}`, type: "command" }];
    const cmd = trimmedInput.toLowerCase().split(' ')[0];

    switch (cmd) {
      case 'help':
        newHistory.push({
          text: "Available commands:\n  about     - Brief bio of Suhaas\n  skills    - List core tech skills & certifications\n  projects  - Show featured development projects\n  contact   - Get contact info and social handles\n  matrix    - Enter the digital code rain storm\n  clear     - Clear the terminal screen",
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
      case 'sudo':
        newHistory.push({
          text: "guest is not in the sudoers file. This incident will be reported to the FBI :).",
          type: "error"
        });
        break;
      case 'matrix':
        setIsMatrixActive(true);
        setHistory(newHistory);
        setInput("");
        return;
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
      id="dev-terminal"
      onClick={focusInput}
      className="w-full bg-black/80 backdrop-blur-md rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden font-mono text-xs text-white max-w-3xl cursor-text mt-0"
      data-aos="fade-up"
    >
      {/* Terminal Title Bar */}
      <div className="bg-white/5 border-b border-white/10 px-4 py-3 flex justify-between items-center select-none">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <span className="text-white/50 text-[10px] font-bold tracking-wider uppercase font-sans">SUHAAS_PORTFOLIO TERMINAL</span>
        <div className="w-12" /> {/* Spacer */}
      </div>

      {/* Terminal Body */}
      <div 
        ref={terminalBodyRef}
        className="p-5 min-h-[220px] max-h-[300px] overflow-y-auto flex flex-col gap-2 scrollbar-thin scrollbar-thumb-white/10 scroll-smooth"
      >
        {isMatrixActive ? (
          <div className="relative w-full h-[220px] overflow-hidden flex flex-col items-center select-none pointer-events-none">
            <canvas ref={canvasRef} className="w-full h-full block bg-black" />
            <div className="absolute bottom-2 left-4 text-[10px] text-green-400/80 font-mono bg-black/80 px-2 py-0.5 rounded border border-green-500/20 select-none animate-pulse">
              Press 'q' or 'ESC' to exit
            </div>
          </div>
        ) : (
          <>
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
            
            {/* User Input Prompt with Blinking Block Cursor */}
            <div className="flex items-start gap-1.5 text-white font-bold relative min-h-[16px]">
              <span className="text-gray-400 shrink-0 select-none">guest@suhaas-portfolio:~$</span>
              
              <div className="relative flex-grow min-w-0">
                {/* Hidden Input field capturing events */}
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleCommand}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-text z-20 outline-none border-none p-0 m-0"
                  autoComplete="off"
                  autoCapitalize="off"
                  spellCheck="false"
                />
                {/* Visual simulation of prompt input & flashing block */}
                <div className="font-mono text-xs text-green-400 flex items-center whitespace-pre-wrap break-all pointer-events-none relative z-10 leading-relaxed">
                  <span>{input}</span>
                  <span className="w-1.5 h-3.5 bg-green-400 ml-0.5 animate-blink inline-block shrink-0" />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DevTerminal;

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SiPython, 
  SiJavascript, 
  SiHtml5, 
  SiReact, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiMysql, 
  SiDocker, 
  SiGithubactions, 
  SiGit 
} from 'react-icons/si';
import { FaJava, FaCss3Alt } from 'react-icons/fa';
import { TbBinaryTree, TbTerminal2 } from 'react-icons/tb';
import { GrOracle } from 'react-icons/gr';

const skillsData = [
  // Languages
  {
    name: "Java",
    category: "languages",
    level: "90%",
    icon: <FaJava className="w-8 h-8" />,
    log: `guest@suhaas-portfolio:~$ javac Developer.java && java Developer
Compiling source files...
[OK] Compilation successful.
Executing JVM binary...
---------------------------------------------
Java Version: JDK 21 (LTS)
Primary Focus: Object Oriented Programming (OOPS)
Key Areas: Multithreading, API Design, Streams
Status: "Enterprise backend stack loaded."`
  },
  {
    name: "Python",
    category: "languages",
    level: "75%",
    icon: <SiPython className="w-8 h-8" />,
    log: `guest@suhaas-portfolio:~$ python3 -m venv env && source env/bin/activate
(env) guest@suhaas-portfolio:~$ python3 -c "import numpy; import pandas; print('Core Libraries Verified!')"
[OK] NumPy & Pandas initialized.
Model Accuracy: 94.2% (Test Set validation)
Execution Time: 0.12 seconds
Status: "Python data & scripting stack active."`
  },
  {
    name: "JavaScript",
    category: "languages",
    level: "88%",
    icon: <SiJavascript className="w-8 h-8" />,
    log: `guest@suhaas-portfolio:~$ node -v && node server.js
v20.11.0
Initializing V8 engine context...
ESM compilation enabled.
Event Loop initialized.
Status: "JavaScript runtime listening for callbacks..."`
  },
  {
    name: "HTML5",
    category: "languages",
    level: "92%",
    icon: <SiHtml5 className="w-8 h-8" />,
    log: `guest@suhaas-portfolio:~$ cat index.html
<!DOCTYPE html>
<html lang="en">
  <head><title>Suhaas Bandari</title></head>
  <body><div id="root">Semantic elements loaded.</div></body>
</html>`
  },
  {
    name: "CSS3",
    category: "languages",
    level: "90%",
    icon: <FaCss3Alt className="w-8 h-8" />,
    log: `guest@suhaas-portfolio:~$ npm run tailwind-build
Processing index.css...
Applying Tailwind directives...
Bundled index.css in 12ms (Size: 83.7KB)
Status: "Responsive CSS compilation complete."`
  },
  // Frontend
  {
    name: "React.js",
    category: "frontend",
    level: "88%",
    icon: <SiReact className="w-8 h-8" />,
    log: `guest@suhaas-portfolio:~$ npm run build --vite
vite v8.0.16 building React application...
transforming... ✓ 447 modules transformed.
rendering chunks...
dist/index.html                     2.08 kB
dist/assets/index-BcgGZZI7.js     407.18 kB
[SUCCESS] React bundle compiled successfully.`
  },
  // Backend & Databases
  {
    name: "Node.js",
    category: "backend",
    level: "82%",
    icon: <SiNodedotjs className="w-8 h-8" />,
    log: `guest@suhaas-portfolio:~$ node index.js
[NODE] Running process in environment: production
V8 Heap Size: 32MB / 512MB
Garbage Collection listener initialized.
Status: "Ready to handle async events."`
  },
  {
    name: "Express.js",
    category: "backend",
    level: "80%",
    icon: <SiExpress className="w-8 h-8" />,
    log: `guest@suhaas-portfolio:~$ express-router --init
[EXPRESS] Rest API Router online.
[INFO] Server running on port 5000...
GET /api/v1/projects 200 OK (14ms)
POST /api/v1/contact 201 Created (42ms)`
  },
  {
    name: "MongoDB",
    category: "databases",
    level: "85%",
    icon: <SiMongodb className="w-8 h-8" />,
    log: `guest@suhaas-portfolio:~$ mongosh --host cluster0
Connecting to Atlas DB instance...
Connected to: db_portfolio
db.skills.find({ category: "databases" })
[Document] { name: "MongoDB", status: "Active", connections: 140 }`
  },
  {
    name: "SQL & Databases",
    category: "databases",
    level: "84%",
    icon: <SiMysql className="w-8 h-8" />,
    log: `guest@suhaas-portfolio:~$ mysql -u suhaas -p --execute="SELECT * FROM skills"
Enter password: ****
+-----------+------------+-------+
| name      | category   | level |
+-----------+------------+-------+
| SQL       | databases  | 84%   |
+-----------+------------+-------+`
  },
  // DevOps & Cloud
  {
    name: "Docker",
    category: "devops",
    level: "80%",
    icon: <SiDocker className="w-8 h-8" />,
    log: `guest@suhaas-portfolio:~$ docker-compose up -d --build
Building container services...
Recreating portfolio_web_1 ... done
Attaching to portfolio_web_1
Container Status: Healthy (Mapped Port: 80 -> 8080)`
  },
  {
    name: "Oracle Cloud (OCI)",
    category: "devops",
    level: "85%",
    icon: <GrOracle className="w-8 h-8" />,
    log: `guest@suhaas-portfolio:~$ oci os bucket create --name suhaas-artifacts
Creating Object Storage bucket...
Region: us-phoenix-1
Compartment OCID: ocid1.compartment.oc1..aaaaaa...
Bucket Created: "suhaas-artifacts"`
  },
  {
    name: "CI/CD & Actions",
    category: "devops",
    level: "78%",
    icon: <SiGithubactions className="w-8 h-8" />,
    log: `guest@suhaas-portfolio:~$ gh run watch
Waiting for GitHub Action pipeline...
Jobs: Build [OK], Lint [OK], Deploy [OK]
Result: Released to Production Environment.`
  },
  {
    name: "Git & GitHub",
    category: "devops",
    level: "90%",
    icon: <SiGit className="w-8 h-8" />,
    log: `guest@suhaas-portfolio:~$ git status
On branch main
Changes to commit: modified: Skills.jsx
guest@suhaas-portfolio:~$ git commit -m "feat: custom console debugger"
[main c2a81f3] feat: custom console debugger
guest@suhaas-portfolio:~$ git push origin main`
  },
  // CS Fundamentals
  {
    name: "Data Structures & Algos",
    category: "fundamentals",
    level: "85%",
    icon: <TbBinaryTree className="w-8 h-8" />,
    log: `guest@suhaas-portfolio:~$ ./dsa-run --algo=binary-search
Initializing sorted array... [1..100]
Searching for target element...
[SUCCESS] Target found at Index 42.
Time Complexity: O(log N) | Space: O(1)`
  },
  {
    name: "CS Theory (OS, DBMS, CN)",
    category: "fundamentals",
    level: "88%",
    icon: <TbTerminal2 className="w-8 h-8" />,
    log: `guest@suhaas-portfolio:~$ sysctl -n hw.ncpu && netstat -r
CPU Cores: 8
Kernel IP Routing Table:
Destination: 192.168.1.1, Gateway: 0.0.0.0, Flags: U`
  }
];

const categories = [
  { id: 'all', label: 'All' },
  { id: 'languages', label: 'Languages' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'databases', label: 'Databases' },
  { id: 'devops', label: 'Cloud & DevOps' },
  { id: 'fundamentals', label: 'CS Fundamentals' }
];

// Web Audio API Retro Sound Effects Synthesizer (Zero external dependencies)
const playSound = (type) => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    if (type === 'shoot') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.12);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.12);
    } else if (type === 'hit') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(180, ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(30, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.15);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.15);
    } else if (type === 'catch') {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, now); // D5
      osc.frequency.setValueAtTime(880.00, now + 0.08); // A5
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.2);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(now + 0.2);
    } else if (type === 'gameover') {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(261.63, now); // C4
      osc.frequency.linearRampToValueAtTime(130.81, now + 0.2); // C3
      osc.frequency.setValueAtTime(130.81, now + 0.2);
      osc.frequency.linearRampToValueAtTime(65.41, now + 0.5); // C2
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.5);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(now + 0.5);
    } else if (type === 'victory') {
      const now = ctx.currentTime;
      const playNote = (freq, start, duration) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + start);
        gain.gain.setValueAtTime(0.15, now + start);
        gain.gain.linearRampToValueAtTime(0.01, now + start + duration);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + start);
        osc.stop(now + start + duration);
      };
      playNote(523.25, 0, 0.1);    // C5
      playNote(659.25, 0.1, 0.1);  // E5
      playNote(783.99, 0.2, 0.1);  // G5
      playNote(1046.50, 0.3, 0.35); // C6
    }
  } catch (e) {
    console.warn("Audio Context error: ", e);
  }
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [terminalLog, setTerminalLog] = useState(`Welcome to Suhaas' interactive compiler console!
Click on any tech stack card to execute debugger logs.
Type 'play' or click the [🕹️ Play Arcade] button to start a game.

guest@suhaas-portfolio:~$`);
  const [isArcadeActive, setIsArcadeActive] = useState(false);
  const [gameStatus, setGameStatus] = useState('start'); // 'start' | 'playing' | 'gameover' | 'victory'

  const canvasRef = useRef(null);
  const keysPressed = useRef({});
  const gameLoopRef = useRef(null);
  const typingIntervalRef = useRef(null);
  const gameScoreRef = useRef(0);
  const gameLivesRef = useRef(3);

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter(skill => skill.category === activeCategory);

  const handleCardClick = (skill) => {
    // If arcade is active, deactivate it to show the logs
    if (isArcadeActive) {
      setIsArcadeActive(false);
      setGameStatus('start');
    }
    
    // Typewriter effect
    const text = skill.log;
    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
    }
    
    let index = 0;
    setTerminalLog('');
    
    typingIntervalRef.current = setInterval(() => {
      if (index < text.length) {
        const nextChar = text.charAt(index);
        setTerminalLog((prev) => prev + nextChar);
        index++;
      } else {
        clearInterval(typingIntervalRef.current);
      }
    }, 8); // 8ms per character is highly readable and satisfying
  };

  // Cleanup typing interval on unmount
  useEffect(() => {
    return () => {
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
      }
    };
  }, []);

  // Prevent browser scrolling when inside the canvas game
  useEffect(() => {
    const preventScroll = (e) => {
      if (isArcadeActive && ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' ', 'Spacebar'].includes(e.key)) {
        e.preventDefault();
      }
    };
    window.addEventListener('keydown', preventScroll);
    return () => window.removeEventListener('keydown', preventScroll);
  }, [isArcadeActive]);

  // Canvas Game Implementation: "Tech-Stack Invaders"
  useEffect(() => {
    if (!isArcadeActive) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Dimensions
    const width = 450;
    const height = 240;
    canvas.width = width;
    canvas.height = height;

    // Game objects
    let player = {
      x: width / 2 - 15,
      y: height - 25,
      w: 30,
      h: 12,
      speed: 6
    };

    let bullets = [];
    let enemies = [];
    let enemySpawnTimer = 0;
    let lastTime = 0;
    let transitionTriggered = false;

    const labels = ["BUG", "ERR", "LAG", "CRASH", "FATAL"];

    // Keyboard handlers
    const handleKeyDown = (e) => {
      keysPressed.current[e.key] = true;
      if (e.key === ' ' || e.key === 'Spacebar') {
        if (gameStatus === 'playing') {
          // Shoot bullet
          bullets.push({
            x: player.x + player.w / 2 - 1,
            y: player.y - 6,
            w: 2,
            h: 6,
            speed: 7
          });
          playSound('shoot');
        } else {
          // Reset
          gameScoreRef.current = 0;
          gameLivesRef.current = 3;
          bullets = [];
          enemies = [];
          setGameStatus('playing');
          playSound('catch');
        }
      }
    };

    const handleKeyUp = (e) => {
      keysPressed.current[e.key] = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    // Mobile touch helpers (moveLeft/moveRight now directly managed by keysPressed refs)
    window.mobileShoot = () => {
      if (gameStatus === 'playing') {
        bullets.push({
          x: player.x + player.w / 2 - 1,
          y: player.y - 6,
          w: 2,
          h: 6,
          speed: 7
        });
        playSound('shoot');
      } else {
        gameScoreRef.current = 0;
        gameLivesRef.current = 3;
        bullets = [];
        enemies = [];
        setGameStatus('playing');
        playSound('catch');
      }
    };

    const updateGame = (time) => {
      const dt = time - lastTime;
      lastTime = time;

      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, width, height);

      if (gameStatus === 'start') {
        // Draw Start Screen
        ctx.fillStyle = '#ff2a2a';
        ctx.font = '16px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('BUG CATCHER ARCADE', width / 2, height / 2 - 30);
        ctx.fillStyle = '#ffffff';
        ctx.font = '10px monospace';
        ctx.fillText('👉 CATCH falling bugs to debug them (+100 XP)! 👈', width / 2, height / 2 - 5);
        ctx.fillStyle = '#ff5f56';
        ctx.fillText('⚠️ Or SHOOT them with SPACEBAR! ⚠️', width / 2, height / 2 + 15);
        ctx.fillStyle = '#fff';
        ctx.font = '10px monospace';
        ctx.fillText('If bugs escape to production (reach bottom) you lose lives!', width / 2, height / 2 + 32);
        ctx.fillStyle = '#ffffff';
        ctx.font = '12px monospace';
        ctx.fillText('Press SPACE (or tap SHOOT) to start', width / 2, height / 2 + 52);
      } else if (gameStatus === 'gameover') {
        // Draw Game Over
        ctx.fillStyle = '#ff2a2a';
        ctx.font = '16px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('SYSTEM CRASHED (GAME OVER)', width / 2, height / 2 - 20);
        ctx.fillStyle = '#fff';
        ctx.font = '11px monospace';
        ctx.fillText("Too many bugs escaped to production!", width / 2, height / 2 + 2);
        ctx.fillText(`Final Score: ${gameScoreRef.current} XP`, width / 2, height / 2 + 22);
        ctx.fillStyle = '#888';
        ctx.fillText('Press SPACE to reboot system', width / 2, height / 2 + 45);
      } else if (gameStatus === 'victory') {
        // Draw Victory
        ctx.fillStyle = '#4ade80';
        ctx.font = '16px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('ALL BUGS COMPILED! (VICTORY)', width / 2, height / 2 - 10);
        ctx.fillStyle = '#fff';
        ctx.font = '12px monospace';
        ctx.fillText(`Final Score: ${gameScoreRef.current} XP`, width / 2, height / 2 + 15);
        ctx.fillStyle = '#888';
        ctx.fillText('Press SPACE to play again', width / 2, height / 2 + 40);
      } else if (gameStatus === 'playing') {
        if (transitionTriggered) return;

        // 1. Move Player
        if (keysPressed.current['ArrowLeft'] || keysPressed.current['a'] || keysPressed.current['A']) {
          player.x = Math.max(0, player.x - player.speed);
        }
        if (keysPressed.current['ArrowRight'] || keysPressed.current['d'] || keysPressed.current['D']) {
          player.x = Math.min(width - player.w, player.x + player.speed);
        }

        // 2. Spawn Enemies
        enemySpawnTimer += dt || 16;
        if (enemySpawnTimer > 1200) {
          enemies.push({
            x: Math.random() * (width - 40) + 10,
            y: -10,
            w: 40,
            h: 18,
            label: labels[Math.floor(Math.random() * labels.length)],
            speed: 1.5 + Math.random() * 0.8
          });
          enemySpawnTimer = 0;
        }

        // 3. Move & filter bullets
        bullets = bullets.map(b => ({ ...b, y: b.y - b.speed })).filter(b => b.y > 0);

        // 4. Move enemies
        enemies.forEach(e => {
          e.y += e.speed;
        });

        // 5. Collision checks: bullet vs enemy
        let bulletsToRemove = new Set();
        let enemiesToRemove = new Set();

        bullets.forEach((b, bIdx) => {
          enemies.forEach((e, eIdx) => {
            if (
              b.x < e.x + e.w &&
              b.x + b.w > e.x &&
              b.y < e.y + e.h &&
              b.y + b.h > e.y
            ) {
              bulletsToRemove.add(bIdx);
              enemiesToRemove.add(eIdx);
              gameScoreRef.current += 100;
              playSound('hit');
            }
          });
        });

        // 6. Collision checks: player catches enemy
        enemies.forEach((e, eIdx) => {
          if (
            !enemiesToRemove.has(eIdx) &&
            player.x < e.x + e.w &&
            player.x + player.w > e.x &&
            player.y < e.y + e.h &&
            player.y + player.h > e.y
          ) {
            enemiesToRemove.add(eIdx);
            gameScoreRef.current += 100;
            playSound('catch');
          }
        });

        // Check for victory condition after hits/catches
        if (gameScoreRef.current >= 1000) {
          transitionTriggered = true;
          setGameStatus('victory');
          playSound('victory');
        }

        // Apply removals
        bullets = bullets.filter((_, idx) => !bulletsToRemove.has(idx));
        
        let enemiesReachingBottomCount = 0;
        enemies = enemies.filter((e, idx) => {
          if (enemiesToRemove.has(idx)) {
            return false;
          }
          if (e.y + e.h >= height) {
            enemiesReachingBottomCount++;
            return false;
          }
          return true;
        });

        if (enemiesReachingBottomCount > 0) {
          gameLivesRef.current = Math.max(0, gameLivesRef.current - enemiesReachingBottomCount);
          if (gameLivesRef.current <= 0) {
            transitionTriggered = true;
            setGameStatus('gameover');
            playSound('gameover');
          }
        }

        // Draw Player Ship
        ctx.fillStyle = '#ff2a2a';
        ctx.fillRect(player.x, player.y, player.w, player.h);
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(player.x + player.w / 2 - 3, player.y - 4, 6, 4); // Cannon

        // Draw Bullets
        ctx.fillStyle = '#ff2a2a';
        bullets.forEach(b => {
          ctx.fillRect(b.x, b.y, b.w, b.h);
        });

        // Draw Enemies
        enemies.forEach(e => {
          ctx.strokeStyle = '#ff2a2a';
          ctx.strokeRect(e.x, e.y, e.w, e.h);
          ctx.fillStyle = '#220000';
          ctx.fillRect(e.x + 1, e.y + 1, e.w - 2, e.h - 2);

          ctx.fillStyle = '#ff2a2a';
          ctx.font = '8px monospace';
          ctx.textAlign = 'center';
          ctx.fillText(e.label, e.x + e.w / 2, e.y + 12);
        });

        // Draw HUD inside canvas
        ctx.fillStyle = '#888';
        ctx.font = '10px monospace';
        ctx.textAlign = 'left';
        ctx.fillText(`SCORE: ${gameScoreRef.current} XP`, 10, 20);
        ctx.textAlign = 'right';
        ctx.fillText(`LIVES: ${'❤️'.repeat(gameLivesRef.current)}`, width - 10, 20);
      }

      gameLoopRef.current = requestAnimationFrame(updateGame);
    };

    gameLoopRef.current = requestAnimationFrame(updateGame);

    return () => {
      cancelAnimationFrame(gameLoopRef.current);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      delete window.mobileShoot;
    };
  }, [isArcadeActive, gameStatus]);

  const toggleArcade = () => {
    if (isArcadeActive) {
      setIsArcadeActive(false);
      setGameStatus('start');
      setTerminalLog(`Welcome to Suhaas' interactive compiler console!
Click on any tech stack card to execute debugger logs.
Type 'play' or click the [🕹️ Play Arcade] button to start a game.

guest@suhaas-portfolio:~$`);
    } else {
      setIsArcadeActive(true);
      setGameStatus('start');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.96 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { 
        type: "spring",
        stiffness: 110,
        damping: 15
      } 
    },
    exit: { opacity: 0, scale: 0.94, transition: { duration: 0.2 } }
  };

  return (
    <section 
      id="skills" 
      className="bg-[#000000] py-32 px-6 md:px-12 w-full relative border-t border-gray-900 font-sans"
    >
      {/* Subtle brand red gradient blur in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-950/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Title Block matching the rest of the site */}
        <div data-aos="fade-up" className="mb-20">
          <span className="text-[#ff2a2a] text-xs font-bold tracking-[0.2em] uppercase block mb-3 font-creative">
            Technical Stack
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight font-heading">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-[#ff2a2a] mt-6"></div>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Categories and Grid of Cards (Takes 7 columns on large screens) */}
          <div className="lg:col-span-7 flex flex-col gap-8 w-full">
            
            {/* Categories Tab Bar */}
            <div 
              data-aos="fade-up" 
              data-aos-delay="100" 
              className="flex flex-wrap gap-2.5"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    if (isArcadeActive) toggleArcade();
                    setActiveCategory(category.id);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider transition-all duration-300 cursor-pointer border ${
                    activeCategory === category.id
                      ? 'border-[#ff2a2a] bg-[#ff2a2a] text-white shadow-[0_0_12px_rgba(255,42,42,0.4)]'
                      : 'border-white/10 bg-white/5 text-gray-300 hover:text-white hover:border-white/30'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Skills Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-2 sm:grid-cols-3 gap-4"
            >
              <AnimatePresence mode="popLayout">
                {filteredSkills.map((skill) => (
                  <motion.div
                    layout
                    key={skill.name}
                    variants={cardVariants}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    onClick={() => handleCardClick(skill)}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="group relative bg-white/5 border border-white/10 rounded-3xl p-5 flex flex-col justify-between min-h-[160px] backdrop-blur-md transition-all duration-300 hover:bg-white/[0.08] hover:border-[#ff2a2a]/30 hover:shadow-[0_12px_24px_rgba(255,42,42,0.15)] cursor-pointer"
                  >
                    {/* Card Top: Logo and Level indicator */}
                    <div className="flex justify-between items-start mb-4">
                      {/* Icon */}
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-gray-300 group-hover:text-[#ff2a2a] group-hover:bg-[#ff2a2a]/5 group-hover:border-[#ff2a2a]/20 transition-all duration-300 flex items-center justify-center shrink-0">
                        {skill.icon}
                      </div>

                      {/* Level percent badge */}
                      <span className="text-[9px] font-creative font-bold uppercase tracking-wider text-gray-400 group-hover:text-white transition-colors duration-300 bg-white/5 border border-white/5 px-2 py-0.5 rounded-md">
                        {skill.level}
                      </span>
                    </div>

                    {/* Card Bottom: Title & Progress Bar */}
                    <div>
                      <h3 className="text-white text-xs md:text-sm font-bold font-heading mb-3 tracking-tight group-hover:text-[#ff2a2a] transition-colors duration-300">
                        {skill.name}
                      </h3>

                      {/* Unified Crimson Red Progress Bar */}
                      <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden relative">
                        <motion.div 
                          className="h-full absolute top-0 left-0 rounded-full bg-[#ff2a2a]"
                          style={{ width: skill.level }}
                          initial={{ scaleX: 0, originX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                        />
                      </div>
                    </div>

                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Right Column: Console Debugger / Arcade Game (Takes 5 columns) */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-[#050505] rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden font-mono text-xs text-white w-full">
              
              {/* Console Title Bar */}
              <div className="bg-white/5 border-b border-white/10 px-4 py-3.5 flex justify-between items-center select-none">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                </div>
                <span className="text-white/50 text-[9px] font-bold tracking-wider uppercase font-creative">
                  {isArcadeActive ? "ARCADE MODE: IN-GAME" : "COMPILER CONSOLE"}
                </span>
                
                {/* Arcade Switch Button */}
                <button 
                  onClick={toggleArcade}
                  className={`px-3 py-1 rounded-md text-[9px] font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                    isArcadeActive 
                      ? 'bg-[#ff2a2a] text-white border border-[#ff2a2a]'
                      : 'bg-white/5 border border-white/10 text-gray-300 hover:border-[#ff2a2a] hover:text-[#ff2a2a]'
                  }`}
                >
                  {isArcadeActive ? "Exit Game" : "Play Arcade"}
                </button>
              </div>

              {/* Console Body Area */}
              <div className="p-5 min-h-[250px] relative bg-black flex flex-col justify-between">
                
                {isArcadeActive ? (
                  /* Arcade Mode */
                  <div className="flex flex-col gap-4 items-center">
                    <canvas 
                      ref={canvasRef} 
                      className="border border-white/5 bg-black rounded-lg block max-w-full cursor-none shadow-[0_0_20px_rgba(0,0,0,0.8)]"
                    />
                    
                    {/* Mobile/Touch Controls Overlay (Hidden on desktop) */}
                    <div className="flex justify-between items-center w-full max-w-[280px] mt-2 gap-4 select-none lg:hidden">
                      <div className="flex gap-2">
                        <button 
                          onMouseDown={(e) => { e.preventDefault(); keysPressed.current['ArrowLeft'] = true; }}
                          onTouchStart={(e) => { e.preventDefault(); keysPressed.current['ArrowLeft'] = true; }}
                          onMouseUp={() => { keysPressed.current['ArrowLeft'] = false; }}
                          onMouseLeave={() => { keysPressed.current['ArrowLeft'] = false; }}
                          onTouchEnd={() => { keysPressed.current['ArrowLeft'] = false; }}
                          className="w-10 h-10 bg-white/10 border border-white/10 active:bg-white/20 active:border-[#ff2a2a] rounded-xl flex items-center justify-center font-bold text-lg cursor-pointer select-none"
                        >
                          ◀
                        </button>
                        <button 
                          onMouseDown={(e) => { e.preventDefault(); keysPressed.current['ArrowRight'] = true; }}
                          onTouchStart={(e) => { e.preventDefault(); keysPressed.current['ArrowRight'] = true; }}
                          onMouseUp={() => { keysPressed.current['ArrowRight'] = false; }}
                          onMouseLeave={() => { keysPressed.current['ArrowRight'] = false; }}
                          onTouchEnd={() => { keysPressed.current['ArrowRight'] = false; }}
                          className="w-10 h-10 bg-white/10 border border-white/10 active:bg-white/20 active:border-[#ff2a2a] rounded-xl flex items-center justify-center font-bold text-lg cursor-pointer select-none"
                        >
                          ▶
                        </button>
                      </div>
                      <button 
                        onClick={(e) => { e.preventDefault(); window.mobileShoot?.(); }}
                        onTouchStart={(e) => { e.preventDefault(); window.mobileShoot?.(); }}
                        className="flex-grow h-10 bg-[#ff2a2a] active:bg-[#d01e1e] font-black tracking-widest text-xs uppercase rounded-xl flex items-center justify-center cursor-pointer shadow-lg"
                      >
                        🚀 Shoot / Play
                      </button>
                    </div>

                    <div className="text-[9px] text-gray-500 font-mono select-none text-center hidden lg:block">
                      Use A/D or Arrow keys to move &bull; Spacebar to shoot/restart
                    </div>
                  </div>
                ) : (
                  /* Code Output Log Mode */
                  <div className="whitespace-pre-wrap leading-relaxed text-gray-300 break-all select-all selection:bg-[#ff2a2a]/20">
                    {terminalLog}
                    <span className="text-[#ff2a2a] animate-blink ml-1">█</span>
                  </div>
                )}
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Torn paper divider at bottom transitioning to Services (white) */}
      <div className="absolute -bottom-[4px] left-0 w-full pointer-events-none z-30 transform translate-y-[4px]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Skills;

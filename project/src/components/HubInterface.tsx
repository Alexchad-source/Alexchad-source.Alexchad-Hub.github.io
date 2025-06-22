import React, { useState, useEffect } from 'react';
import { Terminal, Copy, Check, Shield, Zap, Globe } from 'lucide-react';

export const HubInterface: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [loadString, setLoadString] = useState('');
  const [terminalText, setTerminalText] = useState('');

  const fullText = "loadstring(game:HttpGet('https://raw.githubusercontent.com/alexchad/hub/main/loader.lua'))()";

  useEffect(() => {
    // Typewriter effect for terminal
    const text = "INITIALIZING ALEXCHAD HUB...";
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        setTerminalText(text.substring(0, i + 1));
        i++;
        setTimeout(typeWriter, 100);
      }
    };
    typeWriter();
  }, []);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(loadString || fullText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Terminal Header */}
        <div className="bg-gray-900/90 backdrop-blur-sm border border-green-500/30 rounded-t-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <Terminal className="w-4 h-4 text-green-400 ml-4" />
            <span className="text-green-400 text-sm font-mono">alexchad@hub:~$</span>
          </div>
          <div className="text-green-400 font-mono text-sm">
            {terminalText}<span className="animate-pulse">|</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-black/90 backdrop-blur-sm border-x border-green-500/30 p-8">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 font-mono">
              ALEXCHAD HUB
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto mb-6"></div>
            <p className="text-green-300 text-xl font-mono leading-relaxed max-w-2xl mx-auto">
              The ultimate <span className="text-blue-400 font-bold">FREE</span> and <span className="text-purple-400 font-bold">KEYLESS</span> exploitation hub for Roblox games. 
              Access premium scripts, advanced features, and exclusive tools without any restrictions.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-900/50 border border-green-500/20 rounded-lg p-6 hover:border-green-500/40 transition-all duration-300">
              <Shield className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-green-300 font-bold text-lg mb-2 font-mono">100% FREE</h3>
              <p className="text-gray-400 text-sm">No premium subscriptions, no hidden fees. Everything is completely free forever.</p>
            </div>
            <div className="bg-gray-900/50 border border-blue-500/20 rounded-lg p-6 hover:border-blue-500/40 transition-all duration-300">
              <Zap className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-blue-300 font-bold text-lg mb-2 font-mono">NO KEYS</h3>
              <p className="text-gray-400 text-sm">Skip the annoying key system. Instant access to all features without verification.</p>
            </div>
            <div className="bg-gray-900/50 border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/40 transition-all duration-300">
              <Globe className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-purple-300 font-bold text-lg mb-2 font-mono">UNIVERSAL</h3>
              <p className="text-gray-400 text-sm">Works on all popular Roblox games with regular updates and new features.</p>
            </div>
          </div>

          {/* Load String Section */}
          <div className="bg-gray-900/70 border border-green-500/30 rounded-lg p-6">
            <h2 className="text-green-400 text-2xl font-bold mb-4 font-mono flex items-center">
              <Terminal className="w-6 h-6 mr-2" />
              EXECUTION SCRIPT
            </h2>
            <p className="text-gray-300 mb-4 font-mono text-sm">
              Copy and paste this loadstring into your executor:
            </p>
            
            <div className="relative">
              <textarea
                value={loadString || fullText}
                onChange={(e) => setLoadString(e.target.value)}
                placeholder="Your loadstring will appear here..."
                className="w-full bg-black/80 border border-green-500/30 rounded-lg p-4 text-green-400 font-mono text-sm resize-none focus:outline-none focus:border-green-500/60 transition-colors"
                rows={3}
              />
              <button
                onClick={copyToClipboard}
                className="absolute top-2 right-2 bg-green-600/20 hover:bg-green-600/40 border border-green-500/30 rounded-lg p-2 text-green-400 transition-all duration-300 hover:scale-105"
                title="Copy to clipboard"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            
            {copied && (
              <div className="mt-2 text-green-400 text-sm font-mono animate-pulse">
                ✓ Copied to clipboard!
              </div>
            )}
          </div>

          {/* Warning */}
          <div className="mt-6 bg-red-900/20 border border-red-500/30 rounded-lg p-4">
            <p className="text-red-400 text-sm font-mono">
              <span className="font-bold">⚠️ WARNING:</span> Use at your own risk. This tool is for educational purposes only. 
              We are not responsible for any account actions taken by Roblox.
            </p>
          </div>
        </div>

        {/* Terminal Footer */}
        <div className="bg-gray-900/90 backdrop-blur-sm border border-green-500/30 rounded-b-lg p-4">
          <div className="text-green-400 font-mono text-xs text-center">
            ALEXCHAD HUB v2.1.0 | STATUS: <span className="text-green-300">ONLINE</span> | 
            USERS: <span className="text-blue-400">1,337</span> | 
            LAST UPDATE: <span className="text-purple-400">2024-01-15</span>
          </div>
        </div>
      </div>
    </div>
  );
};
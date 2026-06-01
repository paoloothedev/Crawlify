import React from 'react';
import { Github, Instagram, Linkedin, Globe } from 'lucide-react';

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69A4.83 4.83 0 0 1 15.82 2.44v-.44h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.9 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.3 0 .59.05.86.14v-3.5a6.37 6.37 0 0 0-.86-.05A6.34 6.34 0 0 0 3.12 15.7a6.34 6.34 0 0 0 6.35 6.34 6.34 6.34 0 0 0 6.35-6.34V11.2a8.24 8.24 0 0 0 4.77 1.5v-3.45a4.84 4.84 0 0 1-3-2.56z" />
    </svg>
  );
}

export function FloatingSocialBalls() {
  const baseLinks = [
    {
      icon: <Github className="h-4 w-4" />,
      url: "https://github.com/paoloothedev",
      color: "bg-gradient-to-br from-gray-800/80 to-gray-600/80 hover:from-gray-800 hover:to-gray-600",
    },
    {
      icon: <Instagram className="h-4 w-4" />,
      url: "https://instagram.com/paoloothedev",
      color: "bg-gradient-to-br from-pink-600/80 to-purple-600/80 hover:from-pink-600 hover:to-purple-600",
    },
    {
      icon: <TikTokIcon className="h-4 w-4" />,
      url: "https://tiktok.com/@paoloothedev",
      color: "bg-gradient-to-br from-gray-900/80 to-gray-700/80 hover:from-gray-900 hover:to-gray-700",
    },
    {
      icon: <Linkedin className="h-4 w-4" />,
      url: "https://linkedin.com/in/yousef-mohamad-073814355",
      color: "bg-gradient-to-br from-blue-600/80 to-blue-400/80 hover:from-blue-600 hover:to-blue-400",
    },
    {
      icon: <Globe className="h-4 w-4" />,
      url: "https://paoloothedev.com",
      color: "bg-gradient-to-br from-green-500/80 to-emerald-400/80 hover:from-green-500 hover:to-emerald-400",
    }
  ];

  const links = [...Array(3)].flatMap(() => 
    baseLinks.map((link, i) => ({
      ...link,
      animation: `animate-float-${(i % 3) + 1}`
    }))
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden floating-container">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`absolute pointer-events-auto p-3 rounded-full backdrop-blur-sm 
            ${link.color} ${link.animation} text-white shadow-lg 
            transform transition-all duration-300 
            hover:scale-125 hover:shadow-xl hover:z-10`}
          style={{
            left: `${10 + (Math.sin(index * 0.5) * 15 + (index * 5))%80}%`,
            top: `${15 + (Math.cos(index * 0.5) * 20 + (index * 3))%70}%`,
            transform: `translateZ(${index * 5}px)`,
            opacity: 0.9
          }}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}

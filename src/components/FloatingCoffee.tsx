import React from 'react';
import { Github, Instagram, Linkedin, Globe } from 'lucide-react';
import { useThemeStore } from '../lib/theme';

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69A4.83 4.83 0 0 1 15.82 2.44v-.44h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.9 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.3 0 .59.05.86.14v-3.5a6.37 6.37 0 0 0-.86-.05A6.34 6.34 0 0 0 3.12 15.7a6.34 6.34 0 0 0 6.35 6.34 6.34 6.34 0 0 0 6.35-6.34V11.2a8.24 8.24 0 0 0 4.77 1.5v-3.45a4.84 4.84 0 0 1-3-2.56z" />
    </svg>
  );
}

export function FloatingCoffee() {
  const isDarkMode = useThemeStore(state => state.isDarkMode);
  const links = [
    {
      icon: <Github className="h-6 w-6" />,
      url: "https://github.com/paoloothedev",
      color: "hover:text-gray-700"
    },
    {
      icon: <Instagram className="h-6 w-6" />,
      url: "https://instagram.com/paoloothedev",
      color: "hover:text-pink-600"
    },
    {
      icon: <TikTokIcon className="h-6 w-6" />,
      url: "https://tiktok.com/@paoloothedev",
      color: "hover:text-gray-900"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      url: "https://linkedin.com/in/yousef-mohamad-073814355",
      color: "hover:text-blue-600"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      url: "https://paoloothedev.com",
      color: "hover:text-green-500"
    }
  ];

  return (
    <div className="fixed right-4 bottom-8 z-50 flex items-center gap-2">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${link.color} p-2 rounded-full ${isDarkMode ? 'text-white' : 'text-gray-800'} shadow-lg 
            transform transition-all duration-200 hover:scale-110 hover:shadow-xl`}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}

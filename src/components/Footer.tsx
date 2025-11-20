import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-darker border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Biruk Maru. All rights reserved.
        </p>
        
        <div className="flex items-center gap-6">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-primary transition-colors"
              aria-label={link.platform}
            >
              <link.icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

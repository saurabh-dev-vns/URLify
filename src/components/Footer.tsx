import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur-sm border-t border-indian-saffron/20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-indian-blue">About URLify</h3>
            <p className="text-gray-800">
              A modern URL shortening service built with React and TypeScript.
              Create short, memorable links for your long URLs.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-indian-blue">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-800 hover:text-indian-saffron transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-800 hover:text-indian-saffron transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#analytics" className="text-gray-800 hover:text-indian-saffron transition-colors">
                  Analytics
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-indian-blue">Contact</h3>
            <p className="text-gray-800">
              Have questions? Reach out to us at support@urlify.com
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-indian-saffron/20 text-center text-gray-800">
          <p className="flex items-center justify-center">
            Made with <Heart className="h-4 w-4 mx-1 text-indian-green" /> by URLify Team
          </p>
        </div>
      </div>
    </footer>
  );
}
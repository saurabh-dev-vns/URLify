import { HashLink } from 'react-router-hash-link';
import { Heart } from 'lucide-react';
import {Link} from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur-sm border-t dark:bg-gray-800 border-indian-saffron/20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-indian-blue dark:text-blue-200">About URLify</h3>
            <p className="text-gray-800 dark:text-white">
              A modern URL shortening service built with React and TypeScript.
              Create short, memorable links for your long URLs.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-indian-blue dark:text-blue-200">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <HashLink smooth  to="#home" className="text-gray-800 dark:text-white dark:hover:text-indian-saffron hover:text-indian-saffron transition-colors">
                  Home
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="#how-it-works" className="text-gray-800 dark:text-white dark:hover:text-indian-saffron hover:text-indian-saffron transition-colors">
                  How It Works
                </HashLink>
              </li>
              <li>
                <HashLink smooth  to="#analytics" className="text-gray-800 dark:text-white dark:hover:text-indian-saffron hover:text-indian-saffron transition-colors">
                  Analytics
                </HashLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-indian-blue dark:text-blue-200">Contact</h3>
            <p className="text-gray-800 dark:text-white">
              Have questions? Reach out to us at{' '}
              <Link
                to="/contact"
                className="hover:text-indian-saffron transition-colors"
              >
                support@urlify.com
              </Link>
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
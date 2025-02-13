import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, ExternalLink, Delete } from 'lucide-react';
import { deleteUrl, getUrls, incrementClicks } from '../utils/storage';
import { UrlData } from '../types/url';

export default function UrlList() {
  const [urls, setUrls] = React.useState<UrlData[]>([]);
  const [copiedId, setCopiedId] = React.useState<string | null>(null);
  const [deletedId, setdeletedId] = React.useState<string | null>(null);

  React.useEffect(() => {
    setUrls(getUrls());
    const interval = setInterval(() => {
      setUrls(getUrls());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = async (shortUrl: string, id: string) => {
    await navigator.clipboard.writeText(
      `${window.location.origin}/#/${shortUrl}`
    );
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleClick = (id: string) => {
    incrementClicks(id);
  };

  const handelDelete = async (id: string) => {
    setdeletedId(id);
    deleteUrl(id);
  };

  return (
    <div className='w-full max-w-2xl mt-8'>
      <AnimatePresence>
        {urls.map((url, index) => (
          <motion.div
            key={url.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ delay: index * 0.1 }}
            className='bg-white rounded-lg shadow-md p-4 mb-4'
          >
            <div className='flex items-center justify-between'>
              <div className='flex-1 min-w-0'>
                <p className='text-sm text-gray-500 truncate'>
                  {url.originalUrl}
                </p>
                <div className='flex items-center mt-1'>
                  <a
                    href={`#/${url.shortUrl}`}
                    target='_blank'
                    onClick={() => handleClick(url.id)}
                    className='text-blue-600 hover:text-blue-800 font-medium flex items-center'
                  >
                    {window.location.origin}/#/{url.shortUrl}
                    <ExternalLink className='h-4 w-4 ml-1' />
                  </a>
                </div>
              </div>
              <div className='flex items-center ml-4'>
                <span className='text-sm text-gray-500 mr-4'>
                  {url.clicks} clicks
                </span>
                <button
                  onClick={() => handleCopy(url.shortUrl, url.id)}
                  className='p-2 hover:bg-gray-100 rounded-full transition-colors'
                >
                  {copiedId === url.id ? (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className='text-green-600 text-sm'
                    >
                      Copied!
                    </motion.span>
                  ) : (
                    <Copy className='h-5 w-5 text-gray-500' />
                  )}
                </button>
                <button
                  onClick={() => handelDelete(url.id)}
                  className='p-2 hover:bg-gray-100 rounded-full transition-colors'
                >
                  {deletedId === url.id ? (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className='text-green-600 text-sm'
                    >
                      Deleted!
                    </motion.span>
                  ) : (
                    <Delete className='h-5 w-5 text-gray-500' />
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

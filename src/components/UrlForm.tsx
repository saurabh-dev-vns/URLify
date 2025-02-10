import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { motion } from 'framer-motion';
import { Link2, Loader2 } from 'lucide-react';
import { getUrls, saveUrl } from '../utils/storage';
import { UrlData } from '../types/url';

export default function UrlForm() {
	const [url, setUrl] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError('');

		if (!url) {
			setError('Please enter a URL');
			return;
		}

		if (url.startsWith(`${window.location.origin}`)) {
			setError('Try different URL');
			return;
		}

		const all_url = getUrls();
		if (all_url.find((u) => u.originalUrl === url)) {
			setError('URL already exists');
			return;
		}

		try {
			setIsLoading(true);
			const urlObject = new URL(url);
			const shortUrl: UrlData = {
				id: nanoid(8),
				originalUrl: urlObject.toString(),
				shortUrl: nanoid(6),
				createdAt: new Date(),
				clicks: 0,
			};

			console.log(shortUrl);

			saveUrl(shortUrl);
			setUrl('');
			setIsLoading(false);
		} catch (err) {
			setError('Please enter a valid URL');
			setIsLoading(false);
		}
	};

	return (
		<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-2xl mx-auto ">
			<form onSubmit={handleSubmit} className="relative ">
				<div className="flex items-center">
					<div className="absolute left-4">
						<Link2 className="h-5 w-5 text-indian-saffron" />
					</div>
					<input
						type="text"
						value={url}
						onChange={(e) => setUrl(e.target.value)}
						placeholder="Enter your long URL here..."
						className="w-full px-12 py-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-md focus:ring-2 focus:ring-indian-saffron focus:outline-none"
					/>
					<button
						type="submit"
						disabled={isLoading}
						className="absolute right-2 px-6 py-2 bg-indian-saffron text-white rounded-md hover:bg-indian-saffron/90 transition-colors disabled:bg-indian-saffron/50"
					>
						{isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Shorten'}
					</button>
				</div>
				{error && (
					<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-2 text-red-500 text-sm">
						{error}
					</motion.p>
				)}
			</form>
		</motion.div>
	);
}

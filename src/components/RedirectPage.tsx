import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUrls } from '../utils/storage';

export default function RedirectPage() {
	const { shortUrl } = useParams<{ shortUrl: string }>();

	useEffect(() => {
		const urls = getUrls(); // Retrieve all stored URLs
		const urlData = urls.find((url) => url.shortUrl === shortUrl);

		if (urlData) {
			// Redirect to the original URL
			window.location.href = urlData.originalUrl;
		} else {
			alert('URL not found'); // Display an error if the URL doesn't exist
		}
	}, [shortUrl]);

	return <div>Redirecting...</div>;
}

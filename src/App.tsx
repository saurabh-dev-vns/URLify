import { HelmetProvider } from 'react-helmet-async';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SEOHead from './components/SEOHead';
import UrlForm from './components/UrlForm';
import UrlList from './components/UrlList';
import Analytics from './components/Analytics';
import HowItWorks from './components/HowItWorks';
import RedirectPage from './components/RedirectPage';

export default function App() {
	return (
		<HelmetProvider>
			<Router>
				<div className="min-h-screen flex flex-col bg-gray-100">
					<SEOHead />
					<Header />
					<main className="flex-grow">
						<Routes>
							{/* Main Landing Page */}
							<Route
								path="/"
								element={
									<>
										{/* Hero Section */}
										<section id="home" className="py-16">
											<div className="container mx-auto px-4">
												<div className="max-w-3xl mx-auto text-center mb-12">
													<h1 className="text-4xl md:text-5xl font-bold text-indian-blue mb-6">Transform Long URLs into Short Links</h1>
													<p className="text-xl text-gray-800">
														Create short, memorable links and track their performance with our powerful analytics dashboard.
													</p>
												</div>
												<UrlForm />
											</div>
										</section>

										{/* URL List and Analytics */}
										<section id="analytics" className="py-16">
											<div className="container mx-auto px-4">
												<UrlList />
												<Analytics />
											</div>
										</section>

										<HowItWorks />
									</>
								}
							/>
							{/* Redirect Route for Shortened URLs */}
							<Route path="/:shortUrl" element={<RedirectPage />} />
						</Routes>
					</main>
					<Footer />
				</div>
			</Router>
		</HelmetProvider>
	);
}

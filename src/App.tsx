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
import DarkMode from './components/DarkMode';
import Contact from './components/Contact';
import ScrollToTopButton from './components/ScrollToTopButton';
import FAQ from './components/FAQ';
export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">

          <SEOHead />
          <Header />

          <div className="absolute top-16 right-4">
            <DarkMode />
          </div>
          
          <main className="flex-grow">
            <Routes>
              {/* Main Landing Page */}
              <Route
                path="/"
                element={
                  <>
                    {/* Hero Section */}
                    <section id='home' className="py-16">
                      <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center mb-12">
                          <h1 className="text-4xl md:text-5xl font-bold text-indian-blue dark:text-blue-300 mb-6">
                            Transform Long URLs into Short Links
                          </h1>
                          <p className="text-xl text-gray-800 dark:text-white">
                            Create short, memorable links and track their performance with our
                            powerful analytics dashboard.
                          </p>
                        </div>
                        <UrlForm />
                      </div>
                    </section>

                    {/* URL List and Analytics */}
                    <section id='analytics' className="py-16">
                      <div className="container mx-auto px-4">
                        <UrlList />
                        <Analytics />
                      </div>
                    </section>

                    <HowItWorks />
                    <FAQ/>
                  </>
                }
              />
              {/* Redirect Route for Shortened URLs */}
              <Route path='/contact' element={<Contact/>} />
              <Route path="/:shortUrl" element={<RedirectPage />} />
            </Routes>
          </main>
          <Footer />
          <ScrollToTopButton/>
        </div>
      </Router>
    </HelmetProvider>
  );
}


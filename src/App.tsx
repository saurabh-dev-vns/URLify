import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import SEOHead from './components/SEOHead';
import UrlForm from './components/UrlForm';
import UrlList from './components/UrlList';
import Analytics from './components/Analytics';
import HowItWorks from './components/HowItWorks';

export default function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <SEOHead />
        <Header />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-indian-blue mb-6">
                  Transform Long URLs into Short Links
                </h1>
                <p className="text-xl text-gray-800">
                  Create short, memorable links and track their performance with our
                  powerful analytics dashboard.
                </p>
              </div>
              <UrlForm />
            </div>
          </section>

          {/* URL List and Analytics */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <UrlList />
              <Analytics />
            </div>
          </section>

          <HowItWorks />
        </main>

        <Footer />
      </div>
    </HelmetProvider>
  );
}
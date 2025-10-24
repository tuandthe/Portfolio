import { lazy, Suspense } from 'react';
import Navbar from '././components/Navbar';
import Hero from '././components/Hero';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load các components không cần thiết ngay
const About = lazy(() => import('././components/About'));
const Skills = lazy(() => import('././components/Skills'));
const Projects = lazy(() => import('././components/Projects'));
const Contact = lazy(() => import('././components/Contact'));
const Footer = lazy(() => import('././components/Footer'));

function App() {
    return (
        <div className="min-h-screen bg-gray-900">
            <Navbar />
            <main>
                <Hero />
                <Suspense fallback={<LoadingSpinner />}>
                    <About />
                    <Skills />
                    <Projects />
                    <Contact />
                    <Footer />
                </Suspense>
            </main>
        </div>
    );
}

export default App;

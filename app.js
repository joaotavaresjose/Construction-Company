function App() {
    try {
        React.useEffect(() => {
            // Initialize AOS
            if (typeof AOS !== 'undefined') {
                AOS.init({
                    duration: 800,
                    easing: 'ease-out-cubic',
                    once: true,
                    offset: 100
                });
            }

            // Prevent horizontal scroll
            document.body.style.overflowX = 'hidden';
            document.documentElement.style.overflowX = 'hidden';
        }, []);

        return (
            <div data-name="app" data-file="app.js" className="min-h-screen w-full overflow-x-hidden">
                <Header />
                <Hero />
                <Services />
                <About />
                <WhyChooseUs />
                <Projects />
                <Process />
                <Team />
                <Testimonials />
                <CTA />
                <Contact />
                <Footer />
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));

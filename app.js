function App() {
    try {
        return (
            <div data-name="app" data-file="app.js" className="min-h-screen">
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

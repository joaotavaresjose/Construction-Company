function Hero() {
    try {
        const sendWhatsAppMessage = () => {
            const message = "Olá! Gostaria de solicitar um orçamento para meu projeto de construção.";
            const whatsappUrl = `https://wa.me/351951184916?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        };

        return (
            <section id="home" data-name="hero" data-file="components/Hero.js" 
                     className="hero-bg min-h-screen flex items-center justify-center text-white relative">
                <video 
                    className="hero-video"
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                >
                    <source src="https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4" type="video/mp4" />
                    <source src="https://videos.pexels.com/video-files/4491459/4491459-uhd_2560_1440_24fps.mp4" type="video/mp4" />
                    <source src="video/banner30fps.mp4" type="video/mp4" />
                </video>
                <div className="hero-overlay"></div>
                
                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="fade-in">
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
                            Construction Company
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto px-4">
                            Transformamos seus sonhos em realidade com qualidade, 
                            segurança e pontualidade em cada projeto
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                            <button 
                                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                                className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-colors"
                            >
                                Nossos Serviços
                            </button>
                            <button 
                                onClick={sendWhatsAppMessage}
                                className="w-full sm:w-auto border-2 border-white hover:bg-white hover:text-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-colors"
                            >
                                <i className="fab fa-whatsapp mr-2"></i>
                                WhatsApp
                            </button>
                        </div>
                    </div>
                    

                </div>
            </section>
        );
    } catch (error) {
        console.error('Hero component error:', error);
        reportError(error);
    }
}

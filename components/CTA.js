function CTA() {
    try {
        const sendWhatsAppMessage = () => {
            const message = "Olá! Gostaria de solicitar um orçamento para meu projeto de construção.";
            const whatsappUrl = `https://wa.me/351951184916?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        };

        return (
            <section id="cta" data-name="cta" data-file="components/CTA.js" 
                     className="py-16 md:py-20 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                            Pronto para Começar seu Projeto?
                        </h2>
                        <p className="text-lg md:text-xl mb-6 md:mb-8 opacity-90 leading-relaxed">
                            Entre em contato conosco hoje mesmo e transforme seus sonhos em realidade. 
                            Orçamento gratuito e sem compromisso!
                        </p>
                        
                        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 justify-center items-center mb-6 md:mb-8">
                            <button 
                                onClick={sendWhatsAppMessage}
                                className="bg-white text-orange-600 px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center w-full sm:w-auto justify-center"
                            >
                                <i className="fab fa-whatsapp mr-2"></i>
                                Solicitar Orçamento
                            </button>
                            
                            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm md:text-base lg:text-lg">
                                <div className="flex items-center">
                                    <i className="fas fa-phone mr-2"></i>
                                    <span>951 184 916</span>
                                </div>
                                <div className="hidden sm:block w-px h-6 bg-white/30"></div>
                                <div className="flex items-center">
                                    <i className="fas fa-envelope mr-2"></i>
                                    <span className="break-all">contato@constructionco.com</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 lg:space-x-8 text-xs md:text-sm opacity-80">
                            <div className="flex items-center">
                                <i className="fas fa-check-circle mr-2"></i>
                                <span>Orçamento Gratuito</span>
                            </div>
                            <div className="flex items-center">
                                <i className="fas fa-check-circle mr-2"></i>
                                <span>Atendimento 24h</span>
                            </div>
                            <div className="flex items-center">
                                <i className="fas fa-check-circle mr-2"></i>
                                <span>Garantia de Qualidade</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('CTA component error:', error);
        reportError(error);
    }
}

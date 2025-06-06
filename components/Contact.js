function Contact() {
    try {
        const [formData, setFormData] = React.useState({
            name: '', email: '', phone: '', message: ''
        });
        const [isSubmitting, setIsSubmitting] = React.useState(false);
        const [submitMessage, setSubmitMessage] = React.useState('');

        const sendWhatsAppMessage = (data) => {
            const message = `Olá! Meu nome é ${data.name}.
            
Email: ${data.email}
Telefone: ${data.phone}
Mensagem: ${data.message}`;
            
            const whatsappUrl = `https://wa.me/244951184916?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
            setIsSubmitting(true);
            
            try {
                await new Promise(resolve => setTimeout(resolve, 1500));
                sendWhatsAppMessage(formData);
                setSubmitMessage('Redirecionando para WhatsApp...');
                setFormData({ name: '', email: '', phone: '', message: '' });
            } catch (error) {
                setSubmitMessage('Erro ao processar. Tente novamente.');
            } finally {
                setIsSubmitting(false);
                setTimeout(() => setSubmitMessage(''), 5000);
            }
        };

        const handleChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        };

        return (
            <section id="contact" data-name="contact" data-file="components/Contact.js" 
                     className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
                        <p className="text-xl text-gray-600">
                            Solicite seu orçamento gratuito e tire suas dúvidas
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div data-aos="fade-right">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Informações de Contato</h3>
                            
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="bg-orange-100 p-3 rounded-full">
                                        <i className="fas fa-map-marker-alt text-orange-600"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Endereço</h4>
                                        <p className="text-gray-600">Rua das Construções, 123 - Centro</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center space-x-4">
                                    <div className="bg-orange-100 p-3 rounded-full">
                                        <i className="fas fa-phone text-orange-600"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Telefone</h4>
                                        <p className="text-gray-600">951 184 916</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center space-x-4">
                                    <div className="bg-orange-100 p-3 rounded-full">
                                        <i className="fas fa-envelope text-orange-600"></i>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Email</h4>
                                        <p className="text-gray-600">contato@constructionco.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6" data-aos="fade-left">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Seu nome"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Seu email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                    required
                                />
                            </div>
                            
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Seu telefone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            />
                            
                            <textarea
                                name="message"
                                placeholder="Sua mensagem"
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                                required
                            ></textarea>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 flex items-center justify-center"
                            >
                                {isSubmitting ? (
                                    <React.Fragment>
                                        <i className="fas fa-spinner fa-spin mr-2"></i>
                                        Enviando...
                                    </React.Fragment>
                                ) : (
                                    <React.Fragment>
                                        <i className="fab fa-whatsapp mr-2"></i>
                                        Enviar via WhatsApp
                                    </React.Fragment>
                                )}
                            </button>

                            {submitMessage && (
                                <div className={`p-4 rounded-lg ${submitMessage.includes('WhatsApp') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                    {submitMessage}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Contact component error:', error);
        reportError(error);
    }
}

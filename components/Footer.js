function Footer() {
    try {
        return (
            <footer data-name="footer" data-file="components/Footer.js" 
                    className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <div className="text-2xl font-bold mb-4">
                                <i className="fas fa-hard-hat mr-2 text-orange-600"></i>
                                Construction Co.
                            </div>
                            <p className="text-gray-400 mb-4">
                                Sua obra em boas mãos. Qualidade, segurança e pontualidade em cada projeto.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#services" className="hover:text-white transition-colors">Construção Residencial</a></li>
                                <li><a href="#services" className="hover:text-white transition-colors">Construção Comercial</a></li>
                                <li><a href="#services" className="hover:text-white transition-colors">Reformas</a></li>
                                <li><a href="#services" className="hover:text-white transition-colors">Projetos</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">Empresa</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#about" className="hover:text-white transition-colors">Sobre Nós</a></li>
                                <li><a href="#projects" className="hover:text-white transition-colors">Nossos Projetos</a></li>
                                <li><a href="#about" className="hover:text-white transition-colors">Nossa Equipe</a></li>
                                <li><a href="#contact" className="hover:text-white transition-colors">Trabalhe Conosco</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">Contato</h3>
                            <div className="space-y-3 text-gray-400">
                                <div className="flex items-center">
                                    <i className="fas fa-map-marker-alt mr-3 text-orange-600"></i>
                                    <span>Rua das Construções, 123 - Centro</span>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-phone mr-3 text-orange-600"></i>
                                    <span>951 184 916</span>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-envelope mr-3 text-orange-600"></i>
                                    <span>contato@constructionco.com</span>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-clock mr-3 text-orange-600"></i>
                                    <span>Seg-Sex: 8h às 18h</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; 2024 Construction Company. Todos os direitos reservados.</p>
                        <p className="mt-2 text-sm">
                            Desenvolvido com <i className="fas fa-heart text-red-500"></i> para construir o futuro
                        </p>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        reportError(error);
    }
}

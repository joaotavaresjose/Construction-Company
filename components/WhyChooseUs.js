function WhyChooseUs() {
    try {
        const reasons = [
            {
                icon: 'fas fa-medal',
                title: 'Qualidade Garantida',
                description: 'Materiais de primeira linha e mão de obra especializada'
            },
            {
                icon: 'fas fa-clock',
                title: 'Pontualidade',
                description: 'Cumprimos rigorosamente os prazos estabelecidos'
            },
            {
                icon: 'fas fa-shield-alt',
                title: 'Segurança Total',
                description: 'Seguimos todas as normas de segurança do trabalho'
            },
            {
                icon: 'fas fa-handshake',
                title: 'Confiança',
                description: 'Transparência em todos os processos e orçamentos'
            },
            {
                icon: 'fas fa-tools',
                title: 'Tecnologia Avançada',
                description: 'Equipamentos modernos e técnicas inovadoras'
            },
            {
                icon: 'fas fa-users',
                title: 'Equipe Especializada',
                description: 'Profissionais certificados e experientes'
            }
        ];

        return (
            <section id="why-choose-us" data-name="why-choose-us" data-file="components/WhyChooseUs.js" 
                     className="py-20 bg-orange-600 text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Por Que Escolher a Construction Company?</h2>
                        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
                            Somos referência em construção civil com diferenciais únicos
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {reasons.map((reason, index) => (
                            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                                <div className="bg-white/10 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:bg-white/20 transition-colors">
                                    <i className={`${reason.icon} text-2xl md:text-3xl`}></i>
                                </div>
                                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">{reason.title}</h3>
                                <p className="text-sm md:text-base opacity-90 leading-relaxed">{reason.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('WhyChooseUs component error:', error);
        reportError(error);
    }
}

function Services() {
    try {
        const services = [
            {
                icon: 'fas fa-home',
                title: 'Construção Residencial',
                description: 'Casas, apartamentos e condomínios com acabamento de primeira qualidade'
            },
            {
                icon: 'fas fa-building',
                title: 'Construção Comercial',
                description: 'Escritórios, lojas e edifícios comerciais seguindo as melhores práticas'
            },
            {
                icon: 'fas fa-tools',
                title: 'Reformas e Renovações',
                description: 'Modernize seu espaço com nossas soluções de reforma completa'
            },
            {
                icon: 'fas fa-drafting-compass',
                title: 'Projetos Arquitetônicos',
                description: 'Desenvolvimento de projetos personalizados para suas necessidades'
            },
            {
                icon: 'fas fa-hard-hat',
                title: 'Consultoria Técnica',
                description: 'Assessoria especializada em engenharia e construção civil'
            },
            {
                icon: 'fas fa-wrench',
                title: 'Manutenção Predial',
                description: 'Serviços de manutenção preventiva e corretiva para seu imóvel'
            }
        ];

        return (
            <section id="services" data-name="services" data-file="components/Services.js" 
                     className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Oferecemos soluções completas em construção civil com qualidade excepcional
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} 
                                 className="service-card bg-white p-8 rounded-xl shadow-lg text-center"
                                 data-aos="zoom-in" 
                                 data-aos-delay={index * 100}>
                                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <i className={`${service.icon} text-3xl text-orange-600`}></i>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Services component error:', error);
        reportError(error);
    }
}

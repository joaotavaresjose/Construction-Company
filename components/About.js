function About() {
    try {
        const stats = [
            { number: '500+', label: 'Projetos Concluídos' },
            { number: '15+', label: 'Anos de Experiência' },
            { number: '50+', label: 'Profissionais Qualificados' },
            { number: '100%', label: 'Satisfação dos Clientes' }
        ];

        return (
            <section id="about" data-name="about" data-file="components/About.js" 
                     className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Sobre Nós</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                A Construction Company é uma empresa líder no setor de construção civil, 
                                com mais de 15 anos de experiência no mercado. Nossa missão é entregar 
                                projetos de alta qualidade, sempre respeitando prazos e orçamentos.
                            </p>
                            <p className="text-lg text-gray-600 mb-8">
                                Contamos com uma equipe de profissionais altamente qualificados, 
                                utilizando as mais modernas tecnologias e materiais de primeira linha 
                                para garantir a excelência em cada projeto.
                            </p>
                            
                            <div className="grid grid-cols-2 gap-4">
                                {stats.map((stat, index) => (
                                    <div key={index} className="text-center p-4 bg-orange-50 rounded-lg">
                                        <div className="text-3xl font-bold text-orange-600 mb-2">{stat.number}</div>
                                        <div className="text-sm text-gray-600">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="relative">
                            <img 
                                src="/img/about.avif"
                                alt="Equipe de construção"
                                className="rounded-xl shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-orange-600 text-white p-6 rounded-xl">
                                <i className="fas fa-award text-3xl mb-2"></i>
                                <div className="font-semibold">Empresa Certificada</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('About component error:', error);
        reportError(error);
    }
}

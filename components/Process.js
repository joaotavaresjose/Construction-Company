function Process() {
    try {
        const steps = [
            {
                number: '01',
                title: 'Consulta Inicial',
                description: 'Reunião para entender suas necessidades e expectativas',
                icon: 'fas fa-comments'
            },
            {
                number: '02',
                title: 'Projeto e Orçamento',
                description: 'Desenvolvimento do projeto e apresentação do orçamento detalhado',
                icon: 'fas fa-drafting-compass'
            },
            {
                number: '03',
                title: 'Execução',
                description: 'Início da obra com acompanhamento constante da qualidade',
                icon: 'fas fa-hammer'
            },
            {
                number: '04',
                title: 'Entrega',
                description: 'Finalização e entrega da obra com garantia de qualidade',
                icon: 'fas fa-key'
            }
        ];

        return (
            <section id="process" data-name="process" data-file="components/Process.js" 
                     className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nosso Processo</h2>
                        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                            Um processo estruturado para garantir o sucesso do seu projeto
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="text-center relative group">
                                <div className="bg-orange-600 text-white w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 text-lg md:text-xl font-bold group-hover:scale-110 transition-transform">
                                    {step.number}
                                </div>
                                <div className="bg-orange-100 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 -mt-8 md:-mt-12 relative z-10 group-hover:bg-orange-200 transition-colors">
                                    <i className={`${step.icon} text-xl md:text-2xl text-orange-600`}></i>
                                </div>
                                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 md:mb-4">{step.title}</h3>
                                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{step.description}</p>
                                
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-6 md:top-8 left-full w-full h-0.5 bg-orange-200 -translate-x-1/2"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Process component error:', error);
        reportError(error);
    }
}

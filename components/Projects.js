function Projects() {
    try {
        const projects = [
            {
                image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                title: 'Residencial Jardim das Flores',
                category: 'Residencial',
                description: 'Condomínio com 50 casas de alto padrão'
            },
            {
                image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                title: 'Centro Empresarial',
                category: 'Comercial',
                description: 'Complexo comercial de 20 andares'
            },
            {
                image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                title: 'Casa Moderna',
                category: 'Residencial',
                description: 'Casa contemporânea com design inovador'
            },
            {
                image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                title: 'Shopping Center',
                category: 'Comercial',
                description: 'Centro comercial com 200 lojas'
            }
        ];

        return (
            <section id="projects" data-name="projects" data-file="components/Projects.js" 
                     className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossos Projetos</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Conheça alguns dos projetos que realizamos com excelência
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {projects.map((project, index) => (
                            <div key={index} 
                                 className="project-card group"
                                 data-aos="fade-up"
                                 data-aos-delay={index * 100}>
                                <img 
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="project-overlay flex items-end p-6">
                                    <div className="text-white">
                                        <div className="text-sm text-orange-400 mb-1">{project.category}</div>
                                        <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                                        <p className="text-sm text-gray-300">{project.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Projects component error:', error);
        reportError(error);
    }
}

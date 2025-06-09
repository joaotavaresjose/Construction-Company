function Projects() {
    try {
        const [currentSlide, setCurrentSlide] = React.useState(0);
        const [isDragging, setIsDragging] = React.useState(false);
        const [startPos, setStartPos] = React.useState(0);
        const [currentPos, setCurrentPos] = React.useState(0);
        const [selectedProject, setSelectedProject] = React.useState(null);

        const projects = [
            {
                image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                title: 'Residencial Jardim das Flores',
                category: 'Residencial',
                description: 'Condomínio com 50 casas de alto padrão',
                area: '120m² - 180m²',
                location: 'Bairro Jardim das Flores',
                duration: '18 meses',
                features: ['3-4 quartos', 'Piscina privativa', 'Garagem dupla', 'Área gourmet'],
                status: 'Concluído',
                year: '2023'
            },
            {
                image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                title: 'Centro Empresarial',
                category: 'Comercial',
                description: 'Complexo comercial de 20 andares',
                area: '15.000m²',
                location: 'Centro da cidade',
                duration: '36 meses',
                features: ['20 andares', '200 salas comerciais', 'Estacionamento subterrâneo', 'Sistema inteligente'],
                status: 'Concluído',
                year: '2022'
            },
            {
                image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                title: 'Casa Moderna',
                category: 'Residencial',
                description: 'Casa contemporânea com design inovador',
                area: '250m²',
                location: 'Condomínio Alphaville',
                duration: '12 meses',
                features: ['4 suítes', 'Home theater', 'Piscina infinity', 'Automação completa'],
                status: 'Concluído',
                year: '2023'
            },
            {
                image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                title: 'Shopping Center',
                category: 'Comercial',
                description: 'Centro comercial com 200 lojas',
                area: '45.000m²',
                location: 'Zona Sul',
                duration: '42 meses',
                features: ['200 lojas', 'Praça de alimentação', 'Cinema multiplex', '2.000 vagas'],
                status: 'Em andamento',
                year: '2024'
            },
            {
                image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                title: 'Edifício Corporativo',
                category: 'Comercial',
                description: 'Torre empresarial de 30 andares',
                area: '25.000m²',
                location: 'Distrito Financeiro',
                duration: '48 meses',
                features: ['30 andares', 'Heliporto', 'Auditório', 'Certificação LEED'],
                status: 'Em andamento',
                year: '2024'
            },
            {
                image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                title: 'Villa Luxury',
                category: 'Residencial',
                description: 'Casa de luxo com piscina e jardim',
                area: '400m²',
                location: 'Condomínio Exclusive',
                duration: '15 meses',
                features: ['5 suítes', 'SPA privativo', 'Campo de tênis', 'Adega climatizada'],
                status: 'Concluído',
                year: '2023'
            }
        ];

        const getCardsPerView = () => {
            if (window.innerWidth < 640) return 1;
            if (window.innerWidth < 1024) return 2;
            if (window.innerWidth < 1280) return 3;
            return 4;
        };

        const [cardsPerView, setCardsPerView] = React.useState(getCardsPerView());

        React.useEffect(() => {
            const handleResize = () => setCardsPerView(getCardsPerView());
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);

        const maxSlide = Math.max(0, projects.length - cardsPerView);
        
        const nextSlide = () => {
            setCurrentSlide(prev => prev >= maxSlide ? 0 : prev + 1);
        };
        
        const prevSlide = () => {
            setCurrentSlide(prev => prev <= 0 ? maxSlide : prev - 1);
        };

        // Swipe handlers
        const getPositionX = (event) => {
            return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
        };

        const handleSwipeStart = (e) => {
            setIsDragging(true);
            setStartPos(getPositionX(e));
            setCurrentPos(getPositionX(e));
        };

        const handleSwipeMove = (e) => {
            if (!isDragging) return;
            setCurrentPos(getPositionX(e));
        };

        const handleSwipeEnd = () => {
            if (!isDragging) return;
            setIsDragging(false);
            
            const diff = startPos - currentPos;
            const minSwipeDistance = 50;
            
            if (Math.abs(diff) > minSwipeDistance) {
                if (diff > 0) {
                    nextSlide();
                } else {
                    prevSlide();
                }
            }
            
            setStartPos(0);
            setCurrentPos(0);
        };

        const handleCardClick = (project, e) => {
            e.stopPropagation();
            const swipeDistance = Math.abs(startPos - currentPos);
            if (swipeDistance < 10) {
                setSelectedProject(project);
            }
        };

        const closeModal = () => {
            setSelectedProject(null);
        };

        const getCardWidth = () => {
            switch(cardsPerView) {
                case 1: return 'w-full';
                case 2: return 'w-1/2';
                case 3: return 'w-1/3';
                case 4: return 'w-1/4';
                default: return 'w-1/4';
            }
        };

        return (
            <section id="projects" data-name="projects" data-file="components/Projects.js" 
                     className="py-20 bg-gray-50 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossos Projetos</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Conheça alguns dos projetos que realizamos com excelência
                        </p>
                    </div>

                    <div className="relative max-w-6xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                        <div 
                            className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
                            onMouseDown={handleSwipeStart}
                            onMouseMove={handleSwipeMove}
                            onMouseUp={handleSwipeEnd}
                            onMouseLeave={handleSwipeEnd}
                            onTouchStart={handleSwipeStart}
                            onTouchMove={handleSwipeMove}
                            onTouchEnd={handleSwipeEnd}
                        >
                            <div 
                                className="flex transition-transform duration-300 ease-out"
                                style={{ transform: `translateX(-${currentSlide * (100 / cardsPerView)}%)` }}
                            >
                                {projects.map((project, index) => (
                                    <div key={index} className={`flex-shrink-0 px-3 ${getCardWidth()}`}>
                                        <div 
                                            className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
                                            onClick={(e) => handleCardClick(project, e)}
                                        >
                                            <img 
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-48 object-cover pointer-events-none"
                                            />
                                            <div className="p-4">
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-xs font-medium">
                                                        {project.category}
                                                    </span>
                                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                        project.status === 'Concluído' 
                                                            ? 'bg-green-100 text-green-600' 
                                                            : 'bg-blue-100 text-blue-600'
                                                    }`}>
                                                        {project.status}
                                                    </span>
                                                </div>
                                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
                                                <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                                                <div className="grid grid-cols-2 gap-2 text-xs text-gray-500">
                                                    <div>
                                                        <i className="fas fa-ruler-combined mr-1"></i>
                                                        {project.area}
                                                    </div>
                                                    <div>
                                                        <i className="fas fa-map-marker-alt mr-1"></i>
                                                        {project.location}
                                                    </div>
                                                    <div>
                                                        <i className="fas fa-clock mr-1"></i>
                                                        {project.duration}
                                                    </div>
                                                    <div>
                                                        <i className="fas fa-calendar-alt mr-1"></i>
                                                        {project.year}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <button 
                            onClick={prevSlide}
                            className="absolute left-0 top-1/2 -translate-y-1/2 bg-orange-600 text-white p-3 rounded-full hover:bg-orange-700 transition-colors z-10"
                        >
                            <i className="fas fa-chevron-left"></i>
                        </button>
                        <button 
                            onClick={nextSlide}
                            className="absolute right-0 top-1/2 -translate-y-1/2 bg-orange-600 text-white p-3 rounded-full hover:bg-orange-700 transition-colors z-10"
                        >
                            <i className="fas fa-chevron-right"></i>
                        </button>
                        
                        <div className="flex justify-center mt-8 space-x-2">
                            {Array.from({ length: maxSlide + 1 }, (_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-colors ${
                                        index === currentSlide ? 'bg-orange-600' : 'bg-gray-300'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Modal */}
                    {selectedProject && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                                <div className="relative">
                                    <img 
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        className="w-full h-64 object-cover rounded-t-xl"
                                    />
                                    <button 
                                        onClick={closeModal}
                                        className="absolute top-4 right-4 bg-white text-gray-800 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100"
                                    >
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                                
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                                            {selectedProject.category}
                                        </span>
                                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                            selectedProject.status === 'Concluído' 
                                                ? 'bg-green-100 text-green-600' 
                                                : 'bg-blue-100 text-blue-600'
                                        }`}>
                                            {selectedProject.status}
                                        </span>
                                    </div>
                                    
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedProject.title}</h3>
                                    <p className="text-gray-600 mb-6">{selectedProject.description}</p>
                                    
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">Área</h4>
                                            <p className="text-gray-600">{selectedProject.area}</p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">Localização</h4>
                                            <p className="text-gray-600">{selectedProject.location}</p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">Duração</h4>
                                            <p className="text-gray-600">{selectedProject.duration}</p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">Ano</h4>
                                            <p className="text-gray-600">{selectedProject.year}</p>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-3">Características</h4>
                                        <div className="grid grid-cols-2 gap-2">
                                            {selectedProject.features.map((feature, index) => (
                                                <div key={index} className="flex items-center">
                                                    <i className="fas fa-check text-green-500 mr-2"></i>
                                                    <span className="text-gray-600">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        );
    } catch (error) {
        console.error('Projects component error:', error);
        reportError(error);
    }
}

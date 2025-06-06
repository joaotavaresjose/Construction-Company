function Team() {
    try {
        const [currentSlide, setCurrentSlide] = React.useState(0);
        const [touchStart, setTouchStart] = React.useState(null);
        const [touchEnd, setTouchEnd] = React.useState(null);
        
        const team = [
            {
                name: 'Carlos Pereira',
                role: 'Engenheiro Civil',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
                experience: '15 anos',
                specialty: 'Estruturas e Fundações'
            },
            {
                name: 'Fernanda Lima',
                role: 'Arquiteta',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
                experience: '12 anos',
                specialty: 'Design e Interiores'
            },
            {
                name: 'Roberto Souza',
                role: 'Mestre de Obras',
                image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
                experience: '20 anos',
                specialty: 'Execução e Qualidade'
            },
            {
                name: 'Juliana Castro',
                role: 'Gerente de Projetos',
                image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
                experience: '10 anos',
                specialty: 'Planejamento e Controle'
            },
            {
                name: 'André Silva',
                role: 'Engenheiro Elétrico',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
                experience: '8 anos',
                specialty: 'Instalações Elétricas'
            },
            {
                name: 'Patricia Costa',
                role: 'Arquiteta Paisagista',
                image: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
                experience: '9 anos',
                specialty: 'Paisagismo e Jardins'
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

        const maxSlide = Math.max(0, team.length - cardsPerView);
        
        const nextSlide = () => {
            setCurrentSlide(prev => prev >= maxSlide ? 0 : prev + 1);
        };
        
        const prevSlide = () => {
            setCurrentSlide(prev => prev <= 0 ? maxSlide : prev - 1);
        };

        // Touch handlers
        const minSwipeDistance = 50;

        const onTouchStart = (e) => {
            setTouchEnd(null);
            setTouchStart(e.targetTouches[0].clientX);
        };

        const onTouchMove = (e) => {
            setTouchEnd(e.targetTouches[0].clientX);
        };

        const onTouchEnd = () => {
            if (!touchStart || !touchEnd) return;
            const distance = touchStart - touchEnd;
            const isLeftSwipe = distance > minSwipeDistance;
            const isRightSwipe = distance < -minSwipeDistance;

            if (isLeftSwipe) nextSlide();
            if (isRightSwipe) prevSlide();
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
            <section id="team" data-name="team" data-file="components/Team.js" 
                     className="py-20 bg-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossa Equipe</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Profissionais qualificados e experientes para seu projeto
                        </p>
                    </div>

                    <div className="relative max-w-6xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                        <div 
                            className="overflow-hidden"
                            onTouchStart={onTouchStart}
                            onTouchMove={onTouchMove}
                            onTouchEnd={onTouchEnd}
                        >
                            <div 
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentSlide * (100 / cardsPerView)}%)` }}
                            >
                                {team.map((member, index) => (
                                    <div key={index} className={`flex-shrink-0 px-4 ${getCardWidth()}`}>
                                        <div className="text-center group bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                                            <div className="relative mb-6">
                                                <img 
                                                    src={member.image}
                                                    alt={member.name}
                                                    className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                                <div className="absolute inset-0 bg-orange-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            </div>
                                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                                            <p className="text-orange-600 font-medium mb-1">{member.role}</p>
                                            <p className="text-gray-500 text-sm mb-2">{member.experience} de experiência</p>
                                            <p className="text-gray-600 text-xs">{member.specialty}</p>
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
                </div>
            </section>
        );
    } catch (error) {
        console.error('Team component error:', error);
        reportError(error);
    }
}

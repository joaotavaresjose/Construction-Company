function Testimonials() {
    try {
        const [currentSlide, setCurrentSlide] = React.useState(0);
        const [isDragging, setIsDragging] = React.useState(false);
        const [startPos, setStartPos] = React.useState(0);
        const [currentTranslate, setCurrentTranslate] = React.useState(0);
        const [prevTranslate, setPrevTranslate] = React.useState(0);
        
        const testimonials = [
            {
                name: 'Maria Silva',
                role: 'Proprietária Residencial',
                image: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
                text: 'Excelente trabalho! Construíram nossa casa dos sonhos com qualidade excepcional e dentro do prazo.',
                rating: 5
            },
            {
                name: 'João Santos',
                role: 'Empresário',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
                text: 'Profissionais competentes e confiáveis. Reformaram nosso escritório com perfeição.',
                rating: 5
            },
            {
                name: 'Ana Costa',
                role: 'Arquiteta',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
                text: 'Parceria incrível! Executaram meus projetos com atenção aos detalhes e acabamento impecável.',
                rating: 5
            },
            {
                name: 'Pedro Oliveira',
                role: 'Engenheiro',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
                text: 'Trabalho de alta qualidade técnica. Recomendo para qualquer tipo de projeto.',
                rating: 5
            },
            {
                name: 'Carla Mendes',
                role: 'Proprietária',
                image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
                text: 'Atendimento excepcional do início ao fim. Superaram nossas expectativas.',
                rating: 5
            }
        ];

        const getCardsPerView = () => {
            if (window.innerWidth < 768) return 1;
            if (window.innerWidth < 1024) return 2;
            return 3;
        };

        const [cardsPerView, setCardsPerView] = React.useState(getCardsPerView());

        React.useEffect(() => {
            const handleResize = () => setCardsPerView(getCardsPerView());
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);

        const maxSlide = Math.max(0, testimonials.length - cardsPerView);
        
        const nextSlide = () => {
            setCurrentSlide(prev => prev >= maxSlide ? 0 : prev + 1);
        };
        
        const prevSlide = () => {
            setCurrentSlide(prev => prev <= 0 ? maxSlide : prev - 1);
        };

        // Drag handlers
        const getPositionX = (event) => {
            return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
        };

        const dragStart = (event) => {
            setIsDragging(true);
            setStartPos(getPositionX(event));
            setPrevTranslate(currentSlide * -(100 / cardsPerView));
        };

        const dragMove = (event) => {
            if (!isDragging) return;
            event.preventDefault();
            const currentPosition = getPositionX(event);
            const diff = currentPosition - startPos;
            const maxDiff = window.innerWidth * 0.3;
            const constrainedDiff = Math.max(-maxDiff, Math.min(maxDiff, diff));
            setCurrentTranslate(prevTranslate + (constrainedDiff / window.innerWidth) * 100);
        };

        const dragEnd = () => {
            setIsDragging(false);
            const moved = currentTranslate - prevTranslate;
            
            if (moved < -10) nextSlide();
            else if (moved > 10) prevSlide();
            
            setCurrentTranslate(currentSlide * -(100 / cardsPerView));
        };

        React.useEffect(() => {
            const interval = setInterval(nextSlide, 5000);
            return () => clearInterval(interval);
        }, [maxSlide]);

        return (
            <section id="testimonials" data-name="testimonials" data-file="components/Testimonials.js" 
                     className="py-20 bg-gray-50 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">O Que Nossos Clientes Dizem</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Veja os depoimentos de quem confia em nosso trabalho
                        </p>
                    </div>

                    <div className="relative max-w-6xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                        <div 
                            className="overflow-hidden cursor-grab active:cursor-grabbing"
                            onMouseDown={dragStart}
                            onTouchStart={dragStart}
                            onMouseMove={dragMove}
                            onTouchMove={dragMove}
                            onMouseUp={dragEnd}
                            onTouchEnd={dragEnd}
                            onMouseLeave={dragEnd}
                        >
                            <div 
                                className={`flex ${isDragging ? '' : 'transition-transform duration-500 ease-in-out'}`}
                                style={{ 
                                    transform: `translateX(${isDragging ? currentTranslate : currentSlide * -(100 / cardsPerView)}%)` 
                                }}
                            >
                                {testimonials.map((testimonial, index) => (
                                    <div key={index} className={`flex-shrink-0 px-4 ${
                                        cardsPerView === 1 ? 'w-full' : 
                                        cardsPerView === 2 ? 'w-1/2' : 'w-1/3'
                                    }`}>
                                        <div className="bg-white p-8 rounded-xl shadow-lg text-center h-full">
                                            <img 
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                                            />
                                            <div className="flex justify-center mb-4">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <i key={i} className="fas fa-star text-yellow-400"></i>
                                                ))}
                                            </div>
                                            <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                                            <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                                            <p className="text-sm text-gray-500">{testimonial.role}</p>
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
        console.error('Testimonials component error:', error);
        reportError(error);
    }
}

function Header() {
    try {
        const [isMenuOpen, setIsMenuOpen] = React.useState(false);
        const [isScrolled, setIsScrolled] = React.useState(false);

        React.useEffect(() => {
            const handleScroll = () => {
                setIsScrolled(window.scrollY > 50);
            };
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }, []);

        const scrollToSection = (sectionId) => {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        };

        const menuItems = [
            { id: 'home', label: 'Início' },
            { id: 'services', label: 'Serviços' },
            { id: 'about', label: 'Sobre' },
            { id: 'projects', label: 'Projetos' },
            { id: 'team', label: 'Equipe' },
            { id: 'testimonials', label: 'Depoimentos' },
            { id: 'contact', label: 'Contato' }
        ];

        return (
          <header
            data-name="header"
            data-file="components/Header.js"
            className={`fixed w-full z-50 transition-all duration-300 ${
              isScrolled ? "bg-white shadow-lg py-2" : "bg-transparent py-4"
            }`}
          >
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center">
                <div
                  className={`text-2xl font-bold ${
                    isScrolled ? "text-orange-600" : "text-white"
                  }`}
                >
                  <img
                    src="/logo.png"
                    alt="Logo"
                    className="h-16 w-16 inline-block mr-2"
                  />
                  Construction Co.
                </div>

                <nav className="hidden lg:flex space-x-6">
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`hover:text-orange-500 transition-colors ${
                        isScrolled ? "text-gray-700" : "text-white"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>

                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`lg:hidden ${
                    isScrolled ? "text-gray-700" : "text-white"
                  }`}
                >
                  <i
                    className={`fas ${
                      isMenuOpen ? "fa-times" : "fa-bars"
                    } text-xl`}
                  ></i>
                </button>
              </div>

              {isMenuOpen && (
                <nav className="lg:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="block w-full text-left py-2 text-gray-700 hover:text-orange-500"
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              )}
            </div>
          </header>
        );
    } catch (error) {
        console.error('Header component error:', error);
        reportError(error);
    }
}

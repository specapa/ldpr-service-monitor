import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-background text-white sticky top-0 z-50 shadow-lg">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="flex items-center space-x-3 text-foreground">
                    <div className="hexagon w-24 h-12 flex items-center justify-center animate-glow">
                        <span className="text-foreground font-bold">specapa</span>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold">Infinity Page Generator</h1>
                        <p className="text-xs text-gray-300">Не официальный портал</p>
                    </div>
                </div>

                <nav className="hidden lg:flex space-x-8 items-center text-foreground">
                    <a href="#" className="hover:text-ldpr-accent transition">ОБРАЗОВАНИЕ</a>
                    <a href="#" className="hover:text-ldpr-accent transition">МЕРОПРИЯТИЯ</a>
                    <a href="#" className="hover:text-ldpr-accent transition">СЕРВИСЫ</a>
                    <a href="#" className="px-4 py-2 rounded-full hover:bg-blue-600 transition" onClick={() => alert('Поздравляем с вступлением в нашу партию!')}>Авторизация</a>
                </nav>

                <button className="lg:hidden text-white">
                    <i className="fas fa-bars text-2xl"></i>
                </button>
            </div>
        </header>
    );
};

export default Header;
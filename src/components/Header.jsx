import React from 'react';

const Header = () => {
    return (
        <header className="glass-panel" style={{ position: 'sticky', top: 0, zIndex: 50, padding: '16px 0' }}>
            <div className="container flex justify-between items-center">
                <div className="flex items-center gap-2">
                    {/* Logo Horizontal */}
                    <img src="/ocloudit%20logo.png" alt="ocloudit logo" style={{ height: '40px', width: 'auto', maxWidth: '150px' }} />
                </div>

                <nav className="flex items-center gap-6" style={{ fontWeight: '500' }}>
                    <a href="#hero">Inicio</a>
                    <a href="#servicios">Servicios</a>
                    <a href="#ofertas">Ofertas especiales</a>
                    <a href="#nosotros">Nosotros</a>
                </nav>

                <div className="flex items-center gap-4">
                    <a href="https://wa.me/522871311971" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '8px 20px', borderRadius: 'var(--border-radius-sm)' }}>
                        Cotizar
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;

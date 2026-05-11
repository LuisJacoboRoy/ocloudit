import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--color-bg-base)', borderTop: '1px solid var(--color-border)', padding: '48px 0', marginTop: 'auto' }}>
            <div className="container grid grid-cols-3 gap-8">
                <div className="flex-col gap-4">
                    <img src="./ocloudit%20logo%20cuadrado.png" alt="ocloudit logo" style={{ height: '60px', width: '60px', marginBottom: '16px' }} />
                    <p className="text-secondary" style={{ maxWidth: '300px' }}>
                        Soluciones integrales de TI, soporte técnico y desarrollo web de vanguardia a la medida de tu empresa.
                    </p>
                </div>

                <div className="flex-col">
                    <h4 style={{ marginBottom: '16px', color: '#fff' }}>Enlaces Rápidos</h4>
                    <ul className="flex-col gap-2 text-secondary">
                        <li><a href="#hero">Inicio</a></li>
                        <li><a href="#categories">Tienda</a></li>
                        <li><a href="#about">Nosotros</a></li>
                    </ul>
                </div>

                <div className="flex-col">
                    <h4 style={{ marginBottom: '16px', color: '#fff' }}>Contacto</h4>
                    <ul className="flex-col gap-2 text-secondary">
                        <li><a href="mailto:killerpollo22@msn.com" style={{ color: 'inherit', textDecoration: 'none' }}>killerpollo22@msn.com</a></li>
                        <li><a href="https://wa.me/522871311971?text=Hola%20Ocloudit%20me%20puede%20dar%20información?" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>2871311971</a></li>
                        <li>
                            <div className="flex gap-4 mt-8" style={{ marginTop: '16px' }}>
                                <a href="#" className="glass-panel" style={{ padding: '8px', borderRadius: '50%' }}>X</a>
                                <a href="#" className="glass-panel" style={{ padding: '8px', borderRadius: '50%' }}>In</a>
                                <a href="#" className="glass-panel" style={{ padding: '8px', borderRadius: '50%' }}>Ig</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container" style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid var(--color-border)', textAlign: 'center', color: 'var(--color-text-secondary)' }}>
                <p>&copy; {new Date().getFullYear()} ocloudit. Todos los derechos reservados.</p>
                <div style={{ marginTop: '16px', fontSize: '0.85rem' }}>
                    <a href="#privacy" className="text-secondary" style={{ textDecoration: 'none', color: 'var(--color-text-secondary)', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#667eea'} onMouseLeave={(e) => e.target.style.color = 'var(--color-text-secondary)'}>
                        Política de Privacidad
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

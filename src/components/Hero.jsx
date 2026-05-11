import React from 'react';
import ScrollReveal from './ScrollReveal';

const Hero = () => {
    return (
        <section
            id="hero"
            style={{
                minHeight: '80vh',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: '100px',
                paddingBottom: '100px',
                backgroundImage: 'url(./hero-bg.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}
        >
            {/* Overlay */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                background: 'linear-gradient(to bottom, rgba(10,10,12,0.6) 0%, rgba(10,10,12,0.95) 100%)',
                zIndex: 1
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <ScrollReveal direction="up" className="flex-col items-center text-center gap-6" style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ display: 'inline-block', padding: '8px 20px', background: 'rgba(139, 92, 246, 0.15)', border: '1px solid rgba(139, 92, 246, 0.3)', borderRadius: 'var(--border-radius-full)', color: 'var(--color-brand-primary)', fontWeight: '600', fontSize: '0.9rem', marginBottom: '16px' }}>
                        Agencia digital tecnologica
                    </div>
                    <h1 style={{ fontSize: '5rem', fontWeight: '800', letterSpacing: '-0.02em', lineHeight: '1.1' }}>
                        Soluciones en <br />
                        <span className="text-gradient">Computación, IT y Diseño</span>
                    </h1>
                    <p className="text-secondary" style={{ fontSize: '1.25rem', marginTop: '16px', marginBottom: '32px', maxWidth: '700px', margin: '16px auto 32px' }}>
                        Impulsamos el éxito de tu negocio con tecnología moderna, infraestructura escalable y presencia digital impactante.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <a href="#servicios" className="btn btn-primary" style={{ padding: '16px 36px', fontSize: '1.1rem' }}>Ver Servicios</a>
                        <a href="#ofertas" className="btn btn-secondary" style={{ padding: '16px 36px', fontSize: '1.1rem' }}>Ofertas Especiales</a>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default Hero;

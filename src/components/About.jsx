import React from 'react';
import ScrollReveal from './ScrollReveal';

const About = () => {
    return (
        <section id="nosotros" className="container py-16">
            <ScrollReveal direction="up" className="glass-panel" style={{ padding: '64px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>

                {/* Decorative Glow */}
                <div style={{ position: 'absolute', top: '-100px', left: '50%', transform: 'translateX(-50%)', width: '300px', height: '300px', background: 'var(--color-brand-primary)', filter: 'blur(100px)', opacity: '0.2', zIndex: 0 }}></div>

                <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '24px' }}>¿Por qué ocloudit?</h2>
                    <p className="text-secondary" style={{ fontSize: '1.25rem', lineHeight: '1.8' }}>
                        En <strong>ocloudit</strong>, nos apasiona la tecnología y sabemos que es el motor de crecimiento para cualquier negocio.
                        Ubicados en San Juan Bautista Tuxtepec, nos enfocamos en ofrecer soluciones informáticas integrales:
                        desde soporte técnico confiable hasta desarrollo web de última generación, todo en un solo lugar.
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-8 mt-8" style={{ marginTop: '48px', width: '100%', position: 'relative', zIndex: 1 }}>
                    <div className="flex-col items-center text-center gap-2">
                        <div style={{ fontSize: '2rem', color: 'var(--color-brand-primary)' }}>✨</div>
                        <h3 style={{ fontSize: '1.25rem' }}>Expertis Técnico</h3>
                        <p className="text-secondary" style={{ fontSize: '0.9rem' }}>Años de experiencia en hardware y redes.</p>
                    </div>
                    <div className="flex-col items-center text-center gap-2">
                        <div style={{ fontSize: '2rem', color: 'var(--color-brand-primary)' }}>🚀</div>
                        <h3 style={{ fontSize: '1.25rem' }}>Soluciones Rápidas</h3>
                        <p className="text-secondary" style={{ fontSize: '0.9rem' }}>Atención prioritaria y soporte oportuno.</p>
                    </div>
                    <div className="flex-col items-center text-center gap-2">
                        <div style={{ fontSize: '2rem', color: 'var(--color-brand-primary)' }}>💎</div>
                        <h3 style={{ fontSize: '1.25rem' }}>Diseño Vanguardista</h3>
                        <p className="text-secondary" style={{ fontSize: '0.9rem' }}>Creaciones digitales que deslumbran.</p>
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
};

export default About;

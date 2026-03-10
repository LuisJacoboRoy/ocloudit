import React from 'react';
import ScrollReveal from './ScrollReveal';

const offers = [
    {
        id: 'presencia',
        title: 'Presencia Digital',
        subtitle: 'Ideal para Emprendedores',
        image: '/offer-digital.png',
        price: 'Cotizar',
        features: [
            'Diseño de Logotipo (2 propuestas)',
            'Sitio web Landing Page responsivo',
            'Botón flotante a WhatsApp',
            'Hosting y dominio de regalo el 1er año'
        ],
        accent: '#8b5cf6'
    },
    {
        id: 'seguridad',
        title: 'Pyme Segura',
        subtitle: 'Protección IT Total',
        image: '/offer-sec.png',
        price: 'Cotizar',
        features: [
            'Mantenimiento de 3 equipos',
            'Optimización de red Wi-Fi',
            'Antivirus Empresarial (1 año)',
            'Respaldo automático en la nube'
        ],
        accent: '#3b82f6',
        isPopular: true
    },
    {
        id: 'ecommerce',
        title: 'Venta en Línea',
        subtitle: 'Tu Tienda Virtual 24/7',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80', // Fallback Unsplash image
        price: 'Cotizar',
        features: [
            'Tienda online con carrito',
            'Pagos en línea (Tarjeta, Oxxo)',
            '3 Banners publicitarios',
            'Capacitación de administración'
        ],
        accent: '#ec4899'
    }
];

const Offers = () => {
    return (
        <section id="ofertas" className="container py-24" style={{ backgroundColor: 'var(--color-bg-surface)', borderRadius: 'var(--border-radius-lg)', margin: '48px auto' }}>
            <ScrollReveal direction="up" className="text-center mb-16">
                <div style={{ display: 'inline-block', padding: '6px 16px', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '20px', color: 'var(--color-brand-secondary)', fontSize: '0.85rem', marginBottom: '16px' }}>Paquetes Especiales</div>
                <h2 style={{ fontSize: '3rem' }}>Ofertas <span className="text-gradient">Integrales</span></h2>
                <p className="text-secondary" style={{ maxWidth: '600px', margin: '16px auto 0' }}>Soluciones completas empaquetadas a un precio preferencial para impulsar tu negocio hoy mismo.</p>
            </ScrollReveal>

            <div className="grid grid-cols-3 gap-8" style={{ marginTop: '48px' }}>
                {offers.map((offer, index) => (
                    <ScrollReveal key={offer.id} direction="up" delay={index * 150} style={{ position: 'relative' }}>
                        {offer.isPopular && (
                            <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)', color: '#fff', padding: '6px 16px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold', zIndex: 10 }}>
                                MÁS POPULAR
                            </div>
                        )}
                        <div className="glass-panel flex-col" style={{ padding: '0', height: '100%', border: `1px solid rgba(255,255,255,0.05)`, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ height: '200px', width: '100%', overflow: 'hidden' }}>
                                <img src={offer.image} alt={offer.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
                            </div>
                            <div style={{ padding: '32px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ color: offer.accent, fontSize: '0.9rem', fontWeight: '600', marginBottom: '8px' }}>{offer.subtitle}</div>
                                <h3 style={{ fontSize: '1.75rem', marginBottom: '16px' }}>{offer.title}</h3>

                                <ul style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                                    {offer.features.map((feature, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                                            <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: `rgba(${(offer.accent === '#8b5cf6') ? '139,92,246' : (offer.accent === '#3b82f6') ? '59,130,246' : '236,72,153'}, 0.2)`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: offer.accent, fontSize: '10px', marginTop: '4px', flexShrink: 0 }}>✓</div>
                                            <span className="text-secondary" style={{ fontSize: '0.95rem' }}>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href={`https://wa.me/522871311971?text=Hola%20ocloudit,%20me%20interesa%20conocer%20el%20precio%20del%20paquete%20${encodeURIComponent(offer.title)}.`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn"
                                    style={{ width: '100%', background: offer.isPopular ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)' : 'rgba(255,255,255,0.05)', color: '#fff', border: offer.isPopular ? 'none' : '1px solid rgba(255,255,255,0.1)' }}
                                >
                                    Solicitar Cotización
                                </a>
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
};

export default Offers;

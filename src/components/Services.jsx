import React from 'react';
import ScrollReveal from './ScrollReveal';

const services = [
    {
        id: 'computacion',
        title: 'Soluciones en Computación',
        image: './service-hw.png',
        features: [
            'Mantenimiento Preventivo y Correctivo',
            'Venta y Ensamble de Equipos a Medida',
            'Recuperación y Respaldo de Datos',
            'Instalación de Software Especializado'
        ],
        description: 'Mantenemos tus equipos funcionando al 100%. Desde limpieza física hasta armado de computadoras de alto rendimiento para diseño o gaming con los mejores componentes del mercado.',
        reverse: false
    },
    {
        id: 'redes',
        title: 'Servicios IT y Redes',
        image: './service-net.png',
        features: [
            'Instalación y Configuración de Redes',
            'Soluciones en la Nube (Cloud)',
            'Ciberseguridad Empresarial',
            'Soporte Técnico Especializado'
        ],
        description: 'Conectividad estable y segura para tu negocio. Diseñamos e implementamos infraestructura de red, servidores y protección de datos para garantizar la continuidad de tus operaciones.',
        reverse: true
    },
    {
        id: 'desarrollo',
        title: 'Diseño y Desarrollo Web',
        image: '/service-web.png',
        features: [
            'Diseño Web y E-commerce',
            'Identidad Corporativa y Branding',
            'Diseño Digital y Gráfico',
            'Hosting y Dominios'
        ],
        description: 'Potenciamos tu marca en internet. Creamos sitios web rápidos, modernos y tiendas en línea con diseño responsivo que atraen y convierten clientes.',
        reverse: false
    }
];

const Services = () => {
    return (
        <section id="servicios" className="container py-24" style={{ backgroundColor: 'var(--color-bg-base)' }}>
            <ScrollReveal direction="up" className="text-center mb-16">
                <div style={{ display: 'inline-block', padding: '6px 16px', border: '1px solid rgba(139, 92, 246, 0.3)', borderRadius: '20px', color: 'var(--color-brand-primary)', fontSize: '0.85rem', marginBottom: '16px' }}>Nuestro Catálogo</div>
                <h2 style={{ fontSize: '3rem' }}>Servicios <span className="text-gradient">Especializados</span></h2>
                <p className="text-secondary" style={{ maxWidth: '600px', margin: '16px auto 0' }}>Soluciones tecnológicas a la medida para cubrir todas las necesidades de tu empresa.</p>
            </ScrollReveal>

            <div className="flex-col gap-16" style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
                {services.map((service, index) => (
                    <div key={service.id} className={`split-section ${service.reverse ? 'split-reverse' : ''}`}>
                        <ScrollReveal direction={service.reverse ? 'right' : 'left'} className="img-wrapper" style={{ height: '400px' }}>
                            <img src={service.image} alt={service.title} />
                        </ScrollReveal>

                        <ScrollReveal direction={service.reverse ? 'left' : 'right'} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'rgba(255,255,255,0.1)', marginBottom: '-20px' }}>0{index + 1}</div>
                            <h3 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>{service.title}</h3>
                            <p className="text-secondary" style={{ fontSize: '1.1rem', marginBottom: '32px', lineHeight: '1.7' }}>
                                {service.description}
                            </p>

                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {service.features.map((feature, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(139, 92, 246, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-brand-primary)', fontSize: '12px' }}>✓</div>
                                        <span style={{ fontSize: '1rem', color: 'var(--color-text-primary)' }}>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </ScrollReveal>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;

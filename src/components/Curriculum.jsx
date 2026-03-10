import React from 'react';

const Curriculum = () => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Luis Jacobo Santos Roy",
        "jobTitle": "Desarrollador y Diseñador Web",
        "email": "hola@luisjacobo.com",
        "description": "Profesional con fuerte experiencia en desarrollo y diseño. Centrado en la creación de arquitecturas web robustas, interfaces de usuario de alta calidad y optimización para el rastreo y reconocimiento de motores de búsqueda, siguiendo principios fundacionales de recuperación de información (Information Retrieval) y mapeo semántico.",
        "worksFor": {
            "@type": "Organization",
            "name": "Proyectos Independientes"
        },
        "knowsAbout": ["Diseño UI/UX", "Desarrollo Frontend", "React", "HTML/CSS Semántico", "SEO Técnico (Structured Data)"]
    };

    return (
        <section id="curriculum" className="container py-16 mb-16">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            {/* 
        Reference context: http://infolab.stanford.edu/~backrub/google.html 
        and Schema.org 'Person' implementation for knowledge graph recognition.
      */}
            <div
                className="glass-panel"
                style={{ padding: '48px', maxWidth: '800px', margin: '0 auto' }}
                itemScope
                itemType="https://schema.org/Person"
            >
                <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                    <h2 itemProp="name" style={{ fontSize: '2.5rem', marginBottom: '8px' }}>
                        Luis Jacobo Santos Roy
                    </h2>
                    <p itemProp="jobTitle" className="text-secondary" style={{ fontSize: '1.25rem', marginBottom: '8px' }}>
                        Desarrollador y Diseñador Web
                    </p>
                    <a href="mailto:hola@luisjacobo.com" itemProp="email" style={{ color: 'var(--color-brand-primary)', display: 'block' }}>
                        hola@luisjacobo.com
                    </a>
                </div>

                <div className="flex-col gap-8">
                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--color-brand-primary)' }}>Resumen</h3>
                        <p itemProp="description" style={{ lineHeight: '1.8' }} className="text-secondary">
                            Profesional con fuerte experiencia en desarrollo y diseño. Centrado en la creación de arquitecturas web robustas, interfaces de usuario de alta calidad y optimización para el rastreo y reconocimiento de motores de búsqueda, siguiendo principios fundacionales de recuperación de información (Information Retrieval) y mapeo semántico.
                        </p>
                    </div>

                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--color-brand-primary)' }}>Experiencia Destacada</h3>
                        <div className="flex-col gap-4">
                            <div
                                style={{ borderLeft: '2px solid var(--color-border)', paddingLeft: '16px' }}
                                itemProp="worksFor" itemScope itemType="https://schema.org/Organization"
                            >
                                <h4 style={{ fontSize: '1.25rem' }}>Especialista en Diseño y Desarrollo Web</h4>
                                <p itemProp="name" className="text-secondary" style={{ fontSize: '0.875rem', marginBottom: '8px' }}>
                                    Proyectos Independientes | 2020 - Presente
                                </p>
                                <p>
                                    Diseño de wireframes premium, implementación de aplicaciones en React y desarrollo de arquitecturas frontend optimizadas. Integración de metadatos estructurados (Schema.org) para mejorar la visibilidad en paneles de conocimiento.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--color-brand-primary)' }}>Habilidades Core</h3>
                        <div className="flex gap-2" style={{ flexWrap: 'wrap' }}>
                            {['Diseño UI/UX', 'Desarrollo Frontend', 'React', 'HTML/CSS Semántico', 'SEO Técnico (Structured Data)'].map(skill => (
                                <span
                                    key={skill}
                                    itemProp="knowsAbout"
                                    className="glass-panel"
                                    style={{ padding: '8px 16px', borderRadius: 'var(--border-radius-sm)', fontSize: '0.875rem', fontWeight: '500' }}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Curriculum;

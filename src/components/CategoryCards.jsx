import React from 'react';

const CategoryCards = () => {
    return (
        <section id="categories" className="container py-16">
            <div className="flex justify-between items-center mb-12">
                <h2 style={{ fontSize: '2.5rem' }}>Explorar Categorías</h2>
                <a href="#store" style={{ color: 'var(--color-brand-primary)', fontWeight: '600' }}>Ver todo &rarr;</a>
            </div>

            <div className="grid grid-cols-2 gap-6">
                {/* Category 1 */}
                <a href="#store" className="glass-panel" style={{ height: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '32px', position: 'relative', overflow: 'hidden', transition: 'transform var(--transition-normal)' }}>
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(45deg, rgba(20,20,24,0.9) 0%, rgba(139,92,246,0.3) 100%)', zIndex: 0 }}></div>
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <h3 style={{ fontSize: '2rem', marginBottom: '8px' }}>Tecnología</h3>
                        <p className="text-secondary">Innovación para tu día a día</p>
                    </div>
                </a>

                {/* Category 2 */}
                <a href="#store" className="glass-panel" style={{ height: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '32px', position: 'relative', overflow: 'hidden', transition: 'transform var(--transition-normal)' }}>
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(45deg, rgba(20,20,24,0.9) 0%, rgba(59,130,246,0.3) 100%)', zIndex: 0 }}></div>
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <h3 style={{ fontSize: '2rem', marginBottom: '8px' }}>Lifestyle</h3>
                        <p className="text-secondary">Accesorios que te definen</p>
                    </div>
                </a>
            </div>
        </section>
    );
};

export default CategoryCards;

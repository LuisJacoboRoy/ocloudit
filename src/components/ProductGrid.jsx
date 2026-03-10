import React from 'react';

const ProductGrid = () => {
    // Placeholder data for wireframe
    const products = [
        { id: 1, name: 'Auriculares Quantum', price: '$299', category: 'Tecnología' },
        { id: 2, name: 'Reloj Minimal Pro', price: '$199', category: 'Lifestyle' },
        { id: 3, name: 'Mochila Urbana', price: '$129', category: 'Lifestyle' },
        { id: 4, name: 'Teclado Mecánico X', price: '$159', category: 'Tecnología' }
    ];

    return (
        <section id="store" className="container py-16 mb-16">
            <div className="flex justify-between items-center mb-12">
                <h2 style={{ fontSize: '2.5rem' }}>Productos Destacados</h2>
                <div className="flex gap-4">
                    <button className="glass-panel" style={{ padding: '8px 16px', borderRadius: 'var(--border-radius-full)' }}>Todos</button>
                    <button className="glass-panel" style={{ padding: '8px 16px', borderRadius: 'var(--border-radius-full)', opacity: '0.6' }}>Tecnología</button>
                    <button className="glass-panel" style={{ padding: '8px 16px', borderRadius: 'var(--border-radius-full)', opacity: '0.6' }}>Lifestyle</button>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-6">
                {products.map(product => (
                    <div key={product.id} className="glass-panel flex-col" style={{ overflow: 'hidden', transition: 'transform var(--transition-normal)' }}>
                        {/* Image Placeholder */}
                        <div style={{ height: '240px', background: 'var(--color-bg-surface-elevated)', position: 'relative' }}>
                            <div style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(0,0,0,0.5)', padding: '4px 12px', borderRadius: 'var(--border-radius-full)', fontSize: '0.8rem' }}>
                                Nuevo
                            </div>
                        </div>

                        {/* Product Details */}
                        <div style={{ padding: '24px' }} className="flex-col gap-2">
                            <span className="text-secondary" style={{ fontSize: '0.875rem' }}>{product.category}</span>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>{product.name}</h3>
                            <div className="flex justify-between items-center mt-4">
                                <span style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--color-brand-primary)' }}>{product.price}</span>
                                <button className="btn btn-primary" style={{ padding: '8px', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductGrid;

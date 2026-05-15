import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Package, ChevronRight } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  route: string;
}

const PRODUCTS: Product[] = [
  {
    id: 'hamacas',
    name: 'Hamacas Artesanales',
    description: 'Hamacas tejidas con técnicas ancestrales. Disponibles en múltiples colores y diseños.',
    category: 'Mobiliario',
    image: 'https://images.unsplash.com/photo-1567689907821-c5c21b60a0f0?auto=format&fit=crop&w=500&q=60',
    route: 'hamacas'
  },
  {
    id: 'sillas',
    name: 'Sillas Tejidas',
    description: 'Sillas cómodas y decorativas con tejidos tradicionales y modernos.',
    category: 'Mobiliario',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=500&q=60',
    route: 'sillas'
  },
  {
    id: 'tapetes',
    name: 'Tapetes Artesanales',
    description: 'Tapetes decorativos con diseños únicos tejidos a mano.',
    category: 'Decoración',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=500&q=60',
    route: 'tapetes'
  },
  {
    id: 'bolsas',
    name: 'Bolsas Tejidas',
    description: 'Bolsas funcionales y elegantes, perfectas para cualquier ocasión.',
    category: 'Accesorios',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=500&q=60',
    route: 'bolsas'
  },
];

interface ProductSelectorProps {
  onSelectProduct: (productId: string, route: string) => void;
}

export default function ProductSelector({ onSelectProduct }: ProductSelectorProps) {
  const groupedByCategory = PRODUCTS.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {} as Record<string, Product[]>);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Catálogo de Productos Artesanales | OCLOUDIT CAPIS</title>
        <meta name="description" content="Explora nuestro catálogo de productos artesanales tejidos a mano: hamacas, sillas, tapetes y más. Calidad premium con técnicas ancestrales." />
        <meta name="keywords" content="productos artesanales, hamacas, tejidos, decoración, mobiliario, artesanías" />
        <meta property="og:title" content="Catálogo de Productos Artesanales | OCLOUDIT CAPIS" />
        <meta property="og:description" content="Descubre nuestros productos artesanales tejidos a mano con técnicas tradicionales." />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <nav className="flex items-center text-sm text-gray-500 mb-4">
            <Package className="w-4 h-4 mr-2" />
            <span>Catálogo de Productos</span>
          </nav>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Nuestros Productos</h1>
          <p className="text-gray-600 max-w-2xl">
            Descubre nuestra colección de productos artesanales tejidos con técnicas ancestrales y materiales de calidad premium.
          </p>
        </div>
      </header>

      {/* Products Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {Object.entries(groupedByCategory).map(([category, products]) => (
          <div key={category} className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-blue-600">
              {category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  onClick={() => onSelectProduct(product.id, product.route)}
                  className="group cursor-pointer bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col"
                >
                  {/* Product Image */}
                  <div className="relative h-64 overflow-hidden bg-gray-200">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                  </div>

                  {/* Product Info */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 flex-1">
                      {product.description}
                    </p>

                    {/* CTA Button */}
                    <button className="inline-flex items-center justify-between w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 group-hover:shadow-lg">
                      <span>Ver Detalles</span>
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
          <p>&copy; 2024 OCLOUDIT CAPIS - Productos Artesanales. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

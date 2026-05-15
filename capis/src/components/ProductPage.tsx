import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { ShoppingCart, CreditCard, ChevronRight, Check } from 'lucide-react';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';

const COLORS = [
  { id: 'crudo', name: 'Crudo Natural', code: 'CRU', hex: '#fdfbf7' },
  { id: 'negro', name: 'Negro Obsidiana', code: 'NEG', hex: '#1a1a1a' },
  { id: 'azul', name: 'Azul Marino', code: 'AZU', hex: '#1e3a8a' },
  { id: 'verde', name: 'Verde Selva', code: 'VER', hex: '#14532d' },
  { id: 'rojo', name: 'Rojo Terracota', code: 'ROJ', hex: '#b91c1c' },
  { id: 'mostaza', name: 'Amarillo Mostaza', code: 'MOS', hex: '#ca8a04' },
];

const WEAVES = [
  { id: 'sencilla', name: 'Sencilla', code: 'SEN' },
  { id: 'cuadro', name: 'Cuadro', code: 'CUA' },
  { id: 'petatillo', name: 'Petatillo', code: 'PET' },
  { id: 'yucateca', name: 'Yucateca', code: 'YUC' },
  { id: 'combinada', name: 'Combinada', code: 'COM' },
  { id: 'bandera', name: 'Bandera', code: 'BAN' },
];

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState(COLORS[0]);
  const [selectedWeave, setSelectedWeave] = useState(WEAVES[0]);

  // Synchronize state with URL search params for indexing/sharing
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlColorParam = params.get('color');
    const urlWeaveParam = params.get('tejido');

    if (urlColorParam) {
      const match = COLORS.find(c => c.id === urlColorParam);
      if (match) setSelectedColor(match);
    }
    if (urlWeaveParam) {
      const match = WEAVES.find(w => w.id === urlWeaveParam);
      if (match) setSelectedWeave(match);
    }
  }, []);

  const handleVariantChange = (colorId?: string, weaveId?: string) => {
    const newColor = colorId ? COLORS.find(c => c.id === colorId) || selectedColor : selectedColor;
    const newWeave = weaveId ? WEAVES.find(w => w.id === weaveId) || selectedWeave : selectedWeave;
    
    setSelectedColor(newColor);
    setSelectedWeave(newWeave);

    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set('color', newColor.id);
    newUrl.searchParams.set('tejido', newWeave.id);
    window.history.replaceState({}, '', newUrl);
  };

  const currentSku = useMemo(() => {
    return `HAM-${selectedColor.code}-${selectedWeave.code}-V1`;
  }, [selectedColor, selectedWeave]);

  const productName = `Hamaca Artesanal Premium`;
  const formatPrice = (amount: number) => new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(amount);
  const currentUrl = window.location.href;

  const getShareUrlFacebook = () => {
    return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  };

  const getShareUrlWhatsApp = () => {
    const text = `¡Mira esta hermosa ${productName} en color ${selectedColor.name} y tejido ${selectedWeave.name}! Cómprala aquí: ${currentUrl}`;
    return `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
  };

  const generatedTitle = `${productName} - Color ${selectedColor.name} | Tejido ${selectedWeave.name}`;
  const generatedDescription = `Descubre nuestra exclusiva hamaca en color ${selectedColor.name} y tejido ${selectedWeave.name}. Perfecta para tu hogar. SKU: ${currentSku}. Compra en línea hoy.`;
  const generateKeywords = `hamaca, artesanal, decoración, ${selectedColor.name}, tejido ${selectedWeave.name}, descanso, hamacas online`;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* SEO & Meta Tags */}
      <Helmet>
        <title>{generatedTitle}</title>
        <meta name="description" content={generatedDescription} />
        <meta name="keywords" content={generateKeywords} />
        
        {/* Open Graph Tags for Social Media */}
        <meta property="og:title" content={generatedTitle} />
        <meta property="og:description" content={generatedDescription} />
        <meta property="og:type" content="product" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:image" content="https://images.unsplash.com/photo-1528644485558-86d1b8277252?auto=format&fit=crop&w=1200&q=80" />
        <meta property="product:retailer_item_id" content={currentSku} />
        <meta property="product:condition" content="new" />
      </Helmet>

      {/* Basic Breadcrumbs */}
      <nav className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm text-gray-500">
        <a href="#" className="hover:text-gray-900 transition-colors">Inicio</a>
        <ChevronRight className="w-4 h-4 mx-2" />
        <a href="#" className="hover:text-gray-900 transition-colors">Decoración</a>
        <ChevronRight className="w-4 h-4 mx-2" />
        <span className="text-gray-900 font-medium truncate">{productName}</span>
      </nav>

      {/* Main Product Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Image Gallery Column */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200 shadow-sm relative group">
              <img 
                src="https://images.unsplash.com/photo-1528644485558-86d1b8277252?auto=format&fit=crop&w=1000&q=80" 
                alt={`${productName} en ${selectedColor.name}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-900 shadow-sm">
                Envío Gratis
              </div>
            </div>
            {/* Generic thumbnails placeholder */}
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <button key={i} className="aspect-square rounded-xl bg-gray-100 overflow-hidden border-2 border-transparent hover:border-gray-300 transition-colors">
                  <img 
                    src={`https://images.unsplash.com/photo-1528644485558-86d1b8277252?auto=format&fit=crop&w=300&q=80`} 
                    alt={`Vista ${i}`}
                    className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details Column */}
          <div className="w-full lg:w-1/2 flex flex-col pt-2">
            <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight leading-tight">
              {productName}
            </h1>
            <p className="mt-2 text-xl text-gray-500 font-medium">SKU: <span className="font-mono text-gray-400">{currentSku}</span></p>
            
            <div className="mt-4 flex items-baseline">
              <span className="text-4xl font-bold text-gray-900">{formatPrice(1499)}</span>
              <span className="text-lg text-gray-400 ml-2 line-through">{formatPrice(1999)}</span>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-8">
              {/* Color Selector */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-sm font-medium text-gray-900">
                    Color seleccionado: <span className="text-gray-500 font-normal">{selectedColor.name}</span>
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {COLORS.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => handleVariantChange(color.id, undefined)}
                      aria-label={`Seleccionar color ${color.name}`}
                      className={`relative w-12 h-12 rounded-full border-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-all ${
                        selectedColor.id === color.id ? 'border-gray-900 scale-110 shadow-md' : 'border-gray-200 hover:border-gray-300'
                      }`}
                      style={{ backgroundColor: color.hex }}
                    >
                      {selectedColor.id === color.id && (
                        <Check className="absolute inset-0 m-auto text-white drop-shadow-md w-5 h-5 pointer-events-none mix-blend-difference" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Weave Selector */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-sm font-medium text-gray-900">
                    Tipo de tejido: <span className="text-gray-500 font-normal">{selectedWeave.name}</span>
                  </h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {WEAVES.map((weave) => (
                    <button
                      key={weave.id}
                      onClick={() => handleVariantChange(undefined, weave.id)}
                      className={`px-4 py-3 border text-sm font-medium rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 ${
                        selectedWeave.id === weave.id 
                          ? 'border-gray-900 bg-gray-900 text-white shadow-md' 
                          : 'border-gray-200 text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-300'
                      }`}
                    >
                      {weave.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3 mt-4">
              <button className="w-full flex justify-center items-center py-4 px-8 rounded-xl bg-gray-900 hover:bg-gray-800 text-white font-medium text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 shadow-md">
                <CreditCard className="w-5 h-5 mr-3" />
                Hacer Pedido Ahora
              </button>
              <button className="w-full flex justify-center items-center py-3 px-8 rounded-xl bg-white border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-900 font-medium text-base transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                <ShoppingCart className="w-5 h-5 mr-3 text-gray-500" />
                Agregar al Carrito
              </button>
            </div>

            {/* Social Sharing */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="text-sm font-medium text-gray-900 mb-4">Comparte este diseño</h4>
              <div className="flex gap-4">
                <a 
                  href={getShareUrlWhatsApp()} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-sm font-medium text-[#25D366] hover:text-[#20BD5A] transition-colors p-2 -ml-2 rounded-lg hover:bg-green-50"
                  aria-label="Compartir en WhatsApp"
                >
                  {/* @ts-expect-error - react-icons TS error with className */}
                  <FaWhatsapp className="w-6 h-6 mr-2" />
                  WhatsApp
                </a>
                <a 
                  href={getShareUrlFacebook()} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-sm font-medium text-[#1877F2] hover:text-[#1664D9] transition-colors p-2 rounded-lg hover:bg-blue-50"
                  aria-label="Compartir en Facebook"
                >
                  {/* @ts-expect-error - react-icons TS error with className */}
                  <FaFacebook className="w-6 h-6 mr-2" />
                  Facebook
                </a>
              </div>
            </div>

            {/* Feature Highlights Guarantees */}
            <ul className="mt-8 space-y-4 text-sm text-gray-500">
              <li className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <Check className="w-3 h-3 text-green-700" />
                </div>
                Hecha a mano por artesanos locales.
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <Check className="w-3 h-3 text-green-700" />
                </div>
                Garantía de calidad de 12 meses.
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <Check className="w-3 h-3 text-green-700" />
                </div>
                Materiales 100% resistentes a exteriores.
              </li>
            </ul>

          </div>
        </div>
      </main>
    </div>
  );
}

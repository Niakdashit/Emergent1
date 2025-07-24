import React, { useState } from 'react';

// Sidebar Component with Expanded Panels
export const Sidebar = ({ selectedTool, setSelectedTool, fontFamily, setFontFamily }) => {
  const tools = [
    { id: 'Design', icon: '⚡', label: 'Design' },
    { id: 'Elements', icon: '◆', label: 'Éléments' },
    { id: 'Text', icon: 'Aa', label: 'Texte' },
    { id: 'Brand', icon: '★', label: 'Marque' },
    { id: 'Uploads', icon: '⬆', label: 'Importer' },
    { id: 'Tools', icon: '⚙', label: 'Outils' },
    { id: 'Projects', icon: '◉', label: 'Projets' },
    { id: 'Apps', icon: '⊞', label: 'Apps' }
  ];

  return (
    <div className="flex">
      {/* Main Sidebar */}
      <div className="w-20 bg-gray-900 text-white flex flex-col py-4 shadow-lg">
        {tools.map((tool) => (
          <button
            key={tool.id}
            onClick={() => setSelectedTool(tool.id)}
            className={`flex flex-col items-center py-4 px-2 hover:bg-gray-800 transition-all duration-200 ${
              selectedTool === tool.id ? 'bg-gray-800 border-r-3 border-purple-500 shadow-inner' : ''
            }`}
          >
            <div className="text-lg mb-1 font-medium">{tool.icon}</div>
            <span className="text-xs text-gray-400 font-medium">{tool.label}</span>
          </button>
        ))}
      </div>

      {/* Expanded Panel */}
      {selectedTool && (
        <div className="w-80 bg-white border-r border-gray-300 overflow-y-auto shadow-lg">
          <SidebarPanel selectedTool={selectedTool} fontFamily={fontFamily} setFontFamily={setFontFamily} />
        </div>
      )}
    </div>
  );
};

// Sidebar Panel Content Component
const SidebarPanel = ({ selectedTool, fontFamily, setFontFamily }) => {
  const renderPanelContent = () => {
    switch (selectedTool) {
      case 'Design':
        return <DesignPanel />;
      case 'Elements':
        return <ElementsPanel />;
      case 'Text':
        return <TextPanel setFontFamily={setFontFamily} fontFamily={fontFamily} />;
      case 'Brand':
        return <BrandPanel />;
      case 'Uploads':
        return <UploadsPanel />;
      case 'Tools':
        return <ToolsPanel />;
      case 'Projects':
        return <ProjectsPanel />;
      case 'Apps':
        return <AppsPanel />;
      default:
        return <div className="p-4">Select a tool</div>;
    }
  };

  return (
    <div className="h-full">
      {renderPanelContent()}
    </div>
  );
};

// Design Panel
const DesignPanel = () => {
  const templates = [
    { name: 'Post Instagram', size: '1080 × 1080 px', color: 'bg-gradient-to-br from-pink-400 to-pink-600', icon: '📱' },
    { name: 'Story Instagram', size: '1080 × 1920 px', color: 'bg-gradient-to-br from-purple-400 to-purple-600', icon: '📲' },
    { name: 'Publication Facebook', size: '1200 × 630 px', color: 'bg-gradient-to-br from-blue-400 to-blue-600', icon: '👥' },
    { name: 'Bannière LinkedIn', size: '1584 × 396 px', color: 'bg-gradient-to-br from-indigo-400 to-indigo-600', icon: '💼' },
    { name: 'Logo', size: '500 × 500 px', color: 'bg-gradient-to-br from-green-400 to-green-600', icon: '⭐' },
    { name: 'Flyer', size: '2480 × 3508 px', color: 'bg-gradient-to-br from-orange-400 to-orange-600', icon: '📄' }
  ];

  return (
    <div className="p-6">
      <h3 className="text-xl font-bold mb-6 text-gray-900">Créer un design</h3>
      
      <div className="mb-6">
        <input 
          type="text" 
          placeholder="Que souhaitez-vous créer ?" 
          className="w-full p-4 border border-gray-300 rounded-xl focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all"
        />
      </div>

      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">Formats recommandés</h4>
        <div className="grid grid-cols-1 gap-3">
          {templates.map((template, index) => (
            <div 
              key={index}
              className="flex items-center p-4 border border-gray-200 rounded-xl hover:border-purple-300 hover:shadow-md cursor-pointer transition-all duration-200 group"
            >
              <div className={`w-14 h-14 ${template.color} rounded-xl mr-4 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow`}>
                <span className="text-white text-xl">{template.icon}</span>
              </div>
              <div>
                <div className="font-semibold text-gray-900 mb-1">{template.name}</div>
                <div className="text-sm text-gray-600">{template.size}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">Dimensions personnalisées</h4>
        <button className="w-full p-4 border-2 border-dashed border-gray-300 rounded-xl text-gray-600 hover:border-purple-400 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200">
          + Créer un design personnalisé
        </button>
      </div>
    </div>
  );
};

// Elements Panel
const ElementsPanel = () => {
  const elementCategories = [
    { name: 'Lignes et formes', icon: '▭', count: '2M+' },
    { name: 'Autocollants', icon: '🌟', count: '500K+' },
    { name: 'Illustrations', icon: '🎨', count: '1M+' },
    { name: 'Icônes', icon: '🔷', count: '3M+' },
    { name: 'Photos', icon: '📷', count: '100M+' },
    { name: 'Vidéos', icon: '🎬', count: '50K+' },
    { name: 'Audio', icon: '🎵', count: '25K+' },
    { name: 'Graphiques', icon: '📊', count: '100K+' }
  ];

  const quickShapes = [
    { shape: '⭕', name: 'Circle' },
    { shape: '⬜', name: 'Square' },
    { shape: '🔺', name: 'Triangle' },
    { shape: '⭐', name: 'Star' },
    { shape: '💖', name: 'Heart' },
    { shape: '💬', name: 'Speech' }
  ];

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Éléments</h3>
      
      <div className="mb-6">
        <input 
          type="text" 
          placeholder="Rechercher des éléments..." 
          className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
        />
      </div>

      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-600 mb-3">FORMES RAPIDES</h4>
        <div className="grid grid-cols-3 gap-2">
          {quickShapes.map((item, index) => (
            <button 
              key={index}
              className="aspect-square bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center text-2xl transition-colors"
              title={item.name}
            >
              {item.shape}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        {elementCategories.map((category, index) => (
          <button 
            key={index}
            className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors text-left"
          >
            <div className="flex items-center">
              <span className="text-xl mr-3">{category.icon}</span>
              <span className="font-medium text-gray-800">{category.name}</span>
            </div>
            <span className="text-xs text-gray-500">{category.count}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

// Text Panel with Extensive Font Library
const TextPanel = ({ setFontFamily, fontFamily }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const textStyles = [
    { name: 'Titre principal', preview: 'Titre Principal', style: 'text-4xl font-bold' },
    { name: 'Sous-titre', preview: 'Sous-titre élégant', style: 'text-2xl font-semibold' },
    { name: 'Corps de texte', preview: 'Texte de paragraphe', style: 'text-base' },
    { name: 'Citation', preview: '"Une belle citation"', style: 'text-lg italic' },
    { name: 'Texte d\'accent', preview: 'Accent spécial', style: 'text-lg font-medium' }
  ];

  const fontCategories = [
    { id: 'all', name: 'Toutes', count: '50+' },
    { id: 'serif', name: 'Serif', count: '12' },
    { id: 'sans-serif', name: 'Sans Serif', count: '15' },
    { id: 'script', name: 'Script', count: '10' },
    { id: 'display', name: 'Display', count: '8' },
    { id: 'monospace', name: 'Monospace', count: '5' }
  ];

  const fontLibrary = [
    // Sans Serif
    { name: 'Brick Sans', category: 'sans-serif', preview: 'Brick Sans', weight: 'font-bold', popular: true },
    { name: 'Oswald', category: 'sans-serif', preview: 'Oswald', weight: 'font-bold', popular: true },
    { name: 'Slopes', category: 'sans-serif', preview: 'Slopes', weight: 'font-medium', popular: false },
    { name: 'Helvetica', category: 'sans-serif', preview: 'Helvetica', weight: 'font-normal', popular: true },
    { name: 'Arial', category: 'sans-serif', preview: 'Arial', weight: 'font-normal', popular: true },
    { name: 'Roboto', category: 'sans-serif', preview: 'Roboto', weight: 'font-normal', popular: true },
    { name: 'Open Sans', category: 'sans-serif', preview: 'Open Sans', weight: 'font-normal', popular: true },
    { name: 'Lato', category: 'sans-serif', preview: 'Lato', weight: 'font-normal', popular: true },
    { name: 'Montserrat', category: 'sans-serif', preview: 'Montserrat', weight: 'font-semibold', popular: true },
    { name: 'Source Sans Pro', category: 'sans-serif', preview: 'Source Sans Pro', weight: 'font-normal', popular: false },
    { name: 'Nunito', category: 'sans-serif', preview: 'Nunito', weight: 'font-normal', popular: false },
    { name: 'Poppins', category: 'sans-serif', preview: 'Poppins', weight: 'font-medium', popular: true },
    { name: 'Inter', category: 'sans-serif', preview: 'Inter', weight: 'font-normal', popular: true },
    { name: 'Work Sans', category: 'sans-serif', preview: 'Work Sans', weight: 'font-normal', popular: false },
    { name: 'Fira Sans', category: 'sans-serif', preview: 'Fira Sans', weight: 'font-normal', popular: false },

    // Serif
    { name: 'Times New Roman', category: 'serif', preview: 'Times New Roman', weight: 'font-normal', popular: true },
    { name: 'Georgia', category: 'serif', preview: 'Georgia', weight: 'font-normal', popular: true },
    { name: 'Playfair Display', category: 'serif', preview: 'Playfair Display', weight: 'font-bold', popular: true },
    { name: 'Merriweather', category: 'serif', preview: 'Merriweather', weight: 'font-normal', popular: true },
    { name: 'Crimson Text', category: 'serif', preview: 'Crimson Text', weight: 'font-normal', popular: false },
    { name: 'Lora', category: 'serif', preview: 'Lora', weight: 'font-normal', popular: true },
    { name: 'PT Serif', category: 'serif', preview: 'PT Serif', weight: 'font-normal', popular: false },
    { name: 'Libre Baskerville', category: 'serif', preview: 'Libre Baskerville', weight: 'font-normal', popular: false },
    { name: 'EB Garamond', category: 'serif', preview: 'EB Garamond', weight: 'font-normal', popular: true },
    { name: 'Cormorant Garamond', category: 'serif', preview: 'Cormorant Garamond', weight: 'font-light', popular: false },
    { name: 'Vollkorn', category: 'serif', preview: 'Vollkorn', weight: 'font-normal', popular: false },
    { name: 'Cardo', category: 'serif', preview: 'Cardo', weight: 'font-normal', popular: false },

    // Script
    { name: 'Magnolia Script', category: 'script', preview: 'Magnolia Script', weight: 'font-normal', popular: true },
    { name: 'Adlery Pro', category: 'script', preview: 'Adlery Pro', weight: 'font-normal', popular: true },
    { name: 'Grand Hotel', category: 'script', preview: 'Grand Hotel', weight: 'font-normal', popular: true },
    { name: 'Dancing Script', category: 'script', preview: 'Dancing Script', weight: 'font-normal', popular: true },
    { name: 'Pacifico', category: 'script', preview: 'Pacifico', weight: 'font-normal', popular: true },
    { name: 'Great Vibes', category: 'script', preview: 'Great Vibes', weight: 'font-normal', popular: false },
    { name: 'Kaushan Script', category: 'script', preview: 'Kaushan Script', weight: 'font-normal', popular: false },
    { name: 'Satisfy', category: 'script', preview: 'Satisfy', weight: 'font-normal', popular: false },
    { name: 'Allura', category: 'script', preview: 'Allura', weight: 'font-normal', popular: false },
    { name: 'Sacramento', category: 'script', preview: 'Sacramento', weight: 'font-normal', popular: false },

    // Display
    { name: 'LAZYDOG', category: 'display', preview: 'LAZYDOG', weight: 'font-black', popular: true },
    { name: 'Aprila', category: 'display', preview: 'Aprila', weight: 'font-bold', popular: true },
    { name: 'Apricots', category: 'display', preview: 'Apricots', weight: 'font-normal', popular: false },
    { name: 'Chewy', category: 'display', preview: 'Chewy', weight: 'font-normal', popular: true },
    { name: 'TT Drugs', category: 'display', preview: 'TT Drugs', weight: 'font-bold', popular: false },
    { name: 'Bebas Neue', category: 'display', preview: 'Bebas Neue', weight: 'font-bold', popular: true },
    { name: 'Anton', category: 'display', preview: 'Anton', weight: 'font-bold', popular: true },
    { name: 'Righteous', category: 'display', preview: 'Righteous', weight: 'font-bold', popular: false },

    // Monospace
    { name: 'Schoolbell', category: 'monospace', preview: 'Schoolbell', weight: 'font-normal', popular: false },
    { name: 'Courier New', category: 'monospace', preview: 'Courier New', weight: 'font-normal', popular: true },
    { name: 'Monaco', category: 'monospace', preview: 'Monaco', weight: 'font-normal', popular: true },
    { name: 'Fira Code', category: 'monospace', preview: 'Fira Code', weight: 'font-normal', popular: true },
    { name: 'JetBrains Mono', category: 'monospace', preview: 'JetBrains Mono', weight: 'font-normal', popular: false }
  ];

  const filteredFonts = fontLibrary.filter(font => {
    const matchesCategory = selectedCategory === 'all' || font.category === selectedCategory;
    const matchesSearch = font.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const popularFonts = fontLibrary.filter(font => font.popular);

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Texte</h3>
      
      <div className="mb-6">
        <button className="w-full p-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold">
          + Ajouter une zone de texte
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-4">
        <input 
          type="text" 
          placeholder="Rechercher des polices..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
        />
      </div>

      {/* Font Categories */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-600 mb-3">CATÉGORIES</h4>
        <div className="grid grid-cols-2 gap-2">
          {fontCategories.map((category) => (
            <button 
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`p-2 text-sm border rounded-lg transition-colors text-left ${
                selectedCategory === category.id 
                  ? 'border-purple-500 bg-purple-50 text-purple-700' 
                  : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50'
              }`}
            >
              <div className="font-medium">{category.name}</div>
              <div className="text-xs text-gray-500">{category.count} polices</div>
            </button>
          ))}
        </div>
      </div>

      {/* Popular Fonts (only show when 'all' is selected and no search) */}
      {selectedCategory === 'all' && !searchTerm && (
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-600 mb-3">POPULAIRES</h4>
          <div className="space-y-2">
            {popularFonts.slice(0, 6).map((font, index) => (
              <button 
                key={`popular-${index}`}
                onClick={() => setFontFamily && setFontFamily(font.name)}
                className={`w-full p-3 border rounded-lg hover:border-purple-300 hover:shadow-sm cursor-pointer transition-all text-left ${
                  fontFamily === font.name ? 'border-purple-500 bg-purple-50' : 'border-gray-200'
                }`}
              >
                <div className={`${font.weight} text-gray-800 mb-1`} style={{fontFamily: font.name}}>
                  {font.preview}
                </div>
                <div className="text-xs text-gray-500 flex items-center justify-between">
                  <span>{font.name}</span>
                  <span className="text-orange-500">⭐</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* All Fonts */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-600 mb-3">
          {selectedCategory === 'all' ? 'TOUTES LES POLICES' : fontCategories.find(c => c.id === selectedCategory)?.name?.toUpperCase()}
          <span className="ml-2 text-gray-400">({filteredFonts.length})</span>
        </h4>
        <div className="space-y-2 max-h-96 overflow-y-auto">
          {filteredFonts.map((font, index) => (
            <button 
              key={index}
              onClick={() => setFontFamily && setFontFamily(font.name)}
              className={`w-full p-3 border rounded-lg hover:border-purple-300 hover:shadow-sm cursor-pointer transition-all text-left ${
                fontFamily === font.name ? 'border-purple-500 bg-purple-50' : 'border-gray-200'
              }`}
            >
              <div className={`${font.weight} text-gray-800 mb-1`} style={{fontFamily: font.name}}>
                {font.preview}
              </div>
              <div className="text-xs text-gray-500 flex items-center justify-between">
                <span>{font.name}</span>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-1 bg-gray-100 rounded text-xs">
                    {fontCategories.find(c => c.id === font.category)?.name}
                  </span>
                  {font.popular && <span className="text-orange-500">⭐</span>}
                  }
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Text Styles */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-600 mb-3">STYLES DE TEXTE</h4>
        <div className="space-y-3">
          {textStyles.map((style, index) => (
            <button 
              key={index}
              className="w-full p-3 border border-gray-200 rounded-lg hover:border-purple-300 hover:shadow-sm cursor-pointer transition-all text-left"
            >
              <div className={`${style.style} text-gray-800 mb-1`} style={{fontFamily: fontFamily || 'Inter'}}>
                {style.preview}
              </div>
              <div className="text-xs text-gray-500">{style.name}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Text Effects */}
      <div>
        <h4 className="text-sm font-medium text-gray-600 mb-3">EFFETS DE TEXTE</h4>
        <div className="grid grid-cols-2 gap-2">
          <button className="p-3 border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-colors">
            <div className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Gradient
            </div>
            <div className="text-xs text-gray-500 mt-1">Dégradé</div>
          </button>
          <button className="p-3 border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-colors">
            <div className="text-sm font-semibold text-gray-800" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>
              Ombre
            </div>
            <div className="text-xs text-gray-500 mt-1">Drop shadow</div>
          </button>
          <button className="p-3 border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-colors">
            <div className="text-sm font-semibold text-gray-800 border-2 border-gray-800 inline-block px-2">
              Contour
            </div>
            <div className="text-xs text-gray-500 mt-1">Outline</div>
          </button>
          <button className="p-3 border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-colors">
            <div className="text-sm font-semibold bg-yellow-300 text-gray-800 inline-block px-2">
              Surligné
            </div>
            <div className="text-xs text-gray-500 mt-1">Highlight</div>
          </button>
        </div>
      </div>
    </div>
  );
};

// Brand Panel
const BrandPanel = () => {
  const brandColors = [
    '#6366f1', '#8b5cf6', '#ec4899', '#ef4444', '#f97316', 
    '#eab308', '#22c55e', '#06b6d4', '#3b82f6', '#6b7280'
  ];

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Marque</h3>
      
      <div className="mb-6">
        <button className="w-full p-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold">
          + Créer un kit de marque
        </button>
      </div>

      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-600 mb-3">COULEURS DE MARQUE</h4>
        <div className="grid grid-cols-5 gap-2 mb-3">
          {brandColors.map((color, index) => (
            <button 
              key={index}
              className="aspect-square rounded-lg border-2 border-gray-200 hover:scale-110 transition-transform"
              style={{ backgroundColor: color }}
              title={color}
            />
          ))}
        </div>
        <button className="w-full p-2 text-sm text-indigo-600 hover:text-indigo-700 font-medium">
          + Ajouter une couleur
        </button>
      </div>

      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-600 mb-3">POLICES DE MARQUE</h4>
        <div className="space-y-2">
          <div className="p-3 border border-gray-200 rounded-lg">
            <div className="font-bold text-lg">Montserrat</div>
            <div className="text-sm text-gray-500">Titre principal</div>
          </div>
          <div className="p-3 border border-gray-200 rounded-lg">
            <div className="text-base">Open Sans</div>
            <div className="text-sm text-gray-500">Corps de texte</div>
          </div>
        </div>
        <button className="w-full p-2 text-sm text-indigo-600 hover:text-indigo-700 font-medium mt-2">
          + Ajouter une police
        </button>
      </div>

      <div>
        <h4 className="text-sm font-medium text-gray-600 mb-3">LOGOS</h4>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <div className="text-gray-400 mb-2">📷</div>
          <div className="text-sm text-gray-500">Télécharger votre logo</div>
        </div>
      </div>
    </div>
  );
};

// Uploads Panel
const UploadsPanel = () => {
  const recentUploads = [
    { name: 'background.jpg', type: 'image', size: '2.4 MB' },
    { name: 'logo.png', type: 'image', size: '186 KB' },
    { name: 'video-intro.mp4', type: 'video', size: '15.2 MB' },
    { name: 'texture.jpg', type: 'image', size: '1.8 MB' }
  ];

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Téléchargements</h3>
      
      <div className="mb-6">
        <button className="w-full p-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold">
          📁 Télécharger des médias
        </button>
      </div>

      <div className="mb-6">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-400 transition-colors">
          <div className="text-4xl text-gray-400 mb-3">📤</div>
          <div className="text-lg font-medium text-gray-700 mb-2">Glisser-déposer vos fichiers ici</div>
          <div className="text-sm text-gray-500">PNG, JPG, GIF, MP4 jusqu'à 100MB</div>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-600 mb-3">RÉCENTS</h4>
        <div className="space-y-2">
          {recentUploads.map((file, index) => (
            <div key={index} className="flex items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
              <div className="w-12 h-12 bg-gray-200 rounded-lg mr-3 flex items-center justify-center">
                {file.type === 'image' ? '🖼️' : '🎬'}
              </div>
              <div className="flex-1">
                <div className="font-medium text-gray-800 text-sm">{file.name}</div>
                <div className="text-xs text-gray-500">{file.size}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium text-gray-600 mb-3">DOSSIERS</h4>
        <button className="w-full p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
          <div className="flex items-center">
            <span className="text-xl mr-3">📁</span>
            <span className="font-medium text-gray-800">Créer un dossier</span>
          </div>
        </button>
      </div>
    </div>
  );
};

// Tools Panel
const ToolsPanel = () => {
  const tools = [
    { name: 'Suppression d\'arrière-plan', icon: '✂️', description: 'Supprimer automatiquement l\'arrière-plan' },
    { name: 'Redimensionner', icon: '📏', description: 'Ajuster les dimensions de votre design' },
    { name: 'Recadrer', icon: '✂️', description: 'Recadrer vos images et éléments' },
    { name: 'Amélioration d\'image', icon: '✨', description: 'Améliorer la qualité automatiquement' },
    { name: 'Générateur QR Code', icon: '⬛', description: 'Créer des codes QR personnalisés' },
    { name: 'Convertisseur de couleur', icon: '🎨', description: 'Convertir entre formats de couleur' }
  ];

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Outils</h3>
      
      <div className="space-y-3">
        {tools.map((tool, index) => (
          <button 
            key={index}
            className="w-full p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-sm cursor-pointer transition-all text-left"
          >
            <div className="flex items-start">
              <span className="text-2xl mr-3">{tool.icon}</span>
              <div>
                <div className="font-medium text-gray-800 mb-1">{tool.name}</div>
                <div className="text-sm text-gray-500">{tool.description}</div>
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-semibold text-blue-800 mb-2">💡 Astuce</h4>
        <p className="text-sm text-blue-700">
          La plupart de ces outils sont alimentés par l'IA pour vous faire gagner du temps !
        </p>
      </div>
    </div>
  );
};

// Projects Panel
const ProjectsPanel = () => {
  const recentProjects = [
    { name: 'Post Instagram - Promotion', type: 'Instagram Post', modified: '2 heures', thumbnail: 'bg-pink-200' },
    { name: 'Logo Entreprise', type: 'Logo', modified: '1 jour', thumbnail: 'bg-blue-200' },
    { name: 'Flyer Événement', type: 'Flyer', modified: '3 jours', thumbnail: 'bg-green-200' },
    { name: 'Présentation Client', type: 'Présentation', modified: '1 semaine', thumbnail: 'bg-purple-200' }
  ];

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Projets</h3>
      
      <div className="mb-6">
        <button className="w-full p-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold">
          + Nouveau projet
        </button>
      </div>

      <div className="mb-6">
        <div className="flex space-x-2">
          <input 
            type="text" 
            placeholder="Rechercher des projets..." 
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
          />
          <button className="px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
            🔍
          </button>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-600 mb-3">RÉCENTS</h4>
        <div className="space-y-3">
          {recentProjects.map((project, index) => (
            <div 
              key={index}
              className="flex items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
            >
              <div className={`w-12 h-12 ${project.thumbnail} rounded-lg mr-3 flex items-center justify-center`}>
                <div className="w-6 h-6 bg-white rounded opacity-60"></div>
              </div>
              <div className="flex-1">
                <div className="font-medium text-gray-800 text-sm">{project.name}</div>
                <div className="text-xs text-gray-500">{project.type} • Modifié il y a {project.modified}</div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">⋮</button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium text-gray-600 mb-3">DOSSIERS</h4>
        <button className="w-full p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
          <div className="flex items-center">
            <span className="text-xl mr-3">📁</span>
            <span className="font-medium text-gray-800">Créer un dossier</span>
          </div>
        </button>
      </div>
    </div>
  );
};

// Apps Panel
const AppsPanel = () => {
  const apps = [
    { name: 'Google Drive', icon: '💾', description: 'Importer depuis Google Drive', connected: true },
    { name: 'Dropbox', icon: '📦', description: 'Synchroniser avec Dropbox', connected: false },
    { name: 'Unsplash', icon: '📸', description: 'Photos gratuites haute qualité', connected: true },
    { name: 'Giphy', icon: '🎭', description: 'GIFs animés et autocollants', connected: true },
    { name: 'YouTube', icon: '🎬', description: 'Intégrer des vidéos YouTube', connected: false },
    { name: 'Spotify', icon: '🎵', description: 'Musique pour vos vidéos', connected: false }
  ];

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Applications</h3>
      
      <div className="mb-6">
        <input 
          type="text" 
          placeholder="Rechercher des applications..." 
          className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
        />
      </div>

      <div className="space-y-3">
        {apps.map((app, index) => (
          <div 
            key={index}
            className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-sm cursor-pointer transition-all"
          >
            <div className="flex items-center">
              <span className="text-2xl mr-3">{app.icon}</span>
              <div>
                <div className="font-medium text-gray-800">{app.name}</div>
                <div className="text-sm text-gray-500">{app.description}</div>
              </div>
            </div>
            <div>
              {app.connected ? (
                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                  Connecté
                </span>
              ) : (
                <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                  Connecter
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-yellow-50 rounded-lg">
        <h4 className="font-semibold text-yellow-800 mb-2">⭐ Suggestion</h4>
        <p className="text-sm text-yellow-700">
          Connectez vos applications favorites pour accéder rapidement à vos contenus !
        </p>
      </div>
    </div>
  );
};

// Top Toolbar Component
export const TopToolbar = ({
  fontSize, setFontSize, fontFamily, setFontFamily,
  textColor, setTextColor, isBold, setIsBold,
  isItalic, setIsItalic, isUnderline, setIsUnderline,
  alignment, setAlignment
}) => {
  return (
    <div className="bg-gray-900 text-white px-4 py-2 flex items-center space-x-4 border-b border-gray-700">
      {/* Font Family */}
      <select 
        value={fontFamily}
        onChange={(e) => setFontFamily(e.target.value)}
        className="bg-gray-800 text-white px-3 py-1 rounded border border-gray-600 focus:border-blue-500 focus:outline-none"
      >
        <option value="Canva Sans">Canva Sans</option>
        <option value="Arial">Arial</option>
        <option value="Helvetica">Helvetica</option>
        <option value="Times">Times</option>
      </select>

      {/* Font Size */}
      <div className="flex items-center space-x-2">
        <button 
          onClick={() => setFontSize(Math.max(8, fontSize - 2))}
          className="bg-gray-800 hover:bg-gray-700 px-2 py-1 rounded"
        >
          −
        </button>
        <span className="bg-gray-800 px-3 py-1 rounded min-w-12 text-center">{fontSize}</span>
        <button 
          onClick={() => setFontSize(Math.min(200, fontSize + 2))}
          className="bg-gray-800 hover:bg-gray-700 px-2 py-1 rounded"
        >
          +
        </button>
      </div>

      {/* Color Picker */}
      <div className="flex items-center space-x-2">
        <span className="text-sm">A</span>
        <input
          type="color"
          value={textColor}
          onChange={(e) => setTextColor(e.target.value)}
          className="w-8 h-8 rounded cursor-pointer"
        />
      </div>

      {/* Text Formatting */}
      <div className="flex items-center space-x-1">
        <button
          onClick={() => setIsBold(!isBold)}
          className={`px-3 py-1 rounded font-bold ${isBold ? 'bg-blue-600' : 'bg-gray-800 hover:bg-gray-700'}`}
        >
          B
        </button>
        <button
          onClick={() => setIsItalic(!isItalic)}
          className={`px-3 py-1 rounded italic ${isItalic ? 'bg-blue-600' : 'bg-gray-800 hover:bg-gray-700'}`}
        >
          I
        </button>
        <button
          onClick={() => setIsUnderline(!isUnderline)}
          className={`px-3 py-1 rounded underline ${isUnderline ? 'bg-blue-600' : 'bg-gray-800 hover:bg-gray-700'}`}
        >
          U
        </button>
      </div>

      {/* Alignment */}
      <div className="flex items-center space-x-1">
        {['left', 'center', 'right'].map((align) => (
          <button
            key={align}
            onClick={() => setAlignment(align)}
            className={`px-3 py-1 rounded ${alignment === align ? 'bg-blue-600' : 'bg-gray-800 hover:bg-gray-700'}`}
          >
            {align === 'left' ? '⌊' : align === 'center' ? '▬' : '⌉'}
          </button>
        ))}
      </div>

      {/* Additional Tools */}
      <div className="flex items-center space-x-2 ml-auto">
        <button className="bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded">Effects</button>
        <button className="bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded">🎬 Animate</button>  
        <button className="bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded">Position</button>
        <button className="bg-gray-800 hover:bg-gray-700 px-2 py-1 rounded">T</button>
      </div>
    </div>
  );
};

// Device Preview Tabs
export const DevicePreview = ({ selectedDevice, setSelectedDevice }) => {
  const devices = [
    { id: 'mobile', label: 'Mobile', icon: '📱' },
    { id: 'tablet', label: 'Tablette', icon: '📱' },
    { id: 'desktop', label: 'Ordinateur', icon: '💻' }
  ];

  return (
    <div className="flex justify-center mb-4">
      <div className="flex bg-gray-100 rounded-xl p-1 shadow-sm border border-gray-200">
        {devices.map((device) => (
          <button
            key={device.id}
            onClick={() => setSelectedDevice(device.id)}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-200 ${
              selectedDevice === device.id 
                ? 'bg-white shadow-md text-purple-600 font-medium' 
                : 'hover:bg-gray-200 text-gray-600'
            }`}
          >
            <span>{device.icon}</span>
            <span className="text-sm font-medium">{device.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

// Spinning Wheel Component (simplified for Canva preview)
const SpinningWheelPreview = () => {
  return (
    <div className="flex items-center justify-center relative">
      <div className="relative">
        {/* LED Lights Ring */}
        <div className="absolute -inset-4 rounded-full">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-full shadow-lg animate-pulse"
              style={{
                top: '50%',
                left: '50%',
                transformOrigin: '50% 50%',
                transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-70px)`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>

        {/* Main Wheel */}
        <div className="relative w-40 h-40 rounded-full shadow-2xl bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 border-4 border-yellow-600">
          {/* Wheel Segments */}
          <svg className="w-full h-full" viewBox="0 0 100 100">
            {[...Array(8)].map((_, index) => {
              const angle = (index * 45) - 90;
              const startAngle = angle * (Math.PI / 180);
              const endAngle = (angle + 45) * (Math.PI / 180);
              
              const x1 = 50 + 45 * Math.cos(startAngle);
              const y1 = 50 + 45 * Math.sin(startAngle);
              const x2 = 50 + 45 * Math.cos(endAngle);
              const y2 = 50 + 45 * Math.sin(endAngle);
              
              const pathData = [
                `M 50 50`,
                `L ${x1} ${y1}`,
                `A 45 45 0 0 1 ${x2} ${y2}`,
                'Z'
              ].join(' ');

              return (
                <path
                  key={index}
                  d={pathData}
                  fill={index % 2 === 0 ? "#ef4444" : "#fef3c7"}
                  stroke="#f59e0b"
                  strokeWidth="0.5"
                />
              );
            })}
          </svg>

          {/* Center Hub */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full border-3 border-yellow-600 flex items-center justify-center shadow-lg">
            <div className="w-4 h-4 bg-gradient-to-br from-red-500 to-red-700 rounded-full shadow-inner"></div>
          </div>

          {/* Pointer */}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-red-600 shadow-lg"></div>
        </div>
      </div>
    </div>
  );
};

// Canvas Area Component
export const CanvasArea = ({ selectedDevice, setSelectedDevice, designContent }) => {
  const getDeviceStyles = () => {
    switch (selectedDevice) {
      case 'mobile':
        return { 
          width: '375px', 
          height: '667px',
          borderRadius: '30px',
          border: '6px solid #374151',
          padding: '25px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        };
      case 'tablet':
        return { 
          width: '768px', 
          height: '600px',
          borderRadius: '20px',
          border: '4px solid #4b5563',
          padding: '20px',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
        };
      case 'desktop':
        return { 
          width: '1200px', 
          height: '700px',
          borderRadius: '12px',
          border: '2px solid #d1d5db',
          padding: '0',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
        };
      default:
        return { 
          width: '768px', 
          height: '600px',
          borderRadius: '20px',
          border: '4px solid #4b5563',
          padding: '20px',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
        };
    }
  };

  return (
    <div className="flex-1 p-8 bg-gradient-to-br from-gray-50 to-gray-100 overflow-auto">
      {/* Device Preview Tabs */}
      <DevicePreview selectedDevice={selectedDevice} setSelectedDevice={setSelectedDevice} />
      
      {/* Canvas Container */}
      <div className="flex justify-center items-center min-h-96 py-8">
        <div 
          className="bg-gradient-to-b from-sky-400 via-sky-300 to-emerald-400 relative overflow-hidden"
          style={getDeviceStyles()}
        >
          {/* Mobile Status Bar (for mobile view) */}
          {selectedDevice === 'mobile' && (
            <div className="absolute top-3 left-6 right-6 flex justify-between items-center text-white text-sm font-medium">
              <div className="flex items-center space-x-1">
                <div className="flex space-x-1">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                </div>
                <span className="text-xs ml-2">Bouygues</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xs">14:32</span>
                <div className="flex items-center space-x-1">
                  <div className="w-6 h-3 border border-white rounded-sm">
                    <div className="w-4 h-1 bg-white rounded-full mt-0.5 ml-0.5"></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Desktop Browser Bar (for desktop view) */}
          {selectedDevice === 'desktop' && (
            <div className="absolute top-0 left-0 right-0 h-10 bg-gray-200 flex items-center px-4 border-b border-gray-300">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-white rounded-md px-3 py-1 text-sm text-gray-600 border">
                  https://mon-jeu-concours.fr
                </div>
              </div>
            </div>
          )}

          {/* Clouds */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-12 left-10 w-20 h-12 bg-white/90 rounded-full shadow-lg"></div>
            <div className="absolute top-14 left-14 w-12 h-8 bg-white/80 rounded-full"></div>
            
            <div className="absolute top-16 right-16 w-24 h-14 bg-white/90 rounded-full shadow-lg"></div>
            <div className="absolute top-18 right-20 w-14 h-10 bg-white/80 rounded-full"></div>
            
            <div className="absolute top-20 left-1/3 w-16 h-10 bg-white/70 rounded-full"></div>
          </div>

          {/* Title */}
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center z-10">
            <h1 className={`text-white drop-shadow-lg mb-2 font-bold ${
              selectedDevice === 'mobile' ? 'text-3xl' : 
              selectedDevice === 'tablet' ? 'text-5xl' : 'text-7xl'
            }`}>
              Jouez pour gagner
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full shadow-lg"></div>
          </div>

          {/* Spinning Wheel */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <SpinningWheelPreview />
          </div>

          {/* Rolling Hills */}
          <div className="absolute bottom-0 left-0 w-full">
            <svg viewBox="0 0 400 100" className="w-full h-20">
              <path
                d="M0,100 Q100,60 200,65 T400,60 L400,100 Z"
                fill="#22c55e"
              />
              <path
                d="M0,100 Q75,75 150,80 T300,75 Q350,70 400,80 L400,100 Z"
                fill="#16a34a"
              />
            </svg>
          </div>

          {/* Mobile Bottom Indicator */}
          {selectedDevice === 'mobile' && (
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-36 h-1 bg-white/30 rounded-full"></div>
          )}
        </div>
      </div>

      {/* Canvas Navigation */}
      <div className="flex justify-center mt-6">
        <div className="flex items-center space-x-4">
          <button className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105">
            <span className="text-gray-600">←</span>
          </button>
          <span className="text-sm text-gray-600 font-medium px-4 py-2 bg-white rounded-full shadow-sm">Page 1 sur 1</span>
          <button className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105">
            <span className="text-gray-600">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// Bottom Controls Component
export const BottomControls = () => {
  return (
    <div className="bg-white border-t border-gray-300 px-6 py-4 flex items-center justify-between shadow-lg">
      {/* Left Side */}
      <div className="flex items-center space-x-4">
        <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors">
          <span>←</span>
          <span className="text-sm font-medium">Retour</span>
        </button>
        <div className="text-sm text-gray-500">
          Dernière modification: il y a 2 minutes
        </div>
      </div>
      </button>

      {/* Right Side */}
      <div className="flex items-center space-x-3">
        <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all duration-200">
          <span>👁</span>
          <span className="text-sm font-medium text-gray-700">Aperçu</span>
        </button>
        
        <button className="flex items-center space-x-2 px-4 py-2 border border-purple-300 text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-200">
          <span>⬇</span>
          <span className="text-sm font-medium">Télécharger</span>
        </button>
        
        <button className="flex items-center space-x-2 px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
          <span>↗</span>
          <span className="text-sm font-medium">Partager</span>
        </button>
      </div>
    </div>
  );
};
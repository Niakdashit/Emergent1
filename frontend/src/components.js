import React, { useState } from 'react';

// Sidebar Component
export const Sidebar = ({ selectedTool, setSelectedTool }) => {
  const tools = [
    { id: 'Design', icon: '📐', label: 'Design' },
    { id: 'Elements', icon: '🔸', label: 'Elements' },
    { id: 'Text', icon: 'T', label: 'Text' },
    { id: 'Brand', icon: '🎨', label: 'Brand' },
    { id: 'Uploads', icon: '📁', label: 'Uploads' },
    { id: 'Tools', icon: '🔧', label: 'Tools' },
    { id: 'Projects', icon: '📋', label: 'Projects' },
    { id: 'Apps', icon: '⊞', label: 'Apps' }
  ];

  return (
    <div className="w-20 bg-gray-800 text-white flex flex-col py-4">
      {tools.map((tool) => (
        <button
          key={tool.id}
          onClick={() => setSelectedTool(tool.id)}
          className={`flex flex-col items-center py-4 px-2 hover:bg-gray-700 transition-colors ${
            selectedTool === tool.id ? 'bg-gray-700 border-r-2 border-blue-500' : ''
          }`}
        >
          <div className="text-xl mb-1">{tool.icon}</div>
          <span className="text-xs text-gray-300">{tool.label}</span>
        </button>
      ))}
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
    { id: 'tablet', label: 'Tablet', icon: '📱' },
    { id: 'mobile', label: 'Mobile', icon: '📱' },
    { id: 'desktop', label: 'Desktop', icon: '💻' }
  ];

  return (
    <div className="flex justify-center mb-4">
      <div className="flex bg-gray-200 rounded-lg p-1">
        {devices.map((device) => (
          <button
            key={device.id}
            onClick={() => setSelectedDevice(device.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
              selectedDevice === device.id 
                ? 'bg-white shadow-sm' 
                : 'hover:bg-gray-300'
            }`}
          >
            <span>{device.icon}</span>
            <span className="text-sm">{device.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

// Spinning Wheel Component (simplified for Canva preview)
const SpinningWheelPreview = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        {/* LED Lights Ring */}
        <div className="absolute -inset-2 rounded-full">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400 rounded-full"
              style={{
                top: '50%',
                left: '50%',
                transformOrigin: '50% 50%',
                transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-60px)`,
              }}
            />
          ))}
        </div>

        {/* Main Wheel */}
        <div className="relative w-32 h-32 rounded-full shadow-lg bg-gradient-to-br from-yellow-300 to-yellow-600 border-4 border-yellow-500">
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
                  fill={index % 2 === 0 ? "#dc2626" : "#ffffff"}
                  stroke="#fbbf24"
                  strokeWidth="1"
                />
              );
            })}
          </svg>

          {/* Center Hub */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full border-2 border-yellow-500 flex items-center justify-center">
            <div className="w-3 h-3 bg-gradient-to-br from-red-500 to-red-700 rounded-full"></div>
          </div>
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
          borderRadius: '25px',
          border: '8px solid #1f2937',
          padding: '20px'
        };
      case 'tablet':
        return { 
          width: '768px', 
          height: '600px',
          borderRadius: '15px',
          border: '6px solid #374151',
          padding: '15px'
        };
      case 'desktop':
        return { 
          width: '1200px', 
          height: '700px',
          borderRadius: '8px',
          border: '3px solid #fbbf24',
          padding: '0'
        };
      default:
        return { 
          width: '768px', 
          height: '600px',
          borderRadius: '15px',
          border: '6px solid #374151',
          padding: '15px'
        };
    }
  };

  return (
    <div className="flex-1 p-8 bg-gray-50 overflow-auto">
      {/* Device Preview Tabs */}
      <DevicePreview selectedDevice={selectedDevice} setSelectedDevice={setSelectedDevice} />
      
      {/* Canvas Container */}
      <div className="flex justify-center items-center min-h-96">
        <div 
          className="bg-gradient-to-b from-sky-300 via-sky-200 to-green-400 relative overflow-hidden shadow-xl"
          style={getDeviceStyles()}
        >
          {/* Mobile Status Bar (for mobile view) */}
          {selectedDevice === 'mobile' && (
            <div className="absolute top-2 left-4 right-4 flex justify-between items-center text-white text-sm">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <div className="w-16 h-1 bg-white/30 rounded-full">
                  <div className="w-8 h-1 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span>💬</span>
                <span>❤️</span>
              </div>
            </div>
          )}

          {/* Desktop Browser Bar (for desktop view) */}
          {selectedDevice === 'desktop' && (
            <div className="absolute top-0 left-0 right-0 h-8 bg-yellow-400 flex items-center px-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
          )}

          {/* Clouds */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-8 left-8 w-16 h-10 bg-white rounded-full opacity-90 shadow-lg"></div>
            <div className="absolute top-10 left-12 w-10 h-6 bg-white rounded-full opacity-80"></div>
            
            <div className="absolute top-12 right-12 w-20 h-12 bg-white rounded-full opacity-90 shadow-lg"></div>
            <div className="absolute top-14 right-16 w-12 h-8 bg-white rounded-full opacity-80"></div>
          </div>

          {/* Title */}
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center">
            <h1 className={`text-white drop-shadow-lg mb-2 font-bold ${
              selectedDevice === 'mobile' ? 'text-2xl' : 
              selectedDevice === 'tablet' ? 'text-4xl' : 'text-6xl'
            }`}>
              Jouez pour gagner
            </h1>
            <div className="w-16 h-1 bg-yellow-400 mx-auto rounded-full"></div>
          </div>

          {/* Spinning Wheel */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <SpinningWheelPreview />
          </div>

          {/* Rolling Hills */}
          <div className="absolute bottom-0 left-0 w-full">
            <svg viewBox="0 0 400 100" className="w-full h-16">
              <path
                d="M0,100 Q100,60 200,65 T400,60 L400,100 Z"
                fill="#84cc16"
              />
              <path
                d="M0,100 Q75,75 150,80 T300,75 Q350,70 400,80 L400,100 Z"
                fill="#65a30d"
              />
            </svg>
          </div>

          {/* Mobile Bottom Indicator */}
          {selectedDevice === 'mobile' && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black/20 rounded-full"></div>
          )}
        </div>
      </div>

      {/* Canvas Navigation */}
      <div className="flex justify-center mt-4">
        <div className="flex items-center space-x-4">
          <button className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
            ←
          </button>
          <span className="text-sm text-gray-600">1 / 1</span>
          <button className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
            →
          </button>
        </div>
      </div>
    </div>
  );
};

// Bottom Controls Component
export const BottomControls = () => {
  return (
    <div className="bg-white border-t border-gray-200 px-6 py-3 flex items-center justify-between">
      {/* Left Side */}
      <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
        <span>✕</span>
        <span className="text-sm">Fermer</span>
      </button>

      {/* Right Side */}
      <div className="flex items-center space-x-3">
        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors">
          <span>👁</span>
          <span className="text-sm text-blue-700">Aperçu</span>
        </button>
        
        <button className="flex items-center space-x-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors">
          <span>✓</span>
          <span className="text-sm">Sauvegarder</span>
        </button>
        
        <button className="flex items-center space-x-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors">
          <span>→</span>
          <span className="text-sm">Sauvegarder et quitter</span>
        </button>
      </div>
    </div>
  );
};
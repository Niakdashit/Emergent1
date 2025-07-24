import React, { useState } from 'react';
import "./App.css";
import { Sidebar, TopToolbar, CanvasArea, BottomControls, DevicePreview } from './components';

function App() {
  const [selectedTool, setSelectedTool] = useState('Design');
  const [selectedDevice, setSelectedDevice] = useState('tablet');
  const [fontSize, setFontSize] = useState(92);
  const [fontFamily, setFontFamily] = useState('Canva Sans');
  const [textColor, setTextColor] = useState('#000000');
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [alignment, setAlignment] = useState('center');

  const designContent = {
    title: "Jouez pour gagner",
    wheel: true,
    background: "sky-gradient"
  };

  return (
    <div className="h-screen bg-gray-100 flex flex-col overflow-hidden">
      {/* Top Toolbar */}
      <TopToolbar 
        fontSize={fontSize}
        setFontSize={setFontSize}
        fontFamily={fontFamily}
        setFontFamily={setFontFamily}
        textColor={textColor}
        setTextColor={setTextColor}
        isBold={isBold}
        setIsBold={setIsBold}
        isItalic={isItalic}
        setIsItalic={setIsItalic}
        isUnderline={isUnderline}
        setIsUnderline={setIsUnderline}
        alignment={alignment}
        setAlignment={setAlignment}
      />

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar with Panels */}
        <Sidebar 
          selectedTool={selectedTool}
          setSelectedTool={setSelectedTool}
        />

        {/* Main Canvas Area */}
        <div className="flex-1 flex flex-col bg-white relative">
          <CanvasArea 
            selectedDevice={selectedDevice}
            setSelectedDevice={setSelectedDevice}
            designContent={designContent}
          />
        </div>
      </div>

      {/* Bottom Controls */}
      <BottomControls />
    </div>
  );
}

export default App;
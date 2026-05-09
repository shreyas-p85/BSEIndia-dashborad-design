import { useState } from 'react';
import Prototype1Cards from './components/Prototype1-Cards';
import Prototype2Sidebar from './components/Prototype2-Sidebar';
import Prototype3Tabs from './components/Prototype3-Tabs';

export default function App() {
  const [selectedPrototype, setSelectedPrototype] = useState<1 | 2 | 3>(1);

  const renderPrototype = () => {
    switch (selectedPrototype) {
      case 1:
        return <Prototype1Cards />;
      case 2:
        return <Prototype2Sidebar />;
      case 3:
        return <Prototype3Tabs />;
      default:
        return <Prototype1Cards />;
    }
  };

  return (
    <div className="relative">
      {/* Prototype Selector - Floating Button */}
      <div className="fixed bottom-8 right-8 z-[100] bg-white rounded-2xl shadow-2xl border-2 border-gray-200 p-4">
        <div className="text-center mb-3">
          <p className="text-xs font-semibold text-gray-600 mb-1">Switch Prototype</p>
          <p className="text-xs text-gray-500">Choose Design Style</p>
        </div>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => setSelectedPrototype(1)}
            className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all ${
              selectedPrototype === 1
                ? 'bg-[#243166] text-white shadow-lg scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Prototype 1: Cards
          </button>
          <button
            onClick={() => setSelectedPrototype(2)}
            className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all ${
              selectedPrototype === 2
                ? 'bg-[#243166] text-white shadow-lg scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Prototype 2: Sidebar
          </button>
          <button
            onClick={() => setSelectedPrototype(3)}
            className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all ${
              selectedPrototype === 3
                ? 'bg-[#243166] text-white shadow-lg scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Prototype 3: Tabs
          </button>
        </div>
        <div className="mt-3 pt-3 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            Current: <span className="font-semibold text-[#243166]">Prototype {selectedPrototype}</span>
          </p>
        </div>
      </div>

      {/* Render Selected Prototype */}
      {renderPrototype()}
    </div>
  );
}

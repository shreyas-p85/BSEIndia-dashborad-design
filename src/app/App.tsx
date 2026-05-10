import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Prototype1Cards from './components/Prototype1-Cards';
import Prototype2Sidebar from './components/Prototype2-Sidebar';
import Prototype3Tabs from './components/Prototype3-Tabs';
import Prototype4Gallery from './components/Prototype4-Gallery';
import Prototype5ListView from './components/Prototype5-ListView';
import Prototype6Dashboard from './components/Prototype6-Dashboard';

export default function App() {
  const [selectedPrototype, setSelectedPrototype] = useState<1 | 2 | 3 | 4 | 5 | 6>(1);
  const [isSwitcherMinimized, setIsSwitcherMinimized] = useState(false);

  const renderPrototype = () => {
    // Add key prop to force component remount and reload images
    switch (selectedPrototype) {
      case 1:
        return <Prototype1Cards key={`prototype-1-${selectedPrototype}`} />;
      case 2:
        return <Prototype2Sidebar key={`prototype-2-${selectedPrototype}`} />;
      case 3:
        return <Prototype3Tabs key={`prototype-3-${selectedPrototype}`} />;
      case 4:
        return <Prototype4Gallery key={`prototype-4-${selectedPrototype}`} />;
      case 5:
        return <Prototype5ListView key={`prototype-5-${selectedPrototype}`} />;
      case 6:
        return <Prototype6Dashboard key={`prototype-6-${selectedPrototype}`} />;
      default:
        return <Prototype1Cards key={`prototype-1-${selectedPrototype}`} />;
    }
  };

  return (
    <div className="relative">
      {/* Prototype Selector - Floating Button */}
      <div className="fixed bottom-4 md:bottom-8 right-4 md:right-8 z-[100] bg-white rounded-2xl shadow-2xl border-2 border-gray-200 max-w-[90vw] md:max-w-none">
        {/* Minimize/Maximize Button */}
        <button
          onClick={() => setIsSwitcherMinimized(!isSwitcherMinimized)}
          className="absolute -top-3 -left-3 bg-[#243166] text-white p-2 rounded-full shadow-lg hover:bg-[#1a2447] transition-colors"
          aria-label={isSwitcherMinimized ? "Expand switcher" : "Minimize switcher"}
        >
          {isSwitcherMinimized ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {!isSwitcherMinimized ? (
          <div className="p-4 max-h-[70vh] md:max-h-[80vh] overflow-y-auto">
            <div className="text-center mb-3">
              <p className="text-xs font-semibold text-gray-600 mb-1">Switch Prototype</p>
              <p className="text-xs text-gray-500">Choose Design Style</p>
            </div>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => setSelectedPrototype(1)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold text-xs md:text-sm transition-all ${
                  selectedPrototype === 1
                    ? 'bg-[#243166] text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Prototype 1: Cards
              </button>
              <button
                onClick={() => setSelectedPrototype(2)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold text-xs md:text-sm transition-all ${
                  selectedPrototype === 2
                    ? 'bg-[#243166] text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Prototype 2: Sidebar
              </button>
              <button
                onClick={() => setSelectedPrototype(3)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold text-xs md:text-sm transition-all ${
                  selectedPrototype === 3
                    ? 'bg-[#243166] text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Prototype 3: Tabs
              </button>
              <button
                onClick={() => setSelectedPrototype(4)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold text-xs md:text-sm transition-all ${
                  selectedPrototype === 4
                    ? 'bg-[#243166] text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Prototype 4: Gallery
              </button>
              <button
                onClick={() => setSelectedPrototype(5)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold text-xs md:text-sm transition-all ${
                  selectedPrototype === 5
                    ? 'bg-[#243166] text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Prototype 5: List View
              </button>
              <button
                onClick={() => setSelectedPrototype(6)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold text-xs md:text-sm transition-all ${
                  selectedPrototype === 6
                    ? 'bg-[#243166] text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Prototype 6: Dashboard
              </button>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                Current: <span className="font-semibold text-[#243166]">Prototype {selectedPrototype}</span>
              </p>
            </div>
          </div>
        ) : (
          <div className="p-3">
            <p className="text-xs font-semibold text-[#243166] text-center">
              Prototype {selectedPrototype}
            </p>
          </div>
        )}
      </div>

      {/* Render Selected Prototype */}
      {renderPrototype()}
    </div>
  );
}

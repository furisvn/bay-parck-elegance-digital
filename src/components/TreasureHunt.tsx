import React, { useState, useEffect } from 'react';
import { toast } from 'sonner';

interface Treasure {
  id: number;
  x: number;
  y: number;
  found: boolean;
  type: 'coin' | 'villa' | 'plot';
}

const TreasureHunt: React.FC = () => {
  const [treasures, setTreasures] = useState<Treasure[]>([]);
  const [foundCount, setFoundCount] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);

  const treasureTypes = [
    { type: 'coin' as const, emoji: '🪙', name: 'Gold Coin' },
    { type: 'villa' as const, emoji: '🏖️', name: 'Beach Villa' },
    { type: 'plot' as const, emoji: '🌴', name: 'Paradise Plot' }
  ];

  const initializeGame = () => {
    const newTreasures: Treasure[] = [];
    for (let i = 0; i < 8; i++) {
      newTreasures.push({
        id: i,
        x: Math.random() * 80 + 10, // 10% to 90% of container width
        y: Math.random() * 70 + 15, // 15% to 85% of container height
        found: false,
        type: treasureTypes[Math.floor(Math.random() * treasureTypes.length)].type
      });
    }
    setTreasures(newTreasures);
    setFoundCount(0);
    setGameCompleted(false);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  const handleTreasureClick = (treasureId: number) => {
    setTreasures(prev => 
      prev.map(treasure => 
        treasure.id === treasureId 
          ? { ...treasure, found: true }
          : treasure
      )
    );

    const treasure = treasures.find(t => t.id === treasureId);
    if (treasure && !treasure.found) {
      const treasureInfo = treasureTypes.find(t => t.type === treasure.type);
      toast.success(`🎉 Found a ${treasureInfo?.name}!`);
      
      const newFoundCount = foundCount + 1;
      setFoundCount(newFoundCount);
      
      if (newFoundCount === treasures.length) {
        setGameCompleted(true);
        setTimeout(() => {
          toast.success('🏆 Congratulations! You found all treasures!');
        }, 500);
      }
    }
  };

  const handleMapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (gameCompleted) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    // Check if click is near any unfound treasure (within 5% radius)
    const clickedTreasure = treasures.find(treasure => 
      !treasure.found && 
      Math.abs(treasure.x - x) < 5 && 
      Math.abs(treasure.y - y) < 5
    );
    
    if (clickedTreasure) {
      handleTreasureClick(clickedTreasure.id);
    } else {
      // Add a subtle water ripple effect at click position
      const ripple = document.createElement('div');
      ripple.className = 'absolute w-4 h-4 bg-coastal-blue/30 rounded-full animate-ping pointer-events-none';
      ripple.style.left = `${x}%`;
      ripple.style.top = `${y}%`;
      ripple.style.transform = 'translate(-50%, -50%)';
      
      e.currentTarget.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    }
  };

  return (
    <div className="bg-gradient-to-b from-coastal-sand to-coastal-ivory p-6 rounded-xl shadow-lg">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="text-sm font-medium text-coastal-navy">
            Found: {foundCount}/{treasures.length}
          </div>
          <button
            onClick={initializeGame}
            className="px-4 py-2 bg-coastal-blue text-white rounded-lg hover:bg-coastal-blue/90 transition-all duration-200 text-sm font-medium"
          >
            New Game
          </button>
        </div>
        
        {gameCompleted && (
          <div className="bg-gradient-to-r from-coastal-gold/20 to-coastal-sand/30 p-4 rounded-lg mb-4 border border-coastal-gold/30">
            <p className="text-coastal-navy font-semibold">
              🏆 Amazing! You found all treasures! 🏆
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Click "New Game" to start a new treasure hunt!
            </p>
          </div>
        )}
      </div>

      <div 
        className="relative w-full h-80 md:h-96 bg-gradient-to-br from-coastal-blue via-coastal-mist to-coastal-sand rounded-lg cursor-crosshair overflow-hidden shadow-inner"
        onClick={handleMapClick}
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(0, 191, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)
          `
        }}
      >
        {/* Beach elements */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-coastal-sand/60 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-coastal-blue/30 to-transparent"></div>
        
        {/* Palm tree decorations */}
        <div className="absolute bottom-4 left-4 text-2xl opacity-60">🌴</div>
        <div className="absolute bottom-8 right-8 text-xl opacity-60">🌺</div>
        <div className="absolute top-4 right-4 text-lg opacity-60">☀️</div>
        <div className="absolute top-8 left-1/3 text-lg opacity-60">⛵</div>
        <div className="absolute bottom-6 left-2/3 text-lg opacity-60">🐚</div>

        {/* Treasures */}
        {treasures.map(treasure => {
          const treasureInfo = treasureTypes.find(t => t.type === treasure.type);
          return (
            <div
              key={treasure.id}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 text-2xl transition-all duration-300 ${
                treasure.found 
                  ? 'opacity-100 scale-125 z-10' 
                  : 'opacity-0 hover:opacity-30 cursor-pointer'
              }`}
              style={{
                left: `${treasure.x}%`,
                top: `${treasure.y}%`,
              }}
              onClick={(e) => {
                e.stopPropagation();
                if (!treasure.found) {
                  handleTreasureClick(treasure.id);
                }
              }}
            >
              {treasure.found ? (
                <div className="animate-bounce">
                  {treasureInfo?.emoji}
                </div>
              ) : (
                <div className="w-6 h-6 bg-coastal-gold/20 rounded-full animate-pulse"></div>
              )}
            </div>
          );
        })}

        {/* Instructions overlay */}
        {!gameCompleted && foundCount === 0 && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/10 rounded-lg">
            <div className="bg-white/90 p-4 rounded-lg shadow-lg text-center max-w-xs">
              <p className="text-sm text-coastal-navy font-medium">
                🔍 Tap around to find hidden treasures!
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Look for shimmering spots on the map
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 text-center">
        <p className="text-sm text-muted-foreground">
          Find coins 🪙, beach villas 🏖️, and paradise plots 🌴 hidden around our coastal paradise!
        </p>
      </div>
    </div>
  );
};

export default TreasureHunt;
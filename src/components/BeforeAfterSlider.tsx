import React, { useState, useRef, useCallback } from 'react';
import { shingleRoofImg, repairImg } from '../assets/images';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current && e.buttons !== 1) return;
    handleMove(e.clientX);
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md">
      <div className="text-center sm:text-left mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-xs font-black uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-1 rounded">
            Real Workmanship Demonstration
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-[#0b2341] mt-2">
            Interactive Before & After: Sarasota Roof Restoration
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Slide left and right to see the transformation from damaged leak-prone shingles to a fully sealed, code-compliant reroof.
          </p>
        </div>
        <div className="flex items-center gap-4 text-xs font-bold shrink-0">
          <span className="px-3 py-1 bg-rose-100 text-rose-800 rounded-md">BEFORE: Leak Damage</span>
          <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-md">AFTER: 2nd Gen Reroof</span>
        </div>
      </div>

      {/* Slider Container */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative h-80 sm:h-[420px] rounded-xl overflow-hidden cursor-ew-resize select-none border-2 border-slate-200"
      >
        {/* AFTER Image (Full background) */}
        <img
          src={shingleRoofImg}
          alt="After 2nd Gen Roofing replacement"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-emerald-600/90 text-white font-black text-xs px-3 py-1.5 rounded-lg shadow-md">
          AFTER (2nd Gen Installation)
        </div>

        {/* BEFORE Image (Clipped overlay) */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={repairImg}
            alt="Before roof repair"
            className="absolute inset-0 w-full h-full object-cover max-w-none"
            style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
          />
          <div className="absolute top-4 left-4 bg-slate-900/90 text-white font-black text-xs px-3 py-1.5 rounded-lg shadow-md">
            BEFORE (Damaged & Leaking)
          </div>
        </div>

        {/* Slider Divider Bar */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-amber-400 shadow-[0_0_10px_rgba(0,0,0,0.5)] cursor-ew-resize"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-black text-xs shadow-xl border-2 border-white">
            ↔
          </div>
        </div>
      </div>

      {/* Details bar */}
      <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-600 gap-2">
        <span><strong>Location:</strong> Sarasota, FL</span>
        <span><strong>System:</strong> Architectural Dimensional Shingles with Peel & Stick Secondary Water Barrier</span>
        <span className="text-emerald-700 font-bold">100% Passed County Permitting</span>
      </div>
    </div>
  );
};

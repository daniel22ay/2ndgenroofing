import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'color' | 'full';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'full';
  className?: string;
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'color',
  size = 'md',
  className = '',
  showSubtitle = true,
}) => {
  // If user requests full banner graphic (e.g. Hero, About, Footer feature)
  if (size === 'full' || variant === 'full') {
    return (
      <div className={`inline-block select-none overflow-hidden rounded-xl shadow-md border border-slate-200/80 ${className}`}>
        <svg
          viewBox="0 0 960 540"
          className="w-full h-auto max-w-full drop-shadow-sm"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Outline filter for silhouettes and text */}
            <filter id="whiteOutline" x="-20%" y="-20%" width="140%" height="140%">
              <feMorphology in="SourceAlpha" result="DILATED" operator="dilate" radius="5" />
              <feFlood floodColor="#ffffff" result="WHITE" />
              <feComposite in="WHITE" in2="DILATED" operator="in" result="OUTLINE" />
              <feMerge>
                <feMergeNode in="OUTLINE" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="textDropShadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="3" dy="4" stdDeviation="2" floodColor="#000000" floodOpacity="0.4" />
            </filter>
          </defs>

          {/* Background diagonal color bands */}
          {/* Top White */}
          <polygon points="0,0 960,0 960,115 0,205" fill="#FFFFFF" />
          {/* Middle Bright Yellow */}
          <polygon points="0,205 960,115 960,175 0,410" fill="#FFE500" />
          {/* Bottom Sky Blue */}
          <polygon points="0,410 960,175 960,540 0,540" fill="#2EAEE4" />

          {/* Bold Black Roof Gable Line Over Text */}
          <polyline
            points="265,160 550,42 900,142"
            fill="none"
            stroke="#000000"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="miter"
          />

          {/* Two Roofers Silhouettes (Father and Son) with white outline */}
          <g filter="url(#whiteOutline)" fill="#000000">
            {/* Left roofer (Son / Apprentice) */}
            {/* Head & Cap */}
            <circle cx="108" cy="155" r="22" />
            <path d="M90 148 C95 142 125 142 132 152 L140 156 L124 160 Z" />
            {/* Neck & Torso */}
            <path d="M96 175 L80 230 L85 285 L145 285 L150 230 L134 175 Z" />
            {/* Left Arm & Tool pouch */}
            <path d="M80 185 L56 265 L68 290 L85 270 Z" />
            <rect x="52" y="255" width="26" height="35" rx="5" />
            {/* Right Arm & Tool pouch */}
            <path d="M142 185 L165 265 L152 290 L136 270 Z" />
            <rect x="142" y="255" width="24" height="35" rx="5" />
            {/* Utility Belt */}
            <rect x="74" y="270" width="75" height="18" rx="3" />
            {/* Shorts */}
            <path d="M82 285 L74 340 L108 340 L114 300 L122 300 L128 340 L160 340 L150 285 Z" />
            {/* Left Leg & Boot */}
            <path d="M84 340 L88 385 L96 385 L94 340 Z" />
            <path d="M82 385 L84 402 L112 405 L112 392 L94 385 Z" />
            {/* Right Leg & Boot */}
            <path d="M136 340 L138 385 L146 385 L144 340 Z" />
            <path d="M132 385 L134 402 L162 405 L162 392 L144 385 Z" />

            {/* Right roofer (Father / Craftsman - Taller) */}
            {/* Head & Cap */}
            <circle cx="230" cy="140" r="24" />
            <path d="M210 132 C215 125 248 125 258 136 L265 140 L248 144 Z" />
            {/* Torso */}
            <path d="M218 160 L198 220 L204 285 L272 285 L278 220 L256 160 Z" />
            {/* Left Arm & Pouch */}
            <path d="M200 170 L178 250 L190 275 L204 255 Z" />
            <rect x="174" y="240" width="24" height="38" rx="5" />
            {/* Right Arm & Pouch */}
            <path d="M268 170 L288 250 L276 275 L262 255 Z" />
            <rect x="268" y="240" width="24" height="38" rx="5" />
            {/* Belt */}
            <rect x="194" y="270" width="84" height="18" rx="3" />
            {/* Shorts */}
            <path d="M202 285 L192 345 L230 345 L236 305 L242 305 L248 345 L286 345 L276 285 Z" />
            {/* Left Leg & Boot */}
            <path d="M204 345 L208 395 L218 395 L216 345 Z" />
            <path d="M202 395 L204 414 L234 417 L234 402 L216 395 Z" />
            {/* Right Leg & Boot */}
            <path d="M260 345 L262 395 L272 395 L270 345 Z" />
            <path d="M256 395 L258 414 L288 417 L288 402 L270 395 Z" />
          </g>

          {/* Angled Typography Group */}
          <g transform="rotate(-13, 560, 240)">
            {/* "2ND GEN" */}
            <g filter="url(#textDropShadow)">
              {/* 2 */}
              <text
                x="340"
                y="200"
                fontFamily="Impact, 'Arial Black', sans-serif"
                fontSize="108"
                fontWeight="900"
                fill="#FFFFFF"
                stroke="#000000"
                strokeWidth="10"
                paintOrder="stroke fill"
              >
                2
              </text>
              {/* ND */}
              <text
                x="408"
                y="145"
                fontFamily="Impact, 'Arial Black', sans-serif"
                fontSize="46"
                fontWeight="900"
                fill="#FFFFFF"
                stroke="#000000"
                strokeWidth="7"
                paintOrder="stroke fill"
              >
                ND
              </text>
              {/* GEN */}
              <text
                x="490"
                y="196"
                fontFamily="Impact, 'Arial Black', sans-serif"
                fontSize="104"
                fontWeight="900"
                fill="#FFFFFF"
                stroke="#000000"
                strokeWidth="10"
                letterSpacing="3"
                paintOrder="stroke fill"
              >
                GEN
              </text>
            </g>

            {/* "ROOFING" */}
            <g filter="url(#textDropShadow)">
              <text
                x="350"
                y="300"
                fontFamily="Impact, 'Arial Black', sans-serif"
                fontSize="128"
                fontWeight="900"
                fill="#000000"
                stroke="#FFFFFF"
                strokeWidth="11"
                letterSpacing="6"
                paintOrder="stroke fill"
              >
                ROOFING
              </text>
            </g>

            {/* "License #CCC1333718" */}
            <text
              x="710"
              y="336"
              fontFamily="Impact, Arial, sans-serif"
              fontSize="28"
              fontWeight="900"
              fill="#000000"
              stroke="#FFFFFF"
              strokeWidth="5"
              letterSpacing="1"
              paintOrder="stroke fill"
            >
              License #CCC1333718
            </text>
          </g>

          {/* Bottom Centered Phone Number */}
          <g filter="url(#textDropShadow)">
            <text
              x="500"
              y="480"
              textAnchor="middle"
              fontFamily="Impact, 'Arial Black', sans-serif"
              fontSize="66"
              fontWeight="900"
              fill="#000000"
              stroke="#FFFFFF"
              strokeWidth="8"
              letterSpacing="2"
              paintOrder="stroke fill"
            >
              941 704 9081
            </text>
          </g>
        </svg>
      </div>
    );
  }

  // Compact / Responsive Navigation & Header Logo
  const sizeStyles = {
    xs: { h: 'h-7', w: 'w-auto' },
    sm: { h: 'h-9', w: 'w-auto' },
    md: { h: 'h-11', w: 'w-auto' },
    lg: { h: 'h-14', w: 'w-auto' },
  };

  const selectedSize = sizeStyles[size as keyof typeof sizeStyles] || sizeStyles.md;

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      {/* Scaled Authentic 2nd Gen Emblem */}
      <svg
        viewBox="0 0 440 210"
        className={`${selectedSize.h} ${selectedSize.w} drop-shadow-xs transition-transform duration-200 hover:scale-102`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="outlineNav" x="-20%" y="-20%" width="140%" height="140%">
            <feMorphology in="SourceAlpha" result="DILATED" operator="dilate" radius="3" />
            <feFlood floodColor="#ffffff" result="WHITE" />
            <feComposite in="WHITE" in2="DILATED" operator="in" result="OUTLINE" />
            <feMerge>
              <feMergeNode in="OUTLINE" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Diagonal background stripes */}
        <polygon points="0,0 440,0 440,45 0,80" fill="#FFFFFF" />
        <polygon points="0,80 440,45 440,70 0,165" fill="#FFE500" />
        <polygon points="0,165 440,70 440,210 0,210" fill="#2EAEE4" />

        {/* Roof Gable Line */}
        <polyline
          points="110,65 240,16 410,60"
          fill="none"
          stroke="#000000"
          strokeWidth="7"
          strokeLinecap="round"
        />

        {/* Two Roofers Silhouettes */}
        <g filter="url(#outlineNav)" fill="#000000">
          {/* Son */}
          <circle cx="45" cy="65" r="9" />
          <path d="M40 73 L32 98 L35 125 L60 125 L63 98 L55 73 Z" />
          <path d="M33 78 L22 115 L28 128 L35 120 Z" />
          <path d="M59 78 L70 115 L64 128 L57 120 Z" />
          <rect x="22" y="112" width="10" height="15" rx="2" />
          <rect x="62" y="112" width="10" height="15" rx="2" />
          <path d="M33 125 L30 152 L45 152 L48 132 L51 132 L54 152 L68 152 L63 125 Z" />
          <path d="M34 152 L36 172 L48 174 L48 168 L38 165 Z" />
          <path d="M56 152 L58 172 L70 174 L70 168 L60 165 Z" />

          {/* Father (Taller) */}
          <circle cx="95" cy="58" r="10" />
          <path d="M89 67 L80 94 L83 125 L113 125 L116 94 L105 67 Z" />
          <path d="M81 72 L70 110 L76 122 L83 115 Z" />
          <path d="M112 72 L122 110 L116 122 L110 115 Z" />
          <rect x="70" y="106" width="10" height="16" rx="2" />
          <rect x="114" y="106" width="10" height="16" rx="2" />
          <path d="M82 125 L78 155 L96 155 L99 135 L102 135 L105 155 L122 155 L117 125 Z" />
          <path d="M83 155 L85 177 L98 180 L98 173 L88 170 Z" />
          <path d="M108 155 L110 177 L123 180 L123 173 L113 170 Z" />
        </g>

        {/* Angled Typography: 2ND GEN ROOFING */}
        <g transform="rotate(-13, 250, 100)">
          {/* 2ND GEN */}
          <text
            x="145"
            y="85"
            fontFamily="Impact, 'Arial Black', sans-serif"
            fontSize="44"
            fontWeight="900"
            fill="#FFFFFF"
            stroke="#000000"
            strokeWidth="4"
            paintOrder="stroke fill"
          >
            2
          </text>
          <text
            x="172"
            y="62"
            fontFamily="Impact, 'Arial Black', sans-serif"
            fontSize="18"
            fontWeight="900"
            fill="#FFFFFF"
            stroke="#000000"
            strokeWidth="3"
            paintOrder="stroke fill"
          >
            ND
          </text>
          <text
            x="208"
            y="84"
            fontFamily="Impact, 'Arial Black', sans-serif"
            fontSize="43"
            fontWeight="900"
            fill="#FFFFFF"
            stroke="#000000"
            strokeWidth="4"
            paintOrder="stroke fill"
          >
            GEN
          </text>

          {/* ROOFING */}
          <text
            x="152"
            y="130"
            fontFamily="Impact, 'Arial Black', sans-serif"
            fontSize="54"
            fontWeight="900"
            fill="#000000"
            stroke="#FFFFFF"
            strokeWidth="5"
            letterSpacing="2"
            paintOrder="stroke fill"
          >
            ROOFING
          </text>

          {/* License */}
          <text
            x="305"
            y="145"
            fontFamily="Impact, Arial, sans-serif"
            fontSize="11"
            fontWeight="900"
            fill="#000000"
            stroke="#FFFFFF"
            strokeWidth="2"
            paintOrder="stroke fill"
          >
            License #CCC1333718
          </text>
        </g>

        {/* Bottom Phone */}
        <text
          x="230"
          y="198"
          textAnchor="middle"
          fontFamily="Impact, 'Arial Black', sans-serif"
          fontSize="26"
          fontWeight="900"
          fill="#000000"
          stroke="#FFFFFF"
          strokeWidth="3"
          letterSpacing="1"
          paintOrder="stroke fill"
        >
          941 704 9081
        </text>
      </svg>

      {/* Brand text for clarity in small sizes */}
      {showSubtitle && (
        <div className="hidden sm:flex flex-col ml-2.5 leading-none">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500">
            Family Owned & Operated
          </span>
          <span className="text-xs font-black text-[#0b2341] tracking-tight mt-0.5">
            Sarasota • Bradenton
          </span>
        </div>
      )}
    </div>
  );
};

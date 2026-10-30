import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import mascot from '../../assets/enjamer-404-mascot.png';
import './NotFoundMascot.css';

const STORAGE_KEY = 'enjamer-404-variant';

// The image is 900x798. These coordinates patch the worried brows and frown
// so each variant can draw its own expression over the original artwork.
const faceStroke = {
  fill: 'none',
  stroke: '#fff',
  strokeWidth: 7,
  strokeLinecap: 'round',
};

const VARIANTS = [
  {
    id: 'happy',
    blush: 0.24,
    face: (
      <>
        <path d="M 351 315 Q 370 299 392 312" {...faceStroke} />
        <path d="M 457 312 Q 479 298 501 314" {...faceStroke} />
        <path d="M 401 407 Q 425 433 449 407" {...faceStroke} />
      </>
    ),
    bubble: {
      text: 'oops',
      accent: '!',
      accentColor: '#ffb020',
      fontSize: 54,
      letterSpacing: -1.5,
      rotate: -4,
    },
    motion: { y: -10, rotation: 1.4, duration: 2.4 },
  },
  {
    id: 'surprised',
    blush: 0.1,
    face: (
      <>
        <path d="M 348 310 Q 370 290 393 310" {...faceStroke} />
        <path d="M 456 310 Q 480 290 502 310" {...faceStroke} />
        <ellipse cx="425" cy="411" rx="10" ry="12" fill="#1a1524" stroke="#fff" strokeWidth="6" />
      </>
    ),
    bubble: {
      text: '¡uy',
      accent: '!',
      accentColor: '#ff5e9a',
      fontSize: 56,
      letterSpacing: -1,
      rotate: 3,
    },
    motion: { y: -14, scale: 1.012, duration: 1.35, ease: 'power1.inOut' },
  },
  {
    id: 'curious',
    blush: 0.16,
    face: (
      <>
        <path d="M 349 314 Q 370 296 392 304" {...faceStroke} />
        <path d="M 457 306 Q 479 309 501 317" {...faceStroke} />
        <path d="M 407 412 Q 417 404 427 411 T 445 408" {...faceStroke} />
      </>
    ),
    bubble: {
      text: '¿qué',
      accent: '?',
      accentColor: '#c4a1ff',
      fontSize: 44,
      letterSpacing: -1,
      rotate: -3,
    },
    motion: { rotation: 2.4, x: 3, duration: 2.8 },
  },
];

// StrictMode runs state initializers twice in development. Keeping the picked
// variant here makes the choice idempotent for a single 404 appearance.
let mountedVariantIndex = null;

function pickVariantIndex() {
  if (mountedVariantIndex !== null) {
    return mountedVariantIndex;
  }

  let previous = -1;

  try {
    const stored = window.sessionStorage.getItem(STORAGE_KEY);

    if (stored !== null) {
      const parsed = Number(stored);

      if (Number.isInteger(parsed) && parsed >= 0 && parsed < VARIANTS.length) {
        previous = parsed;
      }
    }
  } catch {
    // Storage may be unavailable; a random variant still works.
  }

  const candidates = VARIANTS.map((_, index) => index).filter((index) => index !== previous);
  const next = candidates[Math.floor(Math.random() * candidates.length)];

  try {
    window.sessionStorage.setItem(STORAGE_KEY, String(next));
  } catch {
    // Storage may be unavailable; the comparison just won't persist.
  }

  mountedVariantIndex = next;
  return next;
}

export default function NotFoundMascot() {
  const [variantIndex] = useState(pickVariantIndex);
  const bodyRef = useRef(null);
  const variant = VARIANTS[variantIndex];

  useLayoutEffect(() => {
    const releaseVariant = () => {
      mountedVariantIndex = null;
    };

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return releaseVariant;
    }

    const tween = gsap.to(bodyRef.current, {
      ...variant.motion,
      transformOrigin: '50% 92%',
      repeat: -1,
      yoyo: true,
      ease: variant.motion.ease ?? 'sine.inOut',
      delay: 1.5,
    });

    return () => {
      tween.kill();
      releaseVariant();
    };
  }, [variant]);

  return (
    <div className="not-found-mascot" data-variant={variant.id} aria-hidden="true">
      <div className="not-found-mascot__body" ref={bodyRef}>
        <img className="not-found-mascot__image" src={mascot} alt="" />

        <svg className="not-found-mascot__overlay" viewBox="0 0 900 798" aria-hidden="true">
          <defs>
            <linearGradient id="mascot-face-patch" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#221e2a" />
              <stop offset="1" stopColor="#19151f" />
            </linearGradient>
            <linearGradient id="mascot-bubble-patch" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#2b2638" />
              <stop offset="1" stopColor="#18141f" />
            </linearGradient>
            <filter id="mascot-soft-blur">
              <feGaussianBlur stdDeviation="2.5" />
            </filter>
            <filter id="mascot-blush-blur">
              <feGaussianBlur stdDeviation="6" />
            </filter>
          </defs>

          {/* Cover the worried eyebrows and frown from the original artwork. */}
          <rect
            x="338"
            y="296"
            width="174"
            height="40"
            rx="20"
            fill="url(#mascot-face-patch)"
            filter="url(#mascot-soft-blur)"
          />
          <rect
            x="392"
            y="396"
            width="66"
            height="36"
            rx="18"
            fill="url(#mascot-face-patch)"
            filter="url(#mascot-soft-blur)"
          />

          <ellipse
            cx="354"
            cy="398"
            rx="20"
            ry="10"
            fill="#ff6b8a"
            opacity={variant.blush}
            filter="url(#mascot-blush-blur)"
          />
          <ellipse
            cx="498"
            cy="398"
            rx="20"
            ry="10"
            fill="#ff6b8a"
            opacity={variant.blush}
            filter="url(#mascot-blush-blur)"
          />

          {variant.face}

          {/* Replace the X with a playful word inside the original bubble. */}
          <rect
            x="690"
            y="82"
            width="172"
            height="148"
            rx="44"
            fill="url(#mascot-bubble-patch)"
            filter="url(#mascot-soft-blur)"
          />
          <text
            x="776"
            y="173"
            textAnchor="middle"
            fill="#fff"
            fontFamily="Inter, Arial, sans-serif"
            fontSize={variant.bubble.fontSize}
            fontWeight="800"
            letterSpacing={variant.bubble.letterSpacing}
            transform={`rotate(${variant.bubble.rotate} 776 160)`}
          >
            {variant.bubble.text}
            <tspan fill={variant.bubble.accentColor}>{variant.bubble.accent}</tspan>
          </text>
        </svg>
      </div>
    </div>
  );
}

interface WaveDividerProps {
  from?: string;
  to?: string;
  flip?: boolean;
}

export function WaveDivider({
  from = "#ffffff",
  to = "#F8FAFC",
  flip = false,
}: WaveDividerProps) {
  return (
    <div
      className="wave-divider"
      style={{ transform: flip ? "rotate(180deg)" : undefined }}
    >
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
        <defs>
          <linearGradient id={`wg-${from.replace("#", "")}-${to.replace("#", "")}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={from} />
            <stop offset="100%" stopColor={to} />
          </linearGradient>
        </defs>
        <path
          d="M0,20 C360,60 720,0 1080,40 C1260,55 1380,25 1440,30 L1440,60 L0,60 Z"
          fill={to}
        />
        <path
          d="M0,30 C360,55 720,5 1080,35 C1260,48 1380,20 1440,25 L1440,0 L0,0 Z"
          fill={from}
        />
      </svg>
    </div>
  );
}

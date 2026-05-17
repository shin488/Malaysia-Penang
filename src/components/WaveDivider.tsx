export default function WaveDivider({ flip }: { flip?: boolean }) {
  return (
    <div className="relative h-24 -mt-1 overflow-hidden">
      <svg
        viewBox="0 0 1440 120"
        className={`absolute bottom-0 w-full h-full ${flip ? "scale-y-[-1]" : ""}`}
        preserveAspectRatio="none"
      >
        <path
          d="M0,60 C360,120 720,0 1440,60 L1440,120 L0,120 Z"
          fill="#fff8f0"
          opacity="0.6"
        />
        <path
          d="M0,80 C360,110 720,30 1440,80 L1440,120 L0,120 Z"
          fill="#fff8f0"
          opacity="0.3"
        />
      </svg>
    </div>
  );
}

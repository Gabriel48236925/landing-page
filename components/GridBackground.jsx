// components/GridBackground.jsx

export default function GridBackground() {
    return (
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 overflow-hidden bg-grid-slate-700/[0.05] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"
      />
    );
  }
  
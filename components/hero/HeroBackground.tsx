export default function HeroBackground() {
  return (
    <>
      {/* Main Background */}
      <div className="absolute inset-0 -z-20 overflow-hidden bg-[#050816]" />

      {/* Blue Glow */}
      <div className="absolute left-[-220px] top-[-180px] -z-10 h-[520px] w-[520px] rounded-full bg-blue-500/20 blur-[140px] animate-pulse" />

      {/* Purple Glow */}
      <div
        className="absolute right-[-180px] top-[120px] -z-10 h-[420px] w-[420px] rounded-full bg-violet-500/20 blur-[140px] animate-pulse"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Cyan Glow */}
      <div
        className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 -z-10 h-[480px] w-[480px] rounded-full bg-cyan-500/15 blur-[150px] animate-pulse"
        style={{ animationDelay: "2.5s" }}
      />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Top Fade */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#050816] to-transparent" />

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050816] to-transparent" />

      {/* Noise Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-soft-light"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />
    </>
  );
}

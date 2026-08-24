export default function HeroBackground() {
  return (
    <>
      {/* =====================================================
          BASE BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0 -z-20 overflow-hidden bg-[#050816]" />

      {/* =====================================================
          PRIMARY BLUE GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-48
          -top-48
          -z-10
          h-[420px]
          w-[420px]
          rounded-full
          bg-blue-500/[0.14]
          blur-[130px]
          sm:h-[520px]
          sm:w-[520px]
        "
      />

      {/* =====================================================
          SECONDARY VIOLET GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-48
          top-24
          -z-10
          h-[360px]
          w-[360px]
          rounded-full
          bg-violet-500/[0.12]
          blur-[130px]
          sm:h-[460px]
          sm:w-[460px]
        "
      />

      {/* =====================================================
          BOTTOM CYAN GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-52
          left-1/2
          -z-10
          h-[400px]
          w-[400px]
          -translate-x-1/2
          rounded-full
          bg-cyan-500/[0.10]
          blur-[140px]
          sm:h-[500px]
          sm:w-[500px]
        "
      />

      {/* =====================================================
          SUBTLE GRID
      ===================================================== */}

      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,0.12) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.12) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "56px 56px",
        }}
      />

      {/* =====================================================
          CENTER RADIAL LIGHT
      ===================================================== */}

      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(circle at 50% 38%, rgba(59,130,246,0.08), transparent 42%)",
        }}
      />

      {/* =====================================================
          TOP FADE
      ===================================================== */}

      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-[#050816] via-[#050816]/70 to-transparent sm:h-40" />

      {/* =====================================================
          BOTTOM FADE
      ===================================================== */}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[#050816] via-[#050816]/60 to-transparent sm:h-52" />

      {/* =====================================================
          SUBTLE NOISE
      ===================================================== */}

      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.018]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
    </>
  );
}

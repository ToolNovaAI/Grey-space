{/* =================================================
    BRAND
================================================= */}

<div className="max-w-md">

  {/* Logo */}
  <Link
    href="/"
    aria-label="Grey Space Home"
    className="group inline-flex items-center gap-4"
  >
    <div className="relative h-14 w-14 shrink-0">
      <img
        src="/images/Grey.png"
        alt="Grey Space"
        className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
      />
    </div>

    <div>
      <h2 className="text-2xl font-bold tracking-tight text-white">
        Grey Space
      </h2>

      <p className="mt-0.5 text-sm text-slate-400">
        Digital Growth
      </p>
    </div>
  </Link>

  {/* Description */}
  <p className="mt-7 max-w-md text-sm leading-7 text-slate-400 sm:text-base">
    Helping businesses grow online through premium websites,
    SEO, Google Ads, Meta Ads, AI automation and modern digital
    marketing strategies.
  </p>

  {/* Social Links */}
  <div className="mt-7 flex items-center gap-3">

    {/* GitHub */}
    <a
      href="https://github.com/ToolNovaAI"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      className="glass flex h-11 w-11 items-center justify-center rounded-xl text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:text-white"
    >
      <Github size={19} />
    </a>

    {/* Website */}
    <a
      href="https://grey-zen.github.io"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Website"
      className="glass flex h-11 w-11 items-center justify-center rounded-xl text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:text-white"
    >
      <Globe size={19} />
    </a>

    {/* LinkedIn */}
    <a
      href="#"
      aria-label="LinkedIn"
      className="glass flex h-11 w-11 items-center justify-center rounded-xl text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:text-white"
    >
      <Linkedin size={19} />
    </a>

  </div>

</div>

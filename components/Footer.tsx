"use client";
import { footerData } from '@/constants';

export default function Footer() {
  return (
    <section
      className="relative bg-cover bg-center text-white py-24 text-center"
      style={{
        backgroundImage: "url('/assets/footer.png')",
      }}
    >
      {/* Decorative Wave */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fff" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#fff" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="0.5"
            d="M0,160 C320,320 1120,0 1440,160"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
          <span className="bg-gradient-to-r from-[#8773EE] to-[#FCDA68] bg-clip-text text-transparent">
            Build Something <br />
            Impactful Today, Better.
          </span>
        </h1>
        <p className="text-sm md:text-base text-muted-foreground mt-6 max-w-xl mx-auto">
          Working only with the best, to ensure the quality of our services, and
          to bring state of the art technology to those who need it.
        </p>
      </div>

      {/* Social Icons */}
      <div className="relative z-10 px-4 mt-8">
        {footerData?.socialLinks?.length > 0 && (
          <ul className="flex justify-center gap-5">
            {footerData.socialLinks.map(({ href, icon }, index) => (
              <li key={index}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-300 transition-colors duration-200"
                >
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

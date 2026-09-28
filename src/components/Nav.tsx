import { useEffect, useRef, useState } from "react";
import { InstagramIcon, MusicIcon } from "./Icons.tsx";

const links = [
  { id: "hem", label: "Hem" },
  { id: "om-flit", label: "Om FLIT" },
  { id: "teknik", label: "Teknik" },
  { id: "detaljer", label: "Detaljer" },
  { id: "anmalan", label: "Anmälan" },
  { id: "om-oss", label: "Om oss" },
  { id: "kontakt", label: "Kontakta oss" },
];

export default function Nav() {
  const [ current, setCurrent ] = useState("hem");
  const navRef = useRef<HTMLElement>(null);

  // Menyn blir högre när länkarna radbryts på smala skärmar, så mät den i stället för att gissa.
  // style.css använder --nav-height så att menyn inte döljer sektionsrubrikerna.
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const observer = new ResizeObserver(() => {
      document.documentElement.style.setProperty("--nav-height", `${nav.offsetHeight}px`);
    });
    observer.observe(nav);
    return () => observer.disconnect();
  }, []);

  return (
    <nav ref={navRef} className="site-nav" aria-label="Huvudmeny">
      <div className="container">
        <div className="site-nav__top">
          <img src="/flit-logo.png" alt="FLIT – Flickor i Teknik" className="site-nav__logo" />
          <div className="site-nav__social">
            <a href="https://www.instagram.com/flickoriteknik" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="https://www.tiktok.com/@flickor.i.teknik" target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="TikTok">
              <MusicIcon />
            </a>
          </div>
        </div>
        <ul className="site-nav__links">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={current === link.id ? "true" : undefined}
                onClick={() => setCurrent(link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

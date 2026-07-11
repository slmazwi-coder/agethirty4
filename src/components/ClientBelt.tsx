import React from "react";

const clients = [
  { name: "Baxlis Real Estate",            src: "/clients/baxlis-real-estate.png?v=3" },
  { name: "Tlotliso Divisions",            src: "/clients/tlotliso-divisions.png?v=3" },
  { name: "Giwu's Funeral Services",       src: "/clients/giwus-funeral-services.png?v=3" },
  { name: "Kingdom Conscious Logistics",   src: "/clients/kingdom-conscious-logistics.png?v=3" },
  { name: "Mt. Hargreaves Sen. Sec. School", src: "/clients/mt-hargreaves.png?v=3" },
  { name: "Mabillions Deco",               src: "/clients/mabillions-deco.png?v=3" },
];

const doubled = [...clients, ...clients];

const ClientBelt = () => (
  <section className="cb-section">
    <p className="cb-label">Trusted by</p>
    <div className="cb-wrapper">
      <div className="cb-fade cb-fade-left" />
      <div className="cb-fade cb-fade-right" />
      <div className="cb-track">
        {doubled.map((client, i) => (
          <div key={i} className="cb-item" title={client.name}>
            <img
              src={client.src}
              alt={client.name}
              className="cb-logo"
              draggable={false}
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = "none";
                const parent = target.parentElement;
                if (parent && !parent.querySelector(".cb-fallback")) {
                  const span = document.createElement("span");
                  span.className = "cb-fallback";
                  span.textContent = client.name;
                  parent.appendChild(span);
                }
              }}
            />
          </div>
        ))}
      </div>
    </div>

    <style>{`
      .cb-section {
        width: 100%;
        padding: 40px 0 36px;
        overflow: hidden;
        background: transparent;
      }
      .cb-label {
        text-align: center;
        font-size: 0.7rem;
        font-weight: 700;
        letter-spacing: 0.25em;
        text-transform: uppercase;
        color: hsl(var(--muted-foreground));
        margin-bottom: 24px;
      }
      .cb-wrapper {
        position: relative;
        width: 100%;
        overflow: hidden;
      }
      .cb-fade {
        position: absolute;
        top: 0; bottom: 0;
        width: 100px;
        z-index: 2;
        pointer-events: none;
      }
      .cb-fade-left {
        left: 0;
        background: linear-gradient(to right, hsl(var(--background)) 0%, transparent 100%);
      }
      .cb-fade-right {
        right: 0;
        background: linear-gradient(to left, hsl(var(--background)) 0%, transparent 100%);
      }
      .cb-track {
        display: flex;
        align-items: center;
        gap: 72px;
        width: max-content;
        animation: cbScroll 32s linear infinite;
        padding: 8px 0;
      }
      .cb-track:hover {
        animation-play-state: paused;
      }
      @keyframes cbScroll {
        0%   { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .cb-item {
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0.6;
        transition: opacity 0.35s ease, transform 0.35s ease;
      }
      .cb-item:hover {
        opacity: 1;
        transform: scale(1.05);
      }
      .cb-logo {
        height: 80px;
        width: auto;
        max-width: 160px;
        object-fit: contain;
        display: block;
        user-select: none;
      }
      .cb-fallback {
        font-size: 0.75rem;
        font-weight: 600;
        color: hsl(var(--foreground) / 0.5);
        text-align: center;
        max-width: 140px;
        line-height: 1.4;
      }
      @media (max-width: 768px) {
        .cb-logo { height: 64px; max-width: 130px; }
        .cb-track { gap: 48px; }
        .cb-fade  { width: 60px; }
      }
      @media (max-width: 480px) {
        .cb-logo { height: 52px; max-width: 110px; }
        .cb-track { gap: 36px; animation-duration: 24s; }
        .cb-fade  { width: 40px; }
      }
    `}</style>
  </section>
);

export default ClientBelt;

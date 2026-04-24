export default ClientBelt;
import React from "react";

const clients = [
  { name: "Giwu's Funeral Services",        src: "/clients/giwus-funeral-services.png" },
  { name: "Kingdom Conscious Logistics",     src: "/clients/kingdom-conscious-logistics.png" },
  { name: "Mt. Hargreaves Sen. Sec. School", src: "/clients/mt-hargreaves.png" },
  { name: "Mabillions Deco",                 src: "/clients/mabillions-deco.png" },
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
        padding: 48px 0 44px;
        overflow: hidden;
        background: transparent;
      }

      .cb-label {
        text-align: center;
        font-size: 0.65rem;
        font-weight: 700;
        letter-spacing: 0.22em;
        text-transform: uppercase;
        color: rgba(255,255,255,0.3);
        margin-bottom: 32px;
      }

      .cb-wrapper {
        position: relative;
        width: 100%;
        overflow: hidden;
      }

      .cb-fade {
        position: absolute;
        top: 0; bottom: 0;
        width: 130px;
        z-index: 2;
        pointer-events: none;
      }
      .cb-fade-left {
        left: 0;
        background: linear-gradient(to right, #0a0a0a 0%, transparent 100%);
      }
      .cb-fade-right {
        right: 0;
        background: linear-gradient(to left, #0a0a0a 0%, transparent 100%);
      }

      .cb-track {
        display: flex;
        align-items: center;
        gap: 96px;
        width: max-content;
        animation: cbScroll 30s linear infinite;
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
        opacity: 0.65;
        transition: opacity 0.35s ease, transform 0.35s ease;
      }
      .cb-item:hover {
        opacity: 1;
        transform: scale(1.07);
      }

      .cb-logo {
        height: 150px;
        width: auto;
        max-width: 260px;
        object-fit: contain;
        display: block;
        user-select: none;
      }

      .cb-fallback {
        font-size: 0.7rem;
        font-weight: 600;
        color: rgba(255,255,255,0.4);
        text-align: center;
        max-width: 160px;
        line-height: 1.4;
      }

      @media (max-width: 768px) {
        .cb-logo {
          height: 110px;
          max-width: 190px;
        }
        .cb-track { gap: 64px; }
        .cb-fade  { width: 80px; }
      }

      @media (max-width: 480px) {
        .cb-logo {
          height: 80px;
          max-width: 140px;
        }
        .cb-track {
          gap: 44px;
          animation-duration: 22s;
        }
        .cb-fade { width: 50px; }
      }
    `}</style>
  </section>
);

export default ClientBelt;

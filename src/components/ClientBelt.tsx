import React from "react";

// Client logos — replace these src paths with your actual image paths in /public or wherever you host them
const clients = [
  {
    name: "Giwu's Funeral Services",
    src: "/clients/giwus-funeral-services.png",
  },
  {
    name: "Kingdom Conscious Logistics",
    src: "/clients/kingdom-conscious-logistics.png",
  },
  {
    name: "Mt. Hargreaves Senior Secondary School",
    src: "/clients/mt-hargreaves-school.png",
  },
  {
    name: "Mabillions Deco",
    src: "/clients/mabillions-deco.png",
  },
];

// Duplicate the list so the scroll loop is seamless
const doubled = [...clients, ...clients];

const ClientBelt = () => {
  return (
    <section className="client-belt-section">
      <p className="client-belt-label">Trusted by</p>
      <div className="client-belt-track-wrapper">
        {/* Fade edges */}
        <div className="client-belt-fade client-belt-fade--left" />
        <div className="client-belt-fade client-belt-fade--right" />

        <div className="client-belt-track">
          {doubled.map((client, i) => (
            <div key={i} className="client-belt-item">
              <img
                src={client.src}
                alt={client.name}
                title={client.name}
                className="client-belt-logo"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .client-belt-section {
          width: 100%;
          padding: 40px 0 32px;
          border-top: 1px solid rgba(255,255,255,0.07);
          overflow: hidden;
          background: transparent;
        }

        .client-belt-label {
          text-align: center;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--muted-foreground, #888);
          margin-bottom: 20px;
        }

        .client-belt-track-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        /* Soft fade on both edges */
        .client-belt-fade {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 120px;
          z-index: 2;
          pointer-events: none;
        }
        .client-belt-fade--left {
          left: 0;
          background: linear-gradient(to right, var(--background, #0a0a0a), transparent);
        }
        .client-belt-fade--right {
          right: 0;
          background: linear-gradient(to left, var(--background, #0a0a0a), transparent);
        }

        .client-belt-track {
          display: flex;
          align-items: center;
          gap: 64px;
          width: max-content;
          animation: clientScroll 28s linear infinite;
          padding: 8px 0;
        }

        .client-belt-track:hover {
          animation-play-state: paused;
        }

        @keyframes clientScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .client-belt-item {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 72px;
          padding: 0 16px;
          opacity: 0.7;
          transition: opacity 0.3s ease, filter 0.3s ease;
          filter: grayscale(40%);
        }

        .client-belt-item:hover {
          opacity: 1;
          filter: grayscale(0%);
        }

        .client-belt-logo {
          height: 60px;
          width: auto;
          max-width: 160px;
          object-fit: contain;
          display: block;
          user-select: none;
        }

        @media (max-width: 640px) {
          .client-belt-logo {
            height: 44px;
            max-width: 110px;
          }
          .client-belt-track {
            gap: 40px;
            animation-duration: 20s;
          }
          .client-belt-fade {
            width: 60px;
          }
        }
      `}</style>
    </section>
  );
};

export default ClientBelt;

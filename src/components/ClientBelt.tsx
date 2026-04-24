import React from "react";

const clients = [
  {
    name: "Giwu's Funeral Services",
    src: "/clients/giwus-funeral-services.png",
    lightBg: true,  // light logo → white card
  },
  {
    name: "Kingdom Conscious Logistics",
    src: "/clients/kingdom-conscious-logistics.png",
    lightBg: true,  // white background logo
  },
  {
    name: "Mt. Hargreaves Sen. Sec. School",
    src: "/clients/mt-hargreaves-school.png",
    lightBg: false, // dark navy logo — show on subtle dark card
  },
  {
    name: "Mabillions Deco",
    src: "/clients/mabillions-deco.png",
    lightBg: false, // dark background logo
  },
];

// Duplicate for seamless infinite loop
const doubled = [...clients, ...clients];

const ClientBelt = () => {
  return (
    <section className="cb-section">
      <p className="cb-label">Trusted by</p>

      <div className="cb-wrapper">
        <div className="cb-fade cb-fade-left" />
        <div className="cb-fade cb-fade-right" />

        <div className="cb-track">
          {doubled.map((client, i) => (
            <div
              key={i}
              className={`cb-card ${client.lightBg ? "cb-card--light" : "cb-card--dark"}`}
              title={client.name}
            >
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
          padding: 48px 0 36px;
          overflow: hidden;
          background: transparent;
        }

        .cb-label {
          text-align: center;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          margin-bottom: 28px;
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
          background: linear-gradient(to right, #0a0a0a 0%, transparent 100%);
        }
        .cb-fade-right {
          right: 0;
          background: linear-gradient(to left, #0a0a0a 0%, transparent 100%);
        }

        .cb-track {
          display: flex;
          align-items: center;
          gap: 32px;
          width: max-content;
          animation: cbScroll 30s linear infinite;
          padding: 12px 0;
        }
        .cb-track:hover {
          animation-play-state: paused;
        }

        @keyframes cbScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .cb-card {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 150px;
          height: 100px;
          border-radius: 14px;
          padding: 12px;
          overflow: hidden;
          opacity: 0.8;
          transition: transform 0.3s ease, opacity 0.3s ease, box-shadow 0.3s ease;
          cursor: default;
        }
        .cb-card:hover {
          opacity: 1;
          transform: translateY(-4px) scale(1.05);
        }

        /* White card for logos with light backgrounds */
        .cb-card--light {
          background: #ffffff;
          box-shadow: 0 2px 20px rgba(0,0,0,0.5);
        }
        .cb-card--light:hover {
          box-shadow: 0 8px 32px rgba(255,255,255,0.15);
        }

        /* Subtle dark card for logos with dark backgrounds */
        .cb-card--dark {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 2px 12px rgba(0,0,0,0.4);
        }
        .cb-card--dark:hover {
          background: rgba(255,255,255,0.09);
          box-shadow: 0 6px 24px rgba(0,0,0,0.6);
        }

        .cb-logo {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          user-select: none;
        }

        /* Shown when image fails to load */
        .cb-fallback {
          font-size: 0.6rem;
          font-weight: 600;
          text-align: center;
          color: rgba(255,255,255,0.45);
          line-height: 1.4;
        }

        @media (max-width: 640px) {
          .cb-card {
            width: 108px;
            height: 72px;
            border-radius: 10px;
            padding: 8px;
          }
          .cb-track {
            gap: 20px;
            animation-duration: 22s;
          }
          .cb-fade {
            width: 50px;
          }
        }
      `}</style>
    </section>
  );
};

export default ClientBelt;

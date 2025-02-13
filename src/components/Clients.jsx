import React from "react";
import ltitsolutions from "../images/ltitsolutions.png";
import manipal from "../images/manipal.png";
import qstone from "../images/qstone-logo.png";
import ags from "../images/ags-logo.png";
import svb from "../images/svb-logo.png";
import whitepebble from "../images/whitepebble.png";

const logos = [
  { src: ltitsolutions, alt: "LTIT Solutions", link: "https://ltitsolutions.com" },
  { src: manipal, alt: "Manipal", link: "https://icrafmn2024.com" },
  { src: ags, alt: "AGS", link: "https://ags-website-test.vercel.app" },
  { src: qstone, alt: "QStone", link: "https://qstonejewels.com" },
  { src: svb, alt: "SVB", link: "https://svbroadcasting.com" },
  { src: whitepebble, alt: "White Pebble", link: "https://whitepebble.vercel.app" },
];

const Clients = () => {
  return (
    <div className="flex flex-col items-center pb-10 overflow-hidden">
      <h1 className="text-stone-400 font-bold text-center pb-10 text-2xl font-dgs">
        CLIENTS
      </h1>

      {/* Normal Grid Layout on Large Screens */}
      <div className="hidden md:flex items-center gap-20">
        {logos.map((logo, index) => (
          <a
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-50 hover:opacity-100"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className={`h-14 object-contain ${logo.alt === "QStone" || logo.alt === "White Pebble" ? "h-36 w-24" : ""}`}
            />
          </a>
        ))}
      </div>

      {/* Infinite Scrolling Carousel on Small Screens */}
      <div className="md:hidden w-full overflow-hidden relative">
        <div className="flex items-center space-x-10 animate-scroll">
          {[...logos, ...logos].map((logo, index) => (
            <a
              key={index}
                target="_blank"
              rel="noopener noreferrer"
              className="opacity-50 hover:opacity-100 flex-shrink-0"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className={`h-14 object-contain ${logo.alt === "QStone" || logo.alt === "White Pebble" ? "h-36 w-24" : ""}`}
              />
            </a>
          ))}
        </div>
      </div>

      {/* Keyframe Animation for Scrolling */}
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          display: flex;
          white-space: nowrap;
          animation: scroll 15s linear infinite;
          width: max-content;
        }
      `}</style>
    </div>
  );
};

export default Clients;

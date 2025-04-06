import React, { useEffect } from "react";
import { motion } from "framer-motion";

const logos = [
  // ... (même liste de logos)
  {
    name: "Google",
    url: "https://www.logo.wine/a/logo/Google/Google-Logo.wine.svg",
  },
  {
    name: "Microsoft",
    url: "https://www.logo.wine/a/logo/Microsoft/Microsoft-Logo.wine.svg",
  },
  {
    name: "Apple",
    url: "https://www.logo.wine/a/logo/Apple_Inc./Apple_Inc.-Logo.wine.svg",
  },
  {
    name: "Amazon",
    url: "https://www.logo.wine/a/logo/Amazon_(company)/Amazon_(company)-Logo.wine.svg",
  },
  {
    name: "Meta",
    url: "https://www.logo.wine/a/logo/Meta_Platforms/Meta_Platforms-Logo.wine.svg",
  },
  {
    name: "Netflix",
    url: "https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg",
  },
  {
    name: "Spotify",
    url: "https://www.logo.wine/a/logo/Spotify/Spotify-Logo.wine.svg",
  },
  {
    name: "Slack",
    url: "https://www.logo.wine/a/logo/Slack_Technologies/Slack_Technologies-Logo.wine.svg",
  },
  {
    name: "Zoom",
    url: "https://www.logo.wine/a/logo/Zoom_Video_Communications/Zoom_Video_Communications-Logo.wine.svg",
  },
  {
    name: "Dropbox",
    url: "https://www.logo.wine/a/logo/Dropbox_(service)/Dropbox_(service)-Logo.wine.svg",
  },
  {
    name: "Adobe",
    url: "https://www.logo.wine/a/logo/Adobe_Inc./Adobe_Inc.-Logo.wine.svg",
  },
  {
    name: "Salesforce",
    url: "https://www.logo.wine/a/logo/Salesforce.com/Salesforce.com-Logo.wine.svg",
  },
  {
    name: "Twitter",
    url: "https://www.logo.wine/a/logo/Dell_EMC_XtremIO/Dell_EMC_XtremIO-Logo.wine.svg",
  },
];

function ClientLogos() {
  useEffect(() => {
    logos.forEach((logo) => {
      const img = new Image();
      img.src = logo.url;
      img.onload = () => console.log(`${logo.name} chargé avec succès`);
      img.onerror = () => console.error(`Échec du chargement de ${logo.name}`);
    });
  }, []);

  return (
    <div className="w-full bg-white py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex space-x-9"
          animate={{
            x: [0, -1200],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 15,
              ease: "linear",
            },
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-40 h-20 flex-shrink-0"
            >
              <img
                src={logo.url}
                alt={`${logo.name} logo`}
                className="max-w-full max-h-full object-contain w-64 h-64"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default ClientLogos;

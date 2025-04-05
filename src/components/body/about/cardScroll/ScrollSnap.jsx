import React, { useEffect } from "react";
import { motion } from "framer-motion";

const logos = [
  // ... (même liste de logos)
  {
    name: "Google",
    url: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
  },
  {
    name: "Microsoft",
    url: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31",
  },
  {
    name: "Apple",
    url: "https://www.apple.com/ac/globalnav/7/fr_FR/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg",
  },
  {
    name: "Amazon",
    url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Meta",
    url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
  },
  {
    name: "Netflix",
    url: "https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg",
  },
  {
    name: "Spotify",
    url: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
  },
  {
    name: "Slack",
    url: "https://a.slack-edge.com/bv1-9/slack_logo-ebd5c3b.svg",
  },
  {
    name: "Zoom",
    url: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/Zoom_communications_logo.svg/1200px-Zoom_communications_logo.svg.png",
  },
  {
    name: "Dropbox",
    url: "https://upload.wikimedia.org/wikipedia/commons/4/45/Dropbox_logo_and_wordmark.svg",
  },
  {
    name: "Adobe",
    url: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Adobe_Corporate_Logo.svg",
  },
  {
    name: "Salesforce",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Salesforce_logo.svg/1200px-Salesforce_logo.svg.png",
  },
  {
    name: "Twitter",
    url: "https://upload.wikimedia.org/wikipedia/fr/thumb/c/c8/Twitter_bird_logo_2012.svg/1200px-Twitter_bird_logo_2012.svg.png",
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
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default ClientLogos;

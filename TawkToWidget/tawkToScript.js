import React, { useEffect } from "react";

const tawkToScript = () => {
  useEffect(() => {
    // Set the tawk.to Site ID
    const Tawk_API = window.Tawk_API || {};
    Tawk_API.sites = Tawk_API.sites || {};
    Tawk_API.sites.default = {
      siteId: process.env.TAWKTO_ID,
    };

    // Load the tawk.to widget script dynamically
    const s1 = document.createElement("script");
    s1.async = true;
    s1.src = process.env.TAWKTO_SRC;

    // Insert the script element into the document
    document.head.appendChild(s1);

    return () => {
      // Remove the script element when the component unmounts
      document.head.removeChild(s1);
    };
  }, []);

  return <div></div>;
};

export default tawkToScript;

import { useEffect } from "react";
import { useLocation } from "wouter";

const BASE_URL = "https://dgksolutions.co.uk";

export function StructuredData() {
  const [location] = useLocation();

  useEffect(() => {
    // Remove existing structured data script if present
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}#organization`,
      "name": "DGK Solutions Ltd",
      "description": "Professional plumbing, drainage, and tanker services across Essex, M25 radius, Cambridge, and Luton. 30+ years combined experience. 24/7 emergency call-outs, 365 days a year.",
      "url": BASE_URL,
      "logo": `${BASE_URL}/DGK.png`,
      "image": `${BASE_URL}/DGK.png`,
      "telephone": [
        "+441708961700",
        "+44708961700"
      ],
      "email": "info@dgksolutions.co.uk",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "Essex",
        "addressCountry": "GB"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Essex"
        },
        {
          "@type": "City",
          "name": "London",
          "description": "M25 Radius"
        },
        {
          "@type": "City",
          "name": "Cambridge"
        },
        {
          "@type": "City",
          "name": "Luton"
        }
      ],
      "serviceType": [
        "Emergency Plumbing",
        "Plumbing Repairs",
        "Drainage Services",
        "Drain Clearing",
        "Drain Unblocking",
        "CCTV Drain Surveys",
        "HPWJ Jetting",
        "High-Pressure Water Jetting",
        "No-Dig Drain Repairs",
        "Drain Lining",
        "Patch Repairs",
        "Traditional Excavations",
        "Tanker Services",
        "Septic Tank Emptying",
        "Grease Trap Maintenance",
        "Liquid Waste Removal"
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        }
      ],
      "priceRange": "££",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "bestRating": "5"
      }
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData, null, 2);
    document.head.appendChild(script);

    return () => {
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach((s) => {
        if (s.textContent?.includes('"@type": "LocalBusiness"')) {
          s.remove();
        }
      });
    };
  }, [location]);

  return null;
}


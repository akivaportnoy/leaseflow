import React from "react";

export default function EqualHousingLogo({ color = "#FFFFFF", size = 40 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Equal Housing Opportunity"
      role="img"
    >
      <rect x="5" y="5" width="90" height="90" stroke={color} strokeWidth="3" fill="none" />
      <polygon points="50,12 15,42 85,42" fill={color} />
      <rect x="25" y="42" width="50" height="45" fill={color} />
      <rect x="38" y="55" width="24" height="32" fill={color === "#FFFFFF" || color === "#F4F1EA" || color === "#F5F0EB" ? "#333" : "#FFF"} />
      <text x="50" y="98" textAnchor="middle" fontSize="7" fill={color} fontFamily="Arial, sans-serif" fontWeight="bold">
        EQUAL HOUSING
      </text>
    </svg>
  );
}
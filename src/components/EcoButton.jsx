import React, { useState } from "react";
import { Link } from "react-router-dom";

const EcoButton = ({ children, className = "", as, href, ...props }) => {
  const [hover, setHover] = useState(false);
  const isInternal = href && href.startsWith("/");
  const ButtonContent = (
    <span className="d-inline-flex align-items-center justify-content-center w-100 position-relative">
      <span
        className="eco-leaf eco-leaf-left"
        style={{
          opacity: hover ? 1 : 0,
          transform: hover ? 'translateX(-10px) scale(1.2)' : 'translateX(-20px) scale(0.8)',
          transition: 'all 0.3s',
          position: 'absolute',
          left: 20,
          fontSize: 22,
        }}
      >🌱</span>
      <span className="mx-3" style={{zIndex: 2}}>{children}</span>
      <span
        className="eco-leaf eco-leaf-right"
        style={{
          opacity: hover ? 1 : 0,
          transform: hover ? 'translateX(10px) scale(1.2)' : 'translateX(20px) scale(0.8)',
          transition: 'all 0.3s',
          position: 'absolute',
          right: 20,
          fontSize: 22,
        }}
      >🌱</span>
    </span>
  );

  const style = {
    background: hover ? '#25995c' : 'rgba(38, 153, 92, 0.7)',
    color: '#fff',
    fontFamily: 'Poppins, Arial, sans-serif',
    fontWeight: 500,
    fontSize: '1.2rem',
    letterSpacing: '0.02em',
    boxShadow: hover ? '0 4px 12px 0 rgba(38, 153, 92, 0.2)' : '0 2px 8px 0 rgba(38, 153, 92, 0.1)',
    transition: 'all 0.3s ease',
    overflow: 'hidden',
    minHeight: '48px',
    minWidth: '160px',
    textDecoration: 'none',
  };

  if (as === "a" && href) {
    if (isInternal) {
      return (
        <Link
          to={href}
          className={`eco-btn px-5 py-3 rounded-pill border-0 fw-semibold d-inline-flex align-items-center justify-content-center position-relative ${className}`}
          style={style}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          {...props}
        >
          {ButtonContent}
        </Link>
      );
    } else {
      return (
        <a
          href={href}
          className={`eco-btn px-5 py-3 rounded-pill border-0 fw-semibold d-inline-flex align-items-center justify-content-center position-relative ${className}`}
          style={style}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          {...props}
        >
          {ButtonContent}
        </a>
      );
    }
  }
  return (
    <button
      type="button"
      className={`eco-btn px-5 py-3 rounded-pill border-0 fw-semibold d-inline-flex align-items-center justify-content-center position-relative ${className}`}
      style={style}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...props}
    >
      {ButtonContent}
    </button>
  );
};

export default EcoButton; 
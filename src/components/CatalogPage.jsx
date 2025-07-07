import React, { useState } from "react";
import products from "../data/products.json";
import EcoButton from "./EcoButton";

const colors = ["#E8F5E9", "#FFF3E0", "#E3F2FD", "#F3E5F5", "#FFFDE7", "#FBE9E7", "#E0F2F1"];

// @ts-nocheck

const CatalogPage = () => {
  const [flipped, setFlipped] = useState(Array(products.length).fill(false));

  const handleFlip = (idx, value) => {
    setFlipped(f => f.map((v, i) => (i === idx ? value : v)));
  };

  return (
    <div className="min-vh-100 bg-light text-dark">
      <header className="container-fluid py-3 border-bottom bg-white mb-4">
        <div className="d-flex justify-content-between align-items-center">
          <img src="/logo-mt.png" alt="MangeTout Logo" style={{height: 40}} />
          <nav>
            <a href="/" className="fw-bold text-dark me-4 text-decoration-none">Accueil</a>
            <a href="/catalogue" className="fw-bold text-dark text-decoration-none">Catalogue</a>
          </nav>
        </div>
      </header>
      <main className="container py-4">
        <div className="text-center mb-4">
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 4}}>
            <span role="img" aria-label="leaf" style={{fontSize: '2.2rem', display: 'block'}}>
              🌱
            </span>
          </div>
          <h1 style={{
            color: '#25995c', fontWeight: 700, fontSize: '2.4rem', letterSpacing: '0.01em', background: '#E8F5E9', borderRadius: 18, padding: '0.5em 1.2em', boxShadow: '0 2px 8px 0 rgba(38,153,92,0.07)',
            flexWrap: 'wrap', width: '100%', maxWidth: 600, margin: '0 auto', display: 'block',
          }}>
            Découvre nos produits écologiques et délicieux !
          </h1>
          <div style={{color: '#3E4231', fontSize: '1.1rem', marginTop: 8, opacity: 0.85, maxWidth: 500, marginLeft: 'auto', marginRight: 'auto'}}>
            Explore notre sélection de contenants comestibles, sains et respectueux de la planète.
          </div>
        </div>
        <div className="row g-4">
          {products.map((product, index) => (
            <div key={index} className="col-12 col-sm-6 col-lg-4 d-flex align-items-stretch">
              <div
                className="flip-card w-100 h-100"
                onMouseEnter={() => handleFlip(index, true)}
                onMouseLeave={() => handleFlip(index, false)}
                onClick={() => handleFlip(index, !flipped[index])}
                style={{cursor: 'pointer', perspective: 1000, minHeight: 340, display: 'flex'}}
              >
                <div className={`flip-card-inner h-100 ${flipped[index] ? "flipped" : ""}`} style={{transition: 'transform 0.6s', transformStyle: 'preserve-3d', position: 'relative', minHeight: 340}}>
                  {/* Cara frontal */}
                  <div className="flip-card-front card h-100 shadow-sm border-0 position-relative overflow-hidden" style={{backfaceVisibility: 'hidden', zIndex: 2, minHeight: 340, display: 'flex', flexDirection: 'column'}}>
                    <img src={product.image} alt={product.name} className="card-img-top bg-light p-3 mx-auto" style={{height: 180, objectFit: 'contain', maxWidth: '100%'}} />
                    <div className="card-body d-flex flex-column align-items-center p-2 p-md-3">
                      <h2 className="h6 card-title text-center mb-2" style={{color: '#3E4231', fontSize: '1.1rem'}}>{product.name}</h2>
                      <p className="fw-bold mb-3" style={{color: '#D88B32', fontSize: '1.1rem'}}>{product.price.toFixed(2)} €</p>
                      <EcoButton className="w-100 mt-auto" style={{fontSize: '1rem', minWidth: 0}}>Ajouter au panier</EcoButton>
                    </div>
                  </div>
                  {/* Cara trasera */}
                  <div
                    className="flip-card-back card h-100 position-absolute top-0 start-0 w-100"
                    style={{
                      background: colors[index % colors.length],
                      color: '#3E4231',
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                      zIndex: 3,
                      borderRadius: 16,
                      boxShadow: '0 4px 16px 0 rgba(38,153,92,0.08)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: 16,
                      minHeight: 340,
                    }}
                  >
                    <h3 className="mb-3 text-center" style={{color: '#25995c', fontWeight: 600, fontSize: '1.15rem'}}>
                      <span role="img" aria-label="info">🍃</span> {product.name}
                    </h3>
                    <ul style={{textAlign: 'left', padding: 0, listStyle: 'none', fontSize: '0.98rem', fontFamily: 'Poppins, Arial, sans-serif', maxWidth: 260}}>
                      {product.description.split('\n').map((line, i) => (
                        <li key={i} style={{marginBottom: 6, wordBreak: 'break-word'}}>
                          {line.startsWith('-') ? <span style={{color: '#D88B32', marginRight: 6}}>•</span> : null}
                          {line.replace(/^- /, '')}
                        </li>
                      ))}
                    </ul>
                    <button
                      className="btn btn-light rounded-circle mt-3"
                      style={{border: '1px solid #25995c', color: '#25995c', fontSize: 22, width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                      onClick={e => { e.stopPropagation(); handleFlip(index, false); }}
                      aria-label="Retourner la carte"
                    >↩️</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <style>{`
        .flip-card-inner { position: relative; width: 100%; height: 100%; }
        .flip-card.flipped .flip-card-inner, .flip-card-inner.flipped {
          transform: rotateY(180deg);
        }
        .flip-card-inner, .flip-card-front, .flip-card-back {
          transition: transform 0.6s cubic-bezier(.4,2,.3,1), box-shadow 0.2s;
        }
        .flip-card-front, .flip-card-back {
          position: absolute; width: 100%; height: 100%; top: 0; left: 0;
        }
        .flip-card-front { z-index: 2; }
        .flip-card-back { z-index: 3; }
        @media (max-width: 767px) {
          h1 { font-size: 1.3rem !important; padding: 0.5em 0.5em !important; }
          .flip-card-front, .flip-card-back, .flip-card-inner { min-height: 260px !important; }
        }
        @media (max-width: 575px) {
          .flip-card-front, .flip-card-back, .flip-card-inner { min-height: 200px !important; }
          .card-img-top { height: 110px !important; }
        }
      `}</style>
    </div>
  );
};

export default CatalogPage; 
// @ts-nocheck
import React from "react";
import products from "../data/products.json";
import EcoButton from "./EcoButton";
import Vaso3D from "./Vaso3D";

const destacados = products.slice(0, 3);

const HomePage = () => {
  return (
    <div className="bg-white min-vh-100 d-flex flex-column border-top border-success">
      {/* Hero Section */}
      <section className="position-relative d-flex flex-column justify-content-center align-items-center bg-light" style={{minHeight: '60vh', textAlign: 'center', color: '#3E4231', overflow: 'hidden'}}>
        {/* Collage de productos en arco */}
        <div className="position-absolute start-50 translate-middle-x" style={{top: 30, left: '50%', width: 420, height: 120, pointerEvents: 'none', zIndex: 1}}>
          {products.slice(0, 7).map((p, i, arr) => {
            const total = arr.length;
            const angle = Math.PI * (0.15 + 0.7 * (i / (total - 1)));
            const radius = 180;
            const x = radius * Math.cos(angle) + 210 - 45;
            const y = radius * Math.sin(angle) + 60 - 45;
            return (
              <img
                key={i}
                src={p.image}
                alt={p.name}
                className="rounded-circle shadow border border-white position-absolute"
                style={{
                  width: 90,
                  height: 90,
                  objectFit: 'cover',
                  left: `${x}px`,
                  top: `${y}px`,
                  transition: 'box-shadow 0.2s',
                }}
              />
            );
          })}
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center w-100 mb-5" style={{zIndex: 2}}>
          <div style={{maxWidth: 500, width: '100%', marginBottom: 1}}>
            <Vaso3D />
          </div>
          <img src="/logo-mt.png" alt="MangeTout Logo" style={{height: 70, marginBottom: 12}} />
          <h1 className="fw-bold display-4 mb-0 mt-2" style={{textAlign: 'center', minWidth: 220}}>Protège ta planète, mange ton paquet.</h1>
          <EcoButton as="a" href="/catalogue" className="mt-4 position-relative">Voir les produits</EcoButton>
        </div>
      </section>

      {/* About Us */}
      <section className="bg-light py-5">
        <h2 className="display-6 fw-semibold text-center" style={{color: '#3E4231'}}>Qui sommes-nous ?</h2>
        <p className="mx-auto text-center mt-3 lead" style={{maxWidth: 700, color: '#3E4231'}}>
          MangeTout est une boutique dédiée à la vente de produits comestibles et écologiques, créés pour préserver notre planète et simplifier notre vie quotidienne.
        </p>
        <div className="d-flex justify-content-center mt-4 gap-3">
          <img src="/logo-mt.png" alt="Logo MangeTout" style={{height: 60}} />
          <span className="rounded-circle d-flex align-items-center justify-content-center" style={{backgroundColor: '#25995c', width: 60, height: 60, color: 'white', fontSize: 32}}>🌱</span>
        </div>
      </section>

      {/* Features */}
      <section className="container py-5">
        <div className="row g-4 text-center">
          <div className="col-12 col-sm-6 col-md-3">
            <div className="p-4 bg-white border rounded shadow-sm h-100">
              <h3 className="fw-semibold" style={{color: '#25995c'}}>Sostenibilidad</h3>
              <p className="mt-2">Nos produits sont 100% biodégradables et respectueux de l'environnement.</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <div className="p-4 bg-white border rounded shadow-sm h-100">
              <h3 className="fw-semibold" style={{color: '#25995c'}}>Comestibilité</h3>
              <p className="mt-2">Tous nos produits sont fabriqués à partir d'ingrédients sûrs et comestibles.</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <div className="p-4 bg-white border rounded shadow-sm h-100">
              <h3 className="fw-semibold" style={{color: '#25995c'}}>Innovation</h3>
              <p className="mt-2">Des produits innovants qui réinventent l'utilisation des matériaux écologiques.</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <div className="p-4 bg-white border rounded shadow-sm h-100">
              <h3 className="fw-semibold" style={{color: '#25995c'}}>Facilité d'utilisation</h3>
              <p className="mt-2">Intégrez facilement nos produits dans votre quotidien pour un impact positif.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Productos Destacados */}
      <section className="bg-light py-5">
        <h2 className="display-6 fw-semibold text-center" style={{color: '#3E4231'}}>Nos Produits</h2>
        <div className="container">
          <div className="row g-4 mt-3">
            {destacados.map((product, index) => (
              <div key={index} className="col-12 col-md-4">
                <div className="p-4 bg-white border rounded shadow-sm h-100 d-flex flex-column align-items-center">
                  <img src={product.image} alt={product.name} className="mb-3 bg-light rounded" style={{width: '100%', height: 140, objectFit: 'contain'}} />
                  <h3 className="fw-semibold" style={{color: '#3E4231'}}>{product.name}</h3>
                  <p className="fw-bold" style={{color: '#25995c'}}>{product.price.toFixed(2)} €</p>
                  <EcoButton as="a" href="/catalogue" className="btn btn-link text-success p-0 mt-2 bg-transparent border-0">Voir plus</EcoButton>
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-center mt-4">
            <EcoButton as="a" href="/catalogue" className="px-4">Voir tout le catalogue</EcoButton>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-5" style={{backgroundColor: '#25995c', color: '#F2E9D8'}}>
        <h2 className="display-6 fw-semibold text-center mb-4">Ce que nos clients disent</h2>
        <div className="container">
          <div id="carouselTestimonials" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {/* Opinión 1 */}
              <div className="carousel-item active">
                <div className="d-flex justify-content-center">
                  <div className="card h-100 border-0 shadow-sm" style={{background: 'rgba(255,255,255,0.7)', borderRadius: '2rem', minWidth: 320, maxWidth: 400}}>
                    <div className="card-body text-center">
                      <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Cliente 1" className="rounded-circle mb-3" style={{width: 64, height: 64, objectFit: 'cover', border: '3px solid #25995c'}} />
                      <p className="fst-italic mb-2">"J'adore les produits MangeTout ! Ils sont pratiques, écologiques et délicieux !"</p>
                      <h6 className="mb-0 fw-bold" style={{color: '#25995c'}}>Camille D.</h6>
                      <small className="text-muted">Paris, France</small>
                    </div>
                  </div>
                </div>
              </div>
              {/* Opinión 2 */}
              <div className="carousel-item">
                <div className="d-flex justify-content-center">
                  <div className="card h-100 border-0 shadow-sm" style={{background: 'rgba(255,255,255,0.7)', borderRadius: '2rem', minWidth: 320, maxWidth: 400}}>
                    <div className="card-body text-center">
                      <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Cliente 2" className="rounded-circle mb-3" style={{width: 64, height: 64, objectFit: 'cover', border: '3px solid #25995c'}} />
                      <p className="fst-italic mb-2">"Des produits innovants et bons pour la planète. Je recommande à 100% !"</p>
                      <h6 className="mb-0 fw-bold" style={{color: '#25995c'}}>Lucas M.</h6>
                      <small className="text-muted">Lyon, France</small>
                    </div>
                  </div>
                </div>
              </div>
              {/* Opinión 3 */}
              <div className="carousel-item">
                <div className="d-flex justify-content-center">
                  <div className="card h-100 border-0 shadow-sm" style={{background: 'rgba(255,255,255,0.7)', borderRadius: '2rem', minWidth: 320, maxWidth: 400}}>
                    <div className="card-body text-center">
                      <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Cliente 3" className="rounded-circle mb-3" style={{width: 64, height: 64, objectFit: 'cover', border: '3px solid #25995c'}} />
                      <p className="fst-italic mb-2">"Service rapide, produits délicieux et zéro déchet. Bravo MangeTout !"</p>
                      <h6 className="mb-0 fw-bold" style={{color: '#25995c'}}>Sophie L.</h6>
                      <small className="text-muted">Marseille, France</small>
                    </div>
                  </div>
                </div>
              </div>
              {/* Opinión 4 */}
              <div className="carousel-item">
                <div className="d-flex justify-content-center">
                  <div className="card h-100 border-0 shadow-sm" style={{background: 'rgba(255,255,255,0.7)', borderRadius: '2rem', minWidth: 320, maxWidth: 400}}>
                    <div className="card-body text-center">
                      <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Cliente 4" className="rounded-circle mb-3" style={{width: 64, height: 64, objectFit: 'cover', border: '3px solid #25995c'}} />
                      <p className="fst-italic mb-2">"J'ai été surpris par la qualité et le goût des produits. Une vraie découverte !"</p>
                      <h6 className="mb-0 fw-bold" style={{color: '#25995c'}}>Antoine R.</h6>
                      <small className="text-muted">Toulouse, France</small>
                    </div>
                  </div>
                </div>
              </div>
              {/* Opinión 5 */}
              <div className="carousel-item">
                <div className="d-flex justify-content-center">
                  <div className="card h-100 border-0 shadow-sm" style={{background: 'rgba(255,255,255,0.7)', borderRadius: '2rem', minWidth: 320, maxWidth: 400}}>
                    <div className="card-body text-center">
                      <img src="https://randomuser.me/api/portraits/women/12.jpg" alt="Cliente 5" className="rounded-circle mb-3" style={{width: 64, height: 64, objectFit: 'cover', border: '3px solid #25995c'}} />
                      <p className="fst-italic mb-2">"Parfait pour les événements éco-responsables. Je recommande !"</p>
                      <h6 className="mb-0 fw-bold" style={{color: '#25995c'}}>Julie P.</h6>
                      <small className="text-muted">Nice, France</small>
                    </div>
                  </div>
                </div>
              </div>
              {/* Opinión 6 */}
              <div className="carousel-item">
                <div className="d-flex justify-content-center">
                  <div className="card h-100 border-0 shadow-sm" style={{background: 'rgba(255,255,255,0.7)', borderRadius: '2rem', minWidth: 320, maxWidth: 400}}>
                    <div className="card-body text-center">
                      <img src="https://randomuser.me/api/portraits/men/77.jpg" alt="Cliente 6" className="rounded-circle mb-3" style={{width: 64, height: 64, objectFit: 'cover', border: '3px solid #25995c'}} />
                      <p className="fst-italic mb-2">"Livraison rapide et produits conformes à la description. Très satisfait !"</p>
                      <h6 className="mb-0 fw-bold" style={{color: '#25995c'}}>Pierre G.</h6>
                      <small className="text-muted">Bordeaux, France</small>
                    </div>
                  </div>
                </div>
              </div>
              {/* Opinión 7 */}
              <div className="carousel-item">
                <div className="d-flex justify-content-center">
                  <div className="card h-100 border-0 shadow-sm" style={{background: 'rgba(255,255,255,0.7)', borderRadius: '2rem', minWidth: 320, maxWidth: 400}}>
                    <div className="card-body text-center">
                      <img src="https://randomuser.me/api/portraits/women/23.jpg" alt="Cliente 7" className="rounded-circle mb-3" style={{width: 64, height: 64, objectFit: 'cover', border: '3px solid #25995c'}} />
                      <p className="fst-italic mb-2">"Une belle initiative pour la planète et des produits vraiment bons !"</p>
                      <h6 className="mb-0 fw-bold" style={{color: '#25995c'}}>Emma T.</h6>
                      <small className="text-muted">Lille, France</small>
                    </div>
                  </div>
                </div>
              </div>
              {/* Opinión 8 */}
              <div className="carousel-item">
                <div className="d-flex justify-content-center">
                  <div className="card h-100 border-0 shadow-sm" style={{background: 'rgba(255,255,255,0.7)', borderRadius: '2rem', minWidth: 320, maxWidth: 400}}>
                    <div className="card-body text-center">
                      <img src="https://randomuser.me/api/portraits/men/81.jpg" alt="Cliente 8" className="rounded-circle mb-3" style={{width: 64, height: 64, objectFit: 'cover', border: '3px solid #25995c'}} />
                      <p className="fst-italic mb-2">"Des produits originaux, sains et respectueux de l'environnement. Merci !"</p>
                      <h6 className="mb-0 fw-bold" style={{color: '#25995c'}}>Hugo F.</h6>
                      <small className="text-muted">Strasbourg, France</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Controles del carrusel */}
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselTestimonials" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Précédent</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselTestimonials" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Suivant</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-light py-4 text-center mt-auto">
        <p>© 2025 MangeTout. Tous droits réservés.</p>
        <div className="d-flex justify-content-center mt-3 gap-3">
          <a href="https://instagram.com" className="mx-2 text-success text-decoration-none" target="_blank" rel="noopener noreferrer" style={{display: 'inline-flex', alignItems: 'center'}} aria-label="Instagram">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#25995c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg>
          </a>
          <a href="https://facebook.com" className="mx-2 text-success text-decoration-none" target="_blank" rel="noopener noreferrer" style={{display: 'inline-flex', alignItems: 'center'}} aria-label="Facebook">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#25995c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.28l.72-4H14V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage; 
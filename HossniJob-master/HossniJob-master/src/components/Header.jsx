import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';
import accueilImage from '../assets/image/accueil.jpg';
import srchumainImage from '../assets/image/srchumain.jpg';
import formationImage from '../assets/image/formation.jpg';
import managementImage from '../assets/image/management.jpg';
import coachingImage from '../assets/image/coaching.jpg';
import logo from '../assets/image/logo.png';

const Home = () => {
  const expertises = [
    {
      title: 'Ressources Humaines',
      description: 'Accompagnement stratégique et opérationnel en gestion des talents et organisation RH',
      link: '/services#rh',
      image: srchumainImage,
    },
    {
      title: 'Formation Digitale',
      description: 'Solutions de formation en ligne innovantes pour booster les compétences de vos équipes',
      link: '/services#formation',
      image: formationImage,
    },
    {
      title: 'Management Stratégique',
      description: 'Conseil en pilotage stratégique, transformation et conduite du changement',
      link: '/services#management',
      image: managementImage,
    },
    {
      title: 'Coaching Professionnel',
      description: 'Coaching individuel et collectif certifié pour accompagner la performance durable',
      link: '/services#coaching',
      image: coachingImage,
    },
  ];

  return (
    <div>
      {/* Navbar */}
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 40px',
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000
      }}>
        <Link to="/">
          <img src={logo} alt="Logo" style={{ height: '50px' }} />
        </Link>
        <div style={{ display: 'flex', gap: '25px' }}>
          <Link to="/" className="nav-link" style={{ color: '#008000', fontWeight: 'bold', textDecoration: 'none' }}>Accueil</Link>
          <Link to="/services" className="nav-link" style={{ color: '#008000', fontWeight: 'bold', textDecoration: 'none' }}>Services</Link>
          <Link to="/about" className="nav-link" style={{ color: '#008000', fontWeight: 'bold', textDecoration: 'none' }}>À propos</Link>
          <Link to="/contact" className="nav-link" style={{ color: '#008000', fontWeight: 'bold', textDecoration: 'none' }}>Contact</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="hero fade-in"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 128, 0, 0.5), rgba(0, 128, 0, 0.5)), url(${accueilImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '100px 0',
          textAlign: 'center',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '80px'
        }}
      >
        <div className="container">
          <h1 className="slide-down" style={{ fontSize: '3rem', marginBottom: '20px' }}>
            Bienvenue chez HousniJob
          </h1>
          <p className="slide-up" style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
            Cabinet de Conseil en Ressources Humaines, Formation Digitale, Management Stratégique et Coaching Professionnel Certifié
          </p>
          <div className="scale-in">
            <Link to="/services" className="btn custom-btn">
              Découvrir nos expertises
            </Link>
          </div>
        </div>
      </section>

      {/* Expertises Section */}
      <section style={{ padding: '60px 0' }}>
        <div className="container">
          <h2 className="fade-in" style={{ textAlign: 'center', marginBottom: '40px' }}>
            Nos Domaines d'Expertise
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px'
          }}>
            {expertises.map((item, index) => (
              <div
                key={index}
                className={`expertise-card slide-up delay-${index}`}
                style={{
                  background: `url(${item.image}) center/cover no-repeat`,
                  height: '300px',
                  borderRadius: '12px',
                  position: 'relative',
                  overflow: 'hidden',
                  color: 'white',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '20px',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <div style={{ backgroundColor: 'rgba(0,0,0,0.6)', padding: '15px', borderRadius: '8px' }}>
                  <h3>{item.title}</h3>
                  <p style={{ fontSize: '0.9rem', marginBottom: '15px' }}>{item.description}</p>
                  <Link to={item.link} className="btn custom-btn-light">
                    En savoir plus
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="fade-in"
        style={{
          backgroundColor: '#f8f9fa',
          padding: '60px 0',
          textAlign: 'center'
        }}
      >
        <div className="container">
          <h2 className="slide-down">
            Besoin d'un accompagnement sur mesure ?
          </h2>
          <p className="slide-up" style={{ marginBottom: '30px' }}>
            Contactez-nous pour discuter de vos projets et découvrir nos solutions personnalisées
          </p>
          <div className="scale-in">
            <Link to="/contact" className="btn custom-btn">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
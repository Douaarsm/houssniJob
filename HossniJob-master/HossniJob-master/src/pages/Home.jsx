import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';
import '../styles/BorderAnimation.css';
import '../styles/StatsAnimation.css';
import '../styles/ExpertiseAnimation.css';
import { lightTheme, darkTheme } from '../styles/theme';
import accueilImage from '../assets/image/accueil.jpg';
import srchumainImage from '../assets/image/srchumain.jpg';
import formationImage from '../assets/image/formation.jpg';
import managementImage from '../assets/image/management.jpg';
import coachingImage from '../assets/image/coaching.jpg';
import logo from '../assets/image/logo.png';
import JobList from '../components/JobList';

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const expertiseRefs = useRef([]);
  const theme = isDarkMode ? darkTheme : lightTheme;

  useEffect(() => {
    document.body.style.backgroundColor = theme.background;
    document.body.style.color = theme.text;
  }, [theme]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    expertiseRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      expertiseRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const expertises = [
    {
      title: 'RESSOURCES HUMAINES',
      description: 'Accompagnement stratégique et opérationnel en gestion des talents et organisation RH',
      link: '/services#rh',
      image: srchumainImage,
    },
    {
      title: 'FORMATION DIGITALE',
      description: 'Solutions de formation en ligne innovantes pour booster les compétences de vos équipes',
      link: '/services#formation',
      image: formationImage,
    },
    {
      title: 'MANAGEMENT STRATÉGIQUE',
      description: 'Conseil en pilotage stratégique, transformation et conduite du changement',
      link: '/services#management',
      image: managementImage,
    },
    {
      title: 'COACHING PROFESSIONNEL',
      description: 'Coaching individuel et collectif certifié pour accompagner la performance durable',
      link: '/services#coaching',
      image: coachingImage,
    },
  ];

  const stats = [
    { number: '15+', label: 'Années d\'expérience' },
    { number: '500+', label: 'Clients satisfaits' },
    { number: '95%', label: 'Taux de satisfaction' },
    { number: '50+', label: 'Experts certifiés' },
  ];

  const whyChooseUs = [
    {
      title: 'Expertise Confirmée',
      description: 'Une équipe d\'experts certifiés avec plus de 15 ans d\'expérience',
      icon: '🎯'
    },
    {
      title: 'Solutions Sur Mesure',
      description: 'Des approches personnalisées adaptées à vos besoins spécifiques',
      icon: '⚡'
    },
    {
      title: 'Innovation Continue',
      description: 'Des méthodes et outils innovants pour rester à la pointe',
      icon: '🚀'
    },
    {
      title: 'Accompagnement Global',
      description: 'Un suivi complet de vos projets du début à la fin',
      icon: '🤝'
    }
  ];

  const navLinkStyle = {
    color: theme.primary,
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '1.1rem',
    padding: '8px 15px',
    borderRadius: '20px',
    transition: 'all 0.3s ease'
  };

  const buttonStyle = {
    display: 'inline-block',
    padding: '12px 30px',
    backgroundColor: theme.button.background,
    color: theme.button.text,
    textDecoration: 'none',
    borderRadius: '30px',
    transition: 'all 0.3s ease',
    border: `2px solid ${theme.button.border}`,
    fontWeight: '600',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
    fontSize: '0.9rem',
    boxShadow: `0 4px 15px ${theme.shadow}`
  };

  return (
    <div style={{ backgroundColor: theme.background, color: theme.text }}>
      <div className="top"></div>
      
      {/* Navbar */}
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 30px',
        backgroundColor: theme.navBackground,
        boxShadow: `0 2px 8px ${theme.shadow}`,
        position: 'fixed',
        top: '10px',
        width: '100%',
        zIndex: 1000
      }}>
        <img src={logo} alt="Logo" style={{ height: '50px' }} />
        <div style={{ 
          display: 'flex', 
          gap: '30px',
          alignItems: 'center'
        }}>
          {['/', '/services', '/about', '/contact'].map((path, index) => (
            <Link 
              key={index}
              to={path}
              style={navLinkStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme.hoverBackground;
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {['Accueil', 'Services', 'À propos', 'Contact'][index]}
            </Link>
          ))}
          <button
            onClick={toggleDarkMode}
            style={{
              ...buttonStyle,
              padding: '8px 15px',
              fontSize: '0.9rem',
              cursor: 'pointer'
            }}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero fade-in" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${accueilImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '100px 0',
        textAlign: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '70px'
      }}>
        <div className="container">
          <h1 className="slide-down">
            Bienvenue chez HoussniJob
          </h1>
          <p className="slide-up" style={{ 
            fontSize: '1.4rem', 
            marginBottom: '40px',
            maxWidth: '800px',
            margin: '0 auto 40px',
            lineHeight: '1.6'
          }}>
            Cabinet de Conseil en Ressources Humaines, Formation Digitale, Management Stratégique et Coaching Professionnel Certifié
          </p>
          <div className="scale-in">
            <Link to="/services" style={{
              ...buttonStyle,
              padding: '15px 40px',
              fontSize: '1.1rem',
              backgroundColor: theme.button.background,
              color: theme.button.text,
              border: `2px solid ${theme.button.border}`
            }}>
              Découvrir nos expertises
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ 
        padding: '80px 0',
        backgroundColor: '#f8f9fa'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '30px',
            textAlign: 'center'
          }}>
            {stats.map((stat, index) => (
              <div key={index} className="stats-card fade-in">
                <div className="stats-number">{stat.number}</div>
                <div className="stats-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertises Section */}
      <section style={{ padding: '100px 0', background: '#223' }}>
        <div className="container">
          <h2 className="fade-in" style={{ 
            textAlign: 'center', 
            marginBottom: '60px',
            fontSize: '2.5rem',
            fontWeight: '700',
            color: 'white'
          }}>
            Nos Domaines d'Expertise
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '30px'
          }}>
            {expertises.map((expertise, index) => (
              <div 
                key={index} 
                ref={el => expertiseRefs.current[index] = el}
                className="expertise-card"
                style={{
                  position: 'relative',
                  height: '400px',
                  overflow: 'hidden',
                  backgroundColor: '#223',
                  color: 'white',
                  borderRadius: '15px',
                  padding: '20px',
                  transitionDelay: `${index * 0.2}s`
                }}
              >
                <div style={{
                  position: 'relative',
                  zIndex: 1,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center'
                }}>
                  <img src={expertise.image} alt={expertise.title} style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '10px',
                    marginBottom: '20px'
                  }} />
                  <h3 style={{
                    fontSize: '1.5rem',
                    marginBottom: '10px',
                    color: '#fff'
                  }}>{expertise.title}</h3>
                  <p style={{
                    fontSize: '1rem',
                    color: '#ddd',
                    marginBottom: '20px'
                  }}>{expertise.description}</p>
                  <Link to={expertise.link} style={{
                    backgroundColor: 'rgba(0, 123, 255, 0.2)',
                    color: '#fff',
                    padding: '10px 20px',
                    borderRadius: '20px',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(0, 123, 255, 0.5)'
                  }}>
                    En savoir plus
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section style={{ 
        padding: '100px 0',
        backgroundColor: '#223'
      }}>
        <div className="container">
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '60px',
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#fff'
          }}>
            Pourquoi Nous Choisir ?
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px'
          }}>
            {whyChooseUs.map((item, index) => (
              <aside key={index} 
                className="animated-border"
                style={{
                  position: 'relative',
                  padding: '30px',
                  backgroundColor: '#223',
                  transition: 'transform 0.3s ease',
                  color: 'white'
                }}
              >
                <div className="content" style={{
                  position: 'relative',
                  zIndex: 1
                }}>
                  <div style={{
                    fontSize: '3rem',
                    marginBottom: '20px',
                    textAlign: 'center'
                  }}>{item.icon}</div>
                  <h3 className="fluid" style={{
                    fontSize: '1.5rem',
                    marginBottom: '15px',
                    color: '#fff'
                  }}>{item.title}</h3>
                  <p className="fluid" style={{
                    color: '#ddd',
                    lineHeight: '1.6'
                  }}>{item.description}</p>
                </div>
              </aside>
            ))}
          </div>
        </div>
      </section>

      {/* Job List Section - Nouvelle section ajoutée */}
      <section style={{ 
        padding: '80px 0',
        backgroundColor: theme.background
      }}>
        <div className="container">
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '40px',
            fontSize: '2.5rem',
            fontWeight: '700',
            color: theme.text
          }}>
            Nos Offres d'Emploi
          </h2>
          <JobList />
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ 
        padding: '80px 0',
        backgroundColor: theme.primary,
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{ 
            fontSize: '2.5rem',
            marginBottom: '20px',
            fontWeight: '700'
          }}>
            Prêt à Transformer Votre Entreprise ?
          </h2>
          <p style={{ 
            fontSize: '1.2rem',
            marginBottom: '40px',
            maxWidth: '600px',
            margin: '0 auto 40px'
          }}>
            Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir comment nous pouvons vous aider.
          </p>
          <Link to="/contact" style={{
            ...buttonStyle,
            padding: '15px 40px',
            fontSize: '1.1rem',
            backgroundColor: 'white',
            color: theme.primary,
            border: '2px solid white'
          }}>
            Nous Contacter
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

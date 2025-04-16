import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';

const Footer = () => {
  const footerLinkStyle = {
    color: '#ffffff',
    textDecoration: 'none',
    display: 'block',
    padding: '8px 0',
    transition: 'all 0.3s ease',
    fontSize: '1rem',
    fontWeight: '500',
    position: 'relative',
    marginBottom: '5px'
  };

  const footerHoverStyle = {
    color: '#28a745',
    transform: 'translateX(5px)'
  };

  return (
    <footer style={{
      backgroundColor: '#1e1e1e',
      color: '#ffffff',
      padding: '4rem 0 2rem',
      marginTop: 'auto'
    }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          <div>
            <h3 style={{ 
              color: '#28a745',
              fontSize: '1.5rem',
              marginBottom: '1rem',
              fontWeight: '600'
            }}>HoussniJob</h3>
            <p style={{ 
              color: '#b0b0b0',
              lineHeight: '1.6',
              maxWidth: '300px'
            }}>
              Votre partenaire de confiance pour des services professionnels adaptés à vos besoins en Ressources Humaines, Formation Digitale, Management Stratégique et Coaching Professionnel.
            </p>
          </div>
          <div>
            <h4 style={{ 
              color: '#ffffff',
              fontSize: '1.2rem',
              marginBottom: '1.5rem',
              fontWeight: '600'
            }}>Liens rapides</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                { path: '/', label: 'Accueil' },
                { path: '/services', label: 'Services' },
                { path: '/about', label: 'À propos' },
                { path: '/contact', label: 'Contact' }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    style={footerLinkStyle}
                    onMouseEnter={(e) => {
                      Object.assign(e.currentTarget.style, footerHoverStyle);
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#ffffff';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ 
              color: '#ffffff',
              fontSize: '1.2rem',
              marginBottom: '1.5rem',
              fontWeight: '600'
            }}>Contact</h4>
            <div style={{ color: '#b0b0b0' }}>
              <p style={{ marginBottom: '0.5rem' }}>
                <span style={{ color: '#28a745', marginRight: '0.5rem' }}>📧</span>
                contact@houssnijob.com
              </p>
              <p>
                <span style={{ color: '#28a745', marginRight: '0.5rem' }}>📞</span>
                +212 5 20 456 297
              </p>
            </div>
          </div>
        </div>
        <div style={{ 
          marginTop: '2rem', 
          textAlign: 'center',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255,255,255,0.1)'
        }}>
          <p style={{ color: '#b0b0b0' }}>
            &copy; {new Date().getFullYear()} HoussniJob. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

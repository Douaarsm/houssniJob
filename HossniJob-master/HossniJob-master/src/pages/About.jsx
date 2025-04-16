import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title fade-in">À propos de HousniJob</h1>

      <section className="history-section slide-in-left">
        <h2 className="section-title">Notre Histoire</h2>
        <p className="history-text">
          Fondé en 2024, HousniJob est un cabinet de conseil spécialisé en ressources humaines, formation digitale, management stratégique et coaching professionnel, certifié par l'Académie canadienne. Notre mission est d'intégrer les nouvelles technologies dans les stratégies des entreprises pour optimiser leur performance et leur croissance.
        </p>
        <p className="history-text">
          Nous opérons en Afrique en pilotant et en accompagnant l'évolution des entreprises, en répondant à leurs besoins en matière de maîtrise des ressources et en garantissant leur autonomie.
        </p>
      </section>

      <section className="values-section">
        <h2 className="section-title slide-in-left">Nos Valeurs</h2>
        <div className="values-grid">
          {[
            {
              title: 'Expertise',
              desc: 'Une expertise pointue en conseil, formation et coaching pour des solutions adaptées.',
              icon: '🎯'
            },
            {
              title: 'Engagement',
              desc: 'Un engagement total pour mener à bien les missions qui nous sont confiées.',
              icon: '🤝'
            },
            {
              title: 'Transformation',
              desc: "Des stratégies de transformation basées sur des plans d'actions pratiques et réalisables.",
              icon: '🚀'
            }
          ].map((item, i) => (
            <div
              key={i}
              className="value-card slide-up"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>
                {item.icon}
              </div>
              <h3 className="value-title">{item.title}</h3>
              <p className="value-description">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="join-section fade-in">
        <h2 className="join-title">Rejoignez notre équipe</h2>
        <p className="join-description">
          Vous souhaitez faire partie de notre aventure ? Nous recrutons des professionnels passionnés et motivés pour accompagner nos clients dans leur transformation.
        </p>
        <Link to="/contact" className="join-button">
          Postuler
        </Link>
      </section>
    </div>
  );
};

export default About;

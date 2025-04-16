import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';
import '../styles/Services.css';

const Services = () => {
  const services = [
    {
      id: 'consulting',
      title: 'Consulting',
      description: "Accompagnement stratégique des entreprises dans l'optimisation de leur gestion RH et leur transformation managériale.",
      details: [
        'Audit organisationnel et RH',
        'Conseil en stratégie de développement',
        'Conduite du changement',
        'Optimisation des processus internes'
      ]
    },
    {
      id: 'recrutement',
      title: 'Recrutement',
      description: 'Solutions de recrutement sur mesure pour identifier et intégrer les meilleurs talents.',
      details: [
        "Rédaction et diffusion d'annonces",
        'Sourcing et présélection de candidats',
        'Entretiens et évaluations',
        'Suivi post-intégration'
      ]
    },
    {
      id: 'formation',
      title: 'Formation',
      description: 'Formations digitales et présentielles pour renforcer les compétences clés en entreprise.',
      details: [
        'E-learning interactif',
        'Formation en soft skills',
        'Formations techniques personnalisées',
        'Certification et suivi des acquis'
      ]
    },
    {
      id: 'coaching',
      title: 'Coaching Professionnel',
      description: 'Coaching individuel ou collectif pour accompagner le développement personnel et professionnel.',
      details: [
        'Coaching de dirigeants',
        "Coaching d'équipes",
        'Préparation au changement',
        'Gestion du stress et du leadership'
      ]
    }
  ];

  return (
    <div className="services-container">
      <h1 className="services-title fade-in">Nos Services</h1>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={`service-card slide-up`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="service-content">
              <h2 className="service-title">{service.title}</h2>
              <p className="service-description">{service.description}</p>
              
              <div className="service-details">
                <h3>Détails de nos prestations</h3>
                <ul className="service-details-list">
                  {service.details.map((detail, index) => (
                    <li key={index} className="service-detail-item">
                      <i className="fas fa-check-circle"></i>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              <Link to="/contact" className="btn-primary service-btn">
                Demander un devis
              </Link>
            </div>
          </section>
        ))}
      </div>

      <section className="cta-section fade-in">
        <h2 className="cta-title">Vous avez un besoin spécifique ?</h2>
        <p className="cta-description">
          Contactez-nous pour une solution sur mesure adaptée à vos enjeux
        </p>
        <Link to="/contact" className="btn-primary">
          Nous contacter
        </Link>
      </section>
    </div>
  );
};

export default Services;

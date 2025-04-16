import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/BorderAnimation.css';

const JobList = () => {
  const [filter, setFilter] = useState('all');

  const jobs = [
    {
      id: 1,
      title: 'Responsable RH',
      location: 'Casablanca',
      type: 'CDI',
      category: 'RH',
      description: 'Nous recherchons un(e) Responsable RH expérimenté(e) pour gérer l\'ensemble des processus RH de notre entreprise.',
      requirements: [
        'Minimum 5 ans d\'expérience en RH',
        'Master en RH ou équivalent',
        'Excellentes compétences en communication',
        'Maîtrise des outils SIRH'
      ],
      date: '2024-03-15'
    },
    {
      id: 2,
      title: 'Formateur Digital Learning',
      location: 'Rabat',
      type: 'CDI',
      category: 'Formation',
      description: 'Création et animation de formations digitales innovantes pour nos clients.',
      requirements: [
        'Expérience en création de contenus e-learning',
        'Maîtrise des outils de création digitale',
        'Excellentes capacités pédagogiques',
        'Bilingue Français/Arabe'
      ],
      date: '2024-03-14'
    },
    {
      id: 3,
      title: 'Consultant en Management',
      location: 'Tanger',
      type: 'CDI',
      category: 'Conseil',
      description: 'Accompagnement des entreprises dans leur transformation organisationnelle et managériale.',
      requirements: [
        'MBA ou diplôme équivalent',
        '7+ ans d\'expérience en conseil',
        'Expertise en gestion du changement',
        'Capacité à gérer des projets complexes'
      ],
      date: '2024-03-13'
    },
    {
      id: 4,
      title: 'Coach Professionnel Certifié',
      location: 'Marrakech',
      type: 'Freelance',
      category: 'Coaching',
      description: 'Accompagnement individuel et collectif des dirigeants et managers.',
      requirements: [
        'Certification en coaching professionnelle',
        'Minimum 3 ans d\'expérience en coaching',
        'Expertise en développement leadership',
        'Approche multiculturelle'
      ],
      date: '2024-03-12'
    }
  ];

  const filteredJobs = filter === 'all' ? jobs : jobs.filter(job => job.category === filter);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      {/* Filtres */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '15px',
        marginBottom: '30px'
      }}>
        {['all', 'RH', 'Formation', 'Conseil', 'Coaching'].map(category => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            style={{
              padding: '8px 16px',
              borderRadius: '20px',
              border: 'none',
              backgroundColor: filter === category ? '#007bff' : '#f0f0f0',
              color: filter === category ? 'white' : '#333',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontWeight: filter === category ? '600' : '400'
            }}
          >
            {category === 'all' ? 'Tous les postes' : category}
          </button>
        ))}
      </div>

      {/* Liste des offres */}
      <div style={{
        display: 'grid',
        gap: '20px',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))'
      }}>
        {filteredJobs.map(job => (
          <div
            key={job.id}
            className="animated-border"
            style={{
              backgroundColor: '#223',
              borderRadius: '10px',
              padding: '20px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease',
              cursor: 'pointer',
              color: 'white'
            }}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'start',
              marginBottom: '15px'
            }}>
              <h3 style={{
                margin: '0',
                fontSize: '1.2rem',
                color: '#fff'
              }}>{job.title}</h3>
              <span style={{
                backgroundColor: 'rgba(0, 123, 255, 0.2)',
                color: '#fff',
                padding: '4px 8px',
                borderRadius: '15px',
                fontSize: '0.8rem'
              }}>{job.type}</span>
            </div>

            <div style={{
              display: 'flex',
              gap: '10px',
              marginBottom: '15px',
              color: '#aaa',
              fontSize: '0.9rem'
            }}>
              <span>📍 {job.location}</span>
              <span>🏢 {job.category}</span>
            </div>

            <p style={{
              margin: '0 0 15px 0',
              color: '#ddd',
              fontSize: '0.95rem',
              lineHeight: '1.5'
            }}>{job.description}</p>

            <div style={{
              borderTop: '1px solid rgba(255,255,255,0.1)',
              paddingTop: '15px',
              marginTop: '15px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span style={{
                fontSize: '0.85rem',
                color: '#aaa'
              }}>
                Publié le {new Date(job.date).toLocaleDateString('fr-FR')}
              </span>
              <Link
                to={`/jobs/${job.id}`}
                style={{
                  backgroundColor: 'rgba(0, 123, 255, 0.2)',
                  color: '#fff',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(0, 123, 255, 0.5)'
                }}
              >
                Postuler
              </Link>
            </div>
          </div>
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: '40px',
          color: '#666'
        }}>
          Aucune offre d'emploi disponible dans cette catégorie pour le moment.
        </div>
      )}
    </div>
  );
};

export default JobList;

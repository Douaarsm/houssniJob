import React, { useState, useEffect } from 'react';
import '../styles/main.css';

const AdminPanel = () => {
  const [appointments, setAppointments] = useState([]);
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({
    name: '',
    description: '',
    price: '',
    duration: ''
  });

  // Fonction pour charger les rendez-vous depuis l'API
  const loadAppointments = async () => {
    try {
      // Ici, vous devrez implémenter l'appel à votre API
      // Pour l'instant, nous utilisons des données de test
      const mockAppointments = [
        {
          id: 1,
          clientName: 'Douaa Rouissam',
          service: 'Nettoyage',
          date: '2024-04-15',
          time: '14:00',
          status: 'confirmé'
        },
        {
          id: 2,
          clientName: 'Marie Martin',
          service: 'Jardinage',
          date: '2024-04-16',
          time: '10:00',
          status: 'en attente'
        }
      ];
      setAppointments(mockAppointments);
    } catch (error) {
      console.error('Erreur lors du chargement des rendez-vous:', error);
    }
  };

  // Fonction pour charger les services depuis l'API
  const loadServices = async () => {
    try {
      // Ici, vous devrez implémenter l'appel à votre API
      // Pour l'instant, nous utilisons des données de test
      const mockServices = [
        {
          id: 1,
          name: 'Nettoyage',
          description: 'Service de nettoyage professionnel',
          price: '25€/heure',
          duration: '2 heures minimum'
        },
        {
          id: 2,
          name: 'Jardinage',
          description: 'Entretien et aménagement de jardin',
          price: '30€/heure',
          duration: '2 heures minimum'
        }
      ];
      setServices(mockServices);
    } catch (error) {
      console.error('Erreur lors du chargement des services:', error);
    }
  };

  useEffect(() => {
    loadAppointments();
    loadServices();
  }, []);

  const handleServiceChange = (e) => {
    const { name, value } = e.target;
    setNewService(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddService = (e) => {
    e.preventDefault();
    // Ici, vous devrez implémenter l'appel à votre API pour ajouter un service
    console.log('Nouveau service:', newService);
    setServices([...services, { ...newService, id: services.length + 1 }]);
    setNewService({ name: '', description: '', price: '', duration: '' });
  };

  const handleAppointmentStatusChange = (id, newStatus) => {
    // Ici, vous devrez implémenter l'appel à votre API pour mettre à jour le statut
    setAppointments(appointments.map(appointment =>
      appointment.id === id ? { ...appointment, status: newStatus } : appointment
    ));
  };

  return (
    <div className="container admin-panel">
      <h1>Panneau d'administration</h1>

      <section className="admin-section">
        <h2>Rendez-vous</h2>
        <div className="appointments-list">
          {appointments.map(appointment => (
            <div key={appointment.id} className="appointment-card">
              <div className="appointment-info">
                <h3>{appointment.clientName}</h3>
                <p>Service: {appointment.service}</p>
                <p>Date: {appointment.date} à {appointment.time}</p>
                <p>Statut: {appointment.status}</p>
              </div>
              <div className="appointment-actions">
                <select
                  value={appointment.status}
                  onChange={(e) => handleAppointmentStatusChange(appointment.id, e.target.value)}
                >
                  <option value="en attente">En attente</option>
                  <option value="confirmé">Confirmé</option>
                  <option value="annulé">Annulé</option>
                  <option value="terminé">Terminé</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="admin-section">
        <h2>Services</h2>
        <div className="services-list">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <p>Prix: {service.price}</p>
              <p>Durée: {service.duration}</p>
            </div>
          ))}
        </div>

        <form onSubmit={handleAddService} className="add-service-form">
          <h3>Ajouter un nouveau service</h3>
          <div className="form-group">
            <label htmlFor="name">Nom du service</label>
            <input
              type="text"
              id="name"
              name="name"
              value={newService.name}
              onChange={handleServiceChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={newService.description}
              onChange={handleServiceChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Prix</label>
            <input
              type="text"
              id="price"
              name="price"
              value={newService.price}
              onChange={handleServiceChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="duration">Durée</label>
            <input
              type="text"
              id="duration"
              name="duration"
              value={newService.duration}
              onChange={handleServiceChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Ajouter le service
          </button>
        </form>
      </section>
    </div>
  );
};

export default AdminPanel; 
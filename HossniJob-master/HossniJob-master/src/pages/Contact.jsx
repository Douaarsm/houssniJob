import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');

  const availableTimeSlots = [
    '09:00', '10:00', '11:00', '14:00', '15:00', '16:00'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('sending');

    try {
      const response = await axios.post('https://api.sheetbest.com/sheets/a9fa13b8-e0de-47b4-8367-416e2d84d67a', {
        ...formData,
        appointmentDate: selectedDate,
        appointmentTime: selectedTime
      });
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setSelectedDate(null);
      setSelectedTime('');
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title fade-in">Contactez-nous</h1>
      
      <div className="contact-grid">
        <div className="contact-info slide-in-left">
          <div className="info-section">
            <h2 className="info-title">Notre Adresse</h2>
            <p className="info-subtitle">Siège Social</p>
            <p className="info-text">Technopark Route de Nouaceur<br />2ème étage<br />Casablanca 20000</p>
          </div>

          <div className="info-section">
            <h2 className="info-title">Coordonnées</h2>
            <div>
              <p className="info-subtitle">Téléphone</p>
              <p className="info-text">+212 5 20 456 297</p>
            </div>
            <div>
              <p className="info-subtitle">Email</p>
              <p className="info-text">contact@houssnijob.com</p>
            </div>
          </div>

          <div className="info-section">
            <h2 className="info-title">Heures d'Ouverture</h2>
            <p className="info-text">
              Lundi - Jeudi: 9h00 - 17h00<br />
              Vendredi: Fermé<br />
              Samedi: Fermé<br />
              Dimanche: Fermé
            </p>
          </div>
        </div>

        <div className="contact-form slide-in-right">
          <h2 className="form-title">Envoyez-nous un message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="name">Nom complet</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="phone">Téléphone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-control"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="subject">Sujet</label>
              <select
                id="subject"
                name="subject"
                className="form-control"
                value={formData.subject}
                onChange={handleInputChange}
                required
              >
                <option value="">Sélectionnez un sujet</option>
                <option value="recrutement">Recrutement</option>
                <option value="offre_emploi">Déposer une offre d'emploi</option>
                <option value="candidature">Soumettre une candidature</option>
                <option value="information">Demande d'information</option>
                <option value="rdv">Prise de rendez-vous</option>
                <option value="partenariat">Proposition de partenariat</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Date du rendez-vous</label>
              <DatePicker
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                minDate={new Date()}
                dateFormat="dd/MM/yyyy"
                placeholderText="Sélectionnez une date"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="time">Heure du rendez-vous</label>
              <select
                id="time"
                className="form-control"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                required
              >
                <option value="">Sélectionnez une heure</option>
                {availableTimeSlots.map(time => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>

            <button type="submit" className="submit-button">
              {submitStatus === 'sending' ? 'Envoi en cours...' :
               submitStatus === 'success' ? 'Message envoyé !' :
               submitStatus === 'error' ? 'Erreur - Réessayer' :
               'Envoyer le message'}
            </button>

            {submitStatus === 'success' && (
              <p className="info-text" style={{ color: '#2ecc71', marginTop: '15px', textAlign: 'center' }}>
                Votre message a été envoyé avec succès !
              </p>
            )}
            {submitStatus === 'error' && (
              <p className="info-text" style={{ color: '#e74c3c', marginTop: '15px', textAlign: 'center' }}>
                Une erreur est survenue. Veuillez réessayer.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

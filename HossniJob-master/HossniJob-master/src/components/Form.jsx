import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import '../styles/main.css';
import * as XLSX from 'xlsx';
import { getAuthClient, uploadToDrive } from '../config/googleDrive';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [appointmentDate, setAppointmentDate] = useState(null);
  const [timeSlot, setTimeSlot] = useState('');
  const [showAppointmentFields, setShowAppointmentFields] = useState(false);

  // Créneaux horaires disponibles
  const availableTimeSlots = [
    '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    // Afficher les champs de rendez-vous si "Prise de rendez-vous" est sélectionné
    if (name === 'service' && value === 'rendez-vous') {
      setShowAppointmentFields(true);
    } else if (name === 'service') {
      setShowAppointmentFields(false);
    }
  };

  const handleDateChange = (date) => {
    setAppointmentDate(date);
  };

  const handleTimeSlotChange = (e) => {
    setTimeSlot(e.target.value);
  };

  const exportToExcel = (data) => {
    const worksheet = XLSX.utils.json_to_sheet([data]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Candidats");
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    return excelBuffer;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalData = {
      ...formData,
      appointmentDate: appointmentDate ? appointmentDate.toISOString() : null,
      timeSlot,
      submissionDate: new Date().toISOString()
    };
    
    try {
      // Export to Excel
      const excelBuffer = exportToExcel(finalData);
      
      // Upload to Google Drive
      const auth = await getAuthClient();
      const fileName = `candidature_${formData.name}_${new Date().toISOString().split('T')[0]}.xlsx`;
      await uploadToDrive(auth, fileName, excelBuffer);
      
      console.log('Form submitted and saved to Google Drive:', finalData);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      setAppointmentDate(null);
      setTimeSlot('');
      setShowAppointmentFields(false);
      
      alert('Votre candidature a été enregistrée avec succès dans Google Drive !');
    } catch (error) {
      console.error('Error saving form:', error);
      alert('Une erreur est survenue lors de la sauvegarde. Veuillez réessayer.');
    }
  };

  // Fonction pour désactiver les weekends
  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  return (
    <div className="container">
      <div className="form-container" style={{
        maxWidth: '1200px',
        margin: '2rem auto',
        padding: '1.5rem',
        backgroundColor: '#ffffff',
        borderRadius: '15px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <h2 style={{
          textAlign: 'center',
          color: '#28a745',
          marginBottom: '2rem',
          fontSize: 'clamp(1.5rem, 4vw, 2rem)',
          fontWeight: '600'
        }}>Contactez-nous</h2>
        
        <form onSubmit={handleSubmit}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr',
            gap: '1.5rem',
            '@media (min-width: 768px)': {
              gridTemplateColumns: '1fr 1fr'
            }
          }}>
            <div>
              <div className="form-group">
                <label htmlFor="name" style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: '#333',
                  fontWeight: '500',
                  fontSize: 'clamp(0.9rem, 2vw, 1.1rem)'
                }}>Nom complet</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                    transition: 'all 0.3s ease'
                  }}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: '#333',
                  fontWeight: '500',
                  fontSize: 'clamp(0.9rem, 2vw, 1.1rem)'
                }}>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                    transition: 'all 0.3s ease'
                  }}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone" style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: '#333',
                  fontWeight: '500',
                  fontSize: 'clamp(0.9rem, 2vw, 1.1rem)'
                }}>Téléphone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-control"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                    transition: 'all 0.3s ease'
                  }}
                />
              </div>

              <div className="form-group">
                <label htmlFor="service" style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: '#333',
                  fontWeight: '500',
                  fontSize: 'clamp(0.9rem, 2vw, 1.1rem)'
                }}>Service</label>
                <select
                  id="service"
                  name="service"
                  className="form-control"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                    backgroundColor: '#fff',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <option value="">Sélectionnez un service</option>
                  <option value="recrutement">Recrutement</option>
                  <option value="formation">Formation</option>
                  <option value="management">Management</option>
                  <option value="coaching">Coaching</option>
                  <option value="rendez-vous">Prise de rendez-vous</option>
                </select>
              </div>
            </div>

            {showAppointmentFields && (
              <div>
                <div className="form-group" style={{ marginBottom: '2rem' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: '#333',
                    fontWeight: '500',
                    fontSize: 'clamp(0.9rem, 2vw, 1.1rem)'
                  }}>Date du rendez-vous</label>
                  <DatePicker
                    selected={appointmentDate}
                    onChange={handleDateChange}
                    minDate={new Date()}
                    filterDate={isWeekday}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Sélectionnez une date"
                    className="form-control"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #ddd',
                      borderRadius: '8px',
                      fontSize: 'clamp(0.9rem, 2vw, 1rem)'
                    }}
                  />
                </div>

                {appointmentDate && (
                  <div className="form-group">
                    <label htmlFor="timeSlot" style={{
                      display: 'block',
                      marginBottom: '0.5rem',
                      color: '#333',
                      fontWeight: '500',
                      fontSize: 'clamp(0.9rem, 2vw, 1.1rem)'
                    }}>Créneau horaire</label>
                    <select
                      id="timeSlot"
                      name="timeSlot"
                      value={timeSlot}
                      onChange={handleTimeSlotChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                        backgroundColor: '#fff',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <option value="">Sélectionnez un créneau</option>
                      {availableTimeSlots.map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="form-group" style={{ marginTop: '2rem' }}>
            <label htmlFor="message" style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: '#333',
              fontWeight: '500',
              fontSize: 'clamp(0.9rem, 2vw, 1.1rem)'
            }}>Message (optionnel)</label>
            <textarea
              id="message"
              name="message"
              className="form-control"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '8px',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                resize: 'vertical',
                transition: 'all 0.3s ease'
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              display: 'block',
              width: '100%',
              padding: 'clamp(0.75rem, 2vw, 1rem)',
              marginTop: '2rem',
              backgroundColor: '#28a745',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#218838';
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#28a745';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            {showAppointmentFields ? 'Réserver' : 'Envoyer'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;

import React, { useState } from 'react';
import '../styles/main.css';

const Calendar = ({ onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days = [];

    const firstDayOfWeek = firstDay.getDay();
    const prevMonth = new Date(year, month - 1, 0);
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      days.push({
        date: new Date(year, month - 1, prevMonth.getDate() - i),
        isCurrentMonth: false
      });
    }

    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push({
        date: new Date(year, month, i),
        isCurrentMonth: true
      });
    }

    const lastDayOfWeek = lastDay.getDay();
    for (let i = 1; i <= 6 - lastDayOfWeek; i++) {
      days.push({
        date: new Date(year, month + 1, i),
        isCurrentMonth: false
      });
    }

    return days;
  };

  const isDateAvailable = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date >= today;
  };

  const handleDateSelect = (date) => {
    if (isDateAvailable(date)) {
      setSelectedDate(date);
      onDateSelect(date);
    }
  };

  const days = getDaysInMonth(currentMonth);

  return (
    <div style={{
      backgroundColor: '#fff',
      borderRadius: '15px',
      padding: '2rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      width: '100%',
      maxWidth: '500px',
      margin: '0 auto'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '2rem',
        paddingBottom: '1rem',
        borderBottom: '2px solid #f0f0f0'
      }}>
        <button
          onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
          style={{
            padding: '0.75rem 1.25rem',
            border: 'none',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1.2rem',
            color: '#333',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#e9ecef';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#f8f9fa';
          }}
        >
          &lt;
        </button>
        <h3 style={{
          margin: '0',
          color: '#333',
          fontSize: '1.5rem',
          fontWeight: '600'
        }}>
          {currentMonth.toLocaleString('fr-FR', { month: 'long', year: 'numeric' })}
        </h3>
        <button
          onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
          style={{
            padding: '0.75rem 1.25rem',
            border: 'none',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1.2rem',
            color: '#333',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#e9ecef';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#f8f9fa';
          }}
        >
          &gt;
        </button>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        gap: '0.5rem',
        marginBottom: '1rem'
      }}>
        {['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'].map(day => (
          <div
            key={day}
            style={{
              textAlign: 'center',
              padding: '0.75rem',
              fontWeight: '600',
              color: '#666',
              fontSize: '1.1rem'
            }}
          >
            {day}
          </div>
        ))}
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        gap: '0.5rem'
      }}>
        {days.map((day, index) => (
          <button
            key={index}
            onClick={() => handleDateSelect(day.date)}
            disabled={!isDateAvailable(day.date)}
            style={{
              padding: '1rem',
              border: '1px solid #ddd',
              borderRadius: '8px',
              backgroundColor: !day.isCurrentMonth ? '#f8f9fa' :
                selectedDate && day.date.toDateString() === selectedDate.toDateString() ? '#28a745' :
                isDateAvailable(day.date) ? '#fff' : '#f8f9fa',
              color: !day.isCurrentMonth ? '#999' :
                selectedDate && day.date.toDateString() === selectedDate.toDateString() ? '#fff' :
                isDateAvailable(day.date) ? '#333' : '#999',
              cursor: isDateAvailable(day.date) ? 'pointer' : 'not-allowed',
              transition: 'all 0.3s ease',
              fontSize: '1.1rem',
              fontWeight: '500',
              minHeight: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseEnter={(e) => {
              if (isDateAvailable(day.date) && day.isCurrentMonth) {
                e.currentTarget.style.backgroundColor = '#e8f5e9';
                e.currentTarget.style.transform = 'scale(1.05)';
              }
            }}
            onMouseLeave={(e) => {
              if (isDateAvailable(day.date) && day.isCurrentMonth) {
                e.currentTarget.style.backgroundColor = '#fff';
                e.currentTarget.style.transform = 'scale(1)';
              }
            }}
          >
            {day.date.getDate()}
          </button>
        ))}
      </div>

      {selectedDate && (
        <div style={{
          marginTop: '2rem',
          padding: '1rem',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <p style={{
            margin: '0',
            color: '#28a745',
            fontSize: '1.1rem',
            fontWeight: '500'
          }}>
            Date sélectionnée : {selectedDate.toLocaleDateString('fr-FR', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </div>
      )}
    </div>
  );
};

export default Calendar;

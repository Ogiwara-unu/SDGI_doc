import React from 'react';
import clsx from 'clsx';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={clsx('footer', styles.customFooter)}>
      <div className={styles.topSection}>
        <div className={styles.logoSection}>
          <img src="/img/logo-blanco.png" alt="Logo CATSA" />
        </div>

        <div className={styles.infoSection}>
          <p><strong>📍 Dirección:</strong> 6.5 kilómetros sureste de la Escuela de Guardia, Liberia, Guanacaste.<br />
            <strong>Apartado Postal:</strong> 56-5000 Liberia.<br />
            <strong>📞 Teléfono:</strong> +506 2690-2500<br />
            <strong>✉️ Email:</strong> info@catsa.net<br />
            <strong>Sugerencias o Quejas:</strong> info@catsa.net</p>
        </div>

        <div className={styles.infoSection}>
          <p><strong>📍 Dirección:</strong> 125 metros sur de Teletica, Edificio Vista del Parque, 2do piso.<br />
            <strong>Apartado Postal:</strong> 10315-1000 San José<br />
            <strong>📞 Teléfono:</strong> +506 2291-2676<br />
            <strong>✉️ Email:</strong> info@catsa.net<br />
            <strong>Sugerencias o Quejas:</strong> info@catsa.net</p>
        </div>

        <div className={styles.logoSection}>
          <img src="/img/logo-esencial.png" alt="Esencial Costa Rica" />
        </div>
      </div>

      <div className={styles.bottomSection}>
        <p>Derechos Reservados © {new Date().getFullYear()} CATSA - Desarrollo Web por <a href="https://www.catsa.net/" target="_blank" rel="noopener noreferrer">CATSA S.A</a></p>
      </div>
    </footer>
  );
}

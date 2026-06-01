"use client";

import { useEffect, useState } from "react";
import styles from "./profile.module.css";

export default function Profile() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const savedAppointments =
      JSON.parse(localStorage.getItem("appointments")) || [];

    setAppointments(savedAppointments);
  }, []);

  return (
    <main className={styles.profilePage}>
      <section className={styles.header}>
        <h1 className={styles.title}>PROFILE ACCOUNT</h1>
        <p className={styles.subtitle}>Welcome to your profile!</p>
      </section>

      <section className={styles.appointmentsSection}>
        <h2 className={styles.sectionTitle}>MY APPOINTMENTS</h2>

        {appointments.length === 0 ? (
          <div className={styles.emptyAppointments}>
            <p>No appointments yet.</p>
          </div>
        ) : (

          <section className={styles.appointmentsGrid}>
            {appointments.map((appointment) => (
              <div key={appointment.id} className={styles.card}>
                <div className={styles.cardImage}></div>

                <div className={styles.cardContent}>
                  <h2 className={styles.appointmentTitle}>{appointment.serviceName}</h2>
                  <p>Date: {appointment.date}</p>
                  <p>Time: {appointment.time}</p>
                  <p>{appointment.price}</p>

                  <button
                    className={styles.adjustBtn}
                    onClick={() => handleReserve(appointment)}
                  >
                    ADJUST
                  </button>
                </div>
              </div>
            ))}
          </section>
        )}
      </section>
    </main>
  );
}
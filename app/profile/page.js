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
          <div className={styles.appointmentsGrid}>
            {appointments.map((appointment) => (
              <div key={appointment.id} className={styles.appointmentCard}>
                <h3>{appointment.serviceName}</h3>
                <p>{appointment.price}</p>
                <p>Date: {appointment.date}</p>
                <p>Time: {appointment.time}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
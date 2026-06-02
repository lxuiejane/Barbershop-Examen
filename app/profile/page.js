"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./profile.module.css";

export default function Profile() {
  const router = useRouter();

  const [appointments, setAppointments] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user exists in localStorage
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));

      const savedAppointments =
        JSON.parse(localStorage.getItem("appointments")) || [];

      setAppointments(savedAppointments);
    }

    setLoading(false);
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  // NOT LOGGED IN
  if (!user) {
    return (
      <main className={styles.profilePage}>
        <section className={styles.header}>
          <h1 className={styles.title}>PROFILE ACCOUNT</h1>

          <p className={styles.subTitle}>
            Log in or create an account to see your profile.
          </p>

          <div>
            <button className={styles.adjustBtn} onClick={() => router.push("/signin")}>
              Login
            </button>

            <button className={styles.adjustBtn} onClick={() => router.push("/signup")}>
              Create Account
            </button>
          </div>
        </section>
      </main>
    );
  }

  // LOGGED IN
  return (
    <main className={styles.profilePage}>
      <section className={styles.header}>
        <h1 className={styles.title}>PROFILE ACCOUNT</h1>

        <p className={styles.subtitle}>
          Welcome, {user.name}!
        </p>
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
                  <h2 className={styles.appointmentTitle}>
                    {appointment.serviceName}
                  </h2>

                  <p>Date: {appointment.date}</p>
                  <p>Time: {appointment.time}</p>
                  <p>{appointment.price}</p>

                  <button className={styles.adjustBtn}>
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
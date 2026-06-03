"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./profile.module.css";

export default function Profile() {
  const router = useRouter();

  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
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

  const handleAdjust = (appointment) => {
    setSelectedAppointment(appointment);
    setDate(appointment.date);
    setTime(appointment.time);
  };

  const handleSave = (e) => {
    e.preventDefault();

    const updatedAppointments = appointments.map((appointment) => {
      if (appointment.id === selectedAppointment.id) {
        return {
          ...appointment,
          date: date,
          time: time,
        };
      }

      return appointment;
    });

    setAppointments(updatedAppointments);
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));

    setSelectedAppointment(null);
    setDate("");
    setTime("");
  };

  const handleDelete = () => {
    const updatedAppointments = appointments.filter(
      (appointment) => appointment.id !== selectedAppointment.id,
    );

    setAppointments(updatedAppointments);
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));

    setSelectedAppointment(null);
    setDate("");
    setTime("");
  };

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
            <button
              className={styles.adjustBtn}
              onClick={() => router.push("/signin")}
            >
              Login
            </button>

            <button
              className={styles.adjustBtn}
              onClick={() => router.push("/signup")}
            >
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
        <div className={styles.navbarBottomBar}></div>
        <h1 className={styles.title}>PROFILE ACCOUNT</h1>
        <p className={styles.subtitle}>Welcome, {user.name}!</p>
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
                <img
                  src={appointment.image}
                  alt={appointment.serviceName}
                  className={styles.cardImage}
                />

                <div className={styles.cardContent}>
                  <h2 className={styles.appointmentTitle}>
                    {appointment.serviceName}
                  </h2>
                  <p>Date: {appointment.date}</p>
                  <p>Time: {appointment.time}</p>
                  <p>{appointment.price}</p>

                  <button
                    className={styles.adjustBtn}
                    onClick={() => handleAdjust(appointment)}
                  >
                    ADJUST
                  </button>
                </div>
              </div>
            ))}
          </section>
        )}
      </section>

      {selectedAppointment && (
        <div className={styles.bookingOverlay}>
          <form className={styles.bookingForm} onSubmit={handleSave}>
            <h2>Adjust {selectedAppointment.serviceName}</h2>

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />

            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />

            <button type="submit">SAVE CHANGES</button>

            <button type="button" onClick={handleDelete}>
              DELETE APPOINTMENT
            </button>

            <button type="button" onClick={() => setSelectedAppointment(null)}>
              CANCEL
            </button>
          </form>
        </div>
      )}
    </main>
  );
}

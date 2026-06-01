import styles from "./profile.module.css";

export default function Profile() {
  return (
    <main className={styles.profilePage}>
      <section className={styles.header}>
        <h1 className={styles.title}>PROFILE ACCOUNT</h1>
        <p className={styles.subtitle}>Welcome to your profile!</p>
      </section>

      <section className={styles.appointmentsSection}>
        <h2 className={styles.sectionTitle}>MY APPOINTMENTS</h2>

        <div className={styles.emptyAppointments}>
          <p>No appointments yet.</p>
        </div>
      </section>
    </main>
  );
}
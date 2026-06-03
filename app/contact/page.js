import styles from "./contact.module.css";

export default function Contact() {
  return (
    <main className={styles.contactPage}>
      <section className={styles.header}>
        <h1 className={styles.title}>CONTACT</h1>
        <p className={styles.subtitle}>Get in touch with us!</p>
        <div className={styles.navbarBottomBar}></div>
      </section>
      <section className={styles.contactContent}>
        <div className={styles.socials}>
          <h2>FOLLOW US ON SOCIAL MEDIA!</h2>

          <div className={styles.socialIcons}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <form className={styles.contactForm}>
          <input type="email" placeholder="e-mail address" />
          <input type="tel" placeholder="phone number" />
          <textarea placeholder="message"></textarea>

          <button type="submit">SEND</button>
        </form>
      </section>
    </main>
  );
}

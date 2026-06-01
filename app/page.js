import Image from "next/image";
import styles from "./page.module.css";

const services = [
  {
    id: 1,
    name: "Haircut",
    price: "€20 to €30",
    description: "Fresh haircut with clean styling.",
    image: "/haircut.jpg",
  },
  {
    id: 2,
    name: "Beard Trim",
    price: "€10 to €20",
    description: "Clean beard trim and shape-up.",
    image: "/beard.jpg",
  },
  {
    id: 3,
    name: "Hair + Beard",
    price: "€25 to €45",
    description: "Complete haircut and beard service.",
    image: "/hair-beard.jpg",
  },
  {
    id: 4,
    name: "Fade Cut",
    price: "€20 to €35",
    description: "Sharp fade with a clean finish.",
    image: "/fade.jpg",
  },
    {
    id: 5,
    name: "Styling",
    price: "€10 to €20",
    description: "Hair styling for any occasion.",
    image: "/styling.jpg",
  },
  {
    id: 6,
    name: "Kids Cut",
    price: "€10 to €20",
    description: "Simple haircut for children.",
    image: "/kids.jpg",
  },

];

export default function Home() {
  return (
    <main className={styles.container}>
      
      <section className={styles.header}>
        <h1 className={styles.title}>SERVICES</h1>
        <p className={styles.subtitle}>Choose from our wide range of services</p>
      </section>

      <section className={styles.servicesGrid}>
        {services.map((service) => (
          <div key={service.id} className={styles.card}>
            <div className={styles.cardImage}></div>

            <div className={styles.cardContent}>
              <p className={styles.price}>{service.price}</p>
              <h2 className={styles.serviceTitle}>{service.name}</h2>
              <p className={styles.description}>{service.description}</p>
              <button className={styles.reserveBtn}>RESERVE</button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

const services = [
  {
    id: 1,
    name: "Haircut",
    price: "€20 to €30",
    description: "Fresh haircut with clean styling.",
    image: "/Haircut.png",
  },
  {
    id: 2,
    name: "Beard Trim",
    price: "€10 to €20",
    description: "Clean beard trim and shape-up.",
    image: "/Beardtrim.png",
  },
  {
    id: 3,
    name: "Hair + Beard",
    price: "€25 to €45",
    description: "Complete haircut and beard service.",
    image: "/Hair+beard.png",
  },
  {
    id: 4,
    name: "Fade Cut",
    price: "€20 to €35",
    description: "Sharp fade with a clean finish.",
    image: "/Fadecut.png",
  },
  {
    id: 5,
    name: "Styling",
    price: "€10 to €20",
    description: "Hair styling for any occasion.",
    image: "/Styling.png",
  },
  {
    id: 6,
    name: "Kids Cut",
    price: "€10 to €20",
    description: "Simple haircut for children.",
    image: "/Kidscut.png",
  },

];

export default function Home() {
  const router = useRouter();

  const [selectedService, setSelectedService] = useState(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [user, setUser] = useState(null);

  // Check if user exists in localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleReserve = (service) => {
    setSelectedService(service);
  };

  const handleBooking = (e) => {
    e.preventDefault();

    const newAppointment = {
      id: Date.now(),
      serviceName: selectedService.name,
      price: selectedService.price,
      date: date,
      time: time,
      image: selectedService.image,
    };

    const savedAppointments =
      JSON.parse(localStorage.getItem("appointments")) || [];

    savedAppointments.push(newAppointment);

    localStorage.setItem("appointments", JSON.stringify(savedAppointments));

    setSelectedService(null);
    setDate("");
    setTime("");

    alert("Appointment booked!");
  };


  return (
    <main className={styles.container}>
      <section className={styles.header}>
        <h1 className={styles.title}>SERVICES</h1>
        <p className={styles.subtitle}>Choose from our wide range of services</p>
      </section>

      <section className={styles.servicesGrid}>
        {services.map((service) => (
          <div key={service.id} className={styles.card}>
            <img
              src={service.image}
              alt={service.name}
              className={styles.cardImage}
            />

            <div className={styles.cardContent}>
              <p className={styles.price}>{service.price}</p>
              <h2 className={styles.serviceTitle}>{service.name}</h2>
              <p className={styles.description}>{service.description}</p>

              <button
                className={styles.reserveBtn}
                onClick={() => handleReserve(service)}
              >
                RESERVE
              </button>
            </div>
          </div>
        ))}
      </section>

      {selectedService && (
        <div className={styles.bookingOverlay}>
          <div className={styles.bookingForm}>
            {!user ? (
              <>
                <h2>Login required</h2>
                <p>You need to be logged in to book an appointment.</p>

                <button type="button" onClick={() => router.push("/signin")}>
                  LOGIN
                </button>

                <button type="button" onClick={() => router.push("/signup")}>
                  CREATE ACCOUNT
                </button>

                <button type="button" onClick={() => setSelectedService(null)}>
                  CANCEL
                </button>
              </>
            ) : (
              <form onSubmit={handleBooking} className={styles.bookingInnerForm}>
                <h2>Book {selectedService.name}</h2>

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

                <button type="submit">
                  BOOK APPOINTMENT
                </button>

                <button type="button" onClick={() => setSelectedService(null)}>
                  CANCEL
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
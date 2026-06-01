import RegisterForm from "../../components/RegisterForm";
import styles from "./signup.module.css";

export default function SignupPage() {
  return (
    <main className={styles.registerPage}>
      <RegisterForm />
    </main>
  );
}

import LoginForm from "../../components/LoginForm";
import styles from "./signin.module.css";

export default function SigninPage() {
  return (
    <main className={styles.loginPage}>
      <LoginForm />
    </main>
  );
}
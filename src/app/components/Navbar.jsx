import Link from "next/link"
import styles from "@/app/styles/navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={styles.head}>
        <div className={styles.logo}>
          <Link href="/">
            <button>TODO APP</button>
          </Link>
        </div>
        <div className={styles.buttons}>
            <Link href="/Signup">
                <button>Signup</button>
            </Link>
            <Link href="/Signin">
                <button>Signin</button>
            </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar
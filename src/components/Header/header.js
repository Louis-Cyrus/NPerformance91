import Link from "next/link";
import styles from "./header.module.css";

export default function Header(){
    return (
        <div className={styles.headerApp}>
            <header className={styles.header}>
                {/* Titre du site et lien vers la page d'acceuil */}
                <Link href="/" className={styles.headerTitle}>
                    <span>
                        <h1>N Performance 91</h1>
                    </span>
                </Link>

                <nav className={styles.headerNav}> 
                <ul className={styles.headerNavList}>
                    <li className={styles.headerNavItem}>
                        <Link href="/tarifs" className={styles.headerNavLink}>
                            <span>Tarifs</span>
                        </Link>
                    </li>

                    <li className={styles.headerNavItem}>
                        <Link href="/contact" className={styles.headerNavLink}>
                            <span>Contact</span>
                        </Link>
                    </li>
                </ul>
            </nav>
            </header>
        </div>
    )
}
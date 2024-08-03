import Link from "next/link";
import styles from "/styles/Header.module.css";
import linkStyles from "/styles/Link.module.css";

export default function Header() {
    return (
        <>
            <ul className={styles.menu}>
                <li><Link className={linkStyles.link} href="/">Home</Link></li>
                <li><Link className={linkStyles.link} href="/blog">Blog</Link></li>
                <li><Link className={linkStyles.link} href="/contacts">Contacts</Link></li>
                <li><Link className={linkStyles.link} href="/todolist">To do list</Link></li>
            </ul>
        </>
    );
}
import styles from "../styles/Title.module.css";

export default function Title({content}) {
    return (
        <>
            <h1 className={styles.title}>{content}</h1>
        </>
    )
}
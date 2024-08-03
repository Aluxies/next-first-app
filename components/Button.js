import styles from "/styles/Button.module.css";

export default function Button({onClick, value}) {
    return (
        <>
            <button className={styles.button} onClick={onClick}>
                {value}
            </button>
        </>
    )
}
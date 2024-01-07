import styles from "./footer.module.css"

const Footer = () => {
    return (
        <div className={`${styles.container} p-4`}>
            <div className={styles.logo}>portofolio</div>
            <div className={styles.text}>
                This Website made by Muhammad Adi Nurhidayat using nextJS.
            </div>
        </div>
    )
}

export default Footer
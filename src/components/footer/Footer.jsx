import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>BIOXCELERATE</div>
      <div className={styles.text}>
        BIOXCELERATE  © All rights reserved.
      </div>
    </div>
  )
}

export default Footer

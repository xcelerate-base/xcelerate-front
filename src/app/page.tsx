import Image from 'next/image'
import styles from "./home.module.css"

export default function Home() {
  return <div>
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Empower Minds, Transforming Notes – Your Gateway to Educational Excellence!</h1>
        <p className={styles.desc}>
        Empower your education journey with our premium notes. Elevate your learning experience effortlessly. Your trusted source for high-quality study materials, designed to guide you towards academic excellence and success.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Notes</button>
          <button className={styles.button}>Guidance</button>
        </div>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>1 K+</h1>
            <p>Notes downloads</p>
          </div>
          <div className={styles.box}>
            <h1>200+</h1>
            <p>meticulously crafted notes for all subject</p>
          </div>
          <div className={styles.box}>
            <h1>3 K+</h1>
            <p>enriching educational materials</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/homeimg.gif" alt="" fill className={styles.heroImg}/>
      </div>
    </div>
    {/* <div>
      <div><h4>SOURCE</h4></div>
    </div> */}

  </div>
}

import Image from 'next/image'
import styles from "./home.module.css"
import Link from 'next/link'

export default function Home() {
  return <div>
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Welcome to <p className={styles.word}>BIOXCELERATE</p> - Your Ultimate Learning Hub!</h1>
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
    <div>
      <div className={styles.headertag}><h4>Our services</h4></div>
      <div className={styles.sub_container}>
        <div className={styles.sub_container_box}>
          <h3>Notes</h3>
          <p>Lessons on design that cover the most recent developments.</p>
          <Link href="/">Learn More</Link>
        </div>
        <div className={styles.sub_container_box}>
          <h3>Guidance</h3>
          <p>Lessons on design that cover the most recent developments.</p>
          <Link href="/">Learn More</Link>
        </div>
        <div className={styles.sub_container_box}>
          <h3>Blogs</h3>
          <p>Lessons on design that cover the most recent developments.</p>
          <Link href="/">Learn More</Link>
        </div>
      </div>
    </div>

  </div>
}

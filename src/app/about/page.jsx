import Image from 'next/image'
import React from 'react'
import styles from "./about.module.css"

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Us</h2>
        <h1 className={styles.title}>
        Nurturing Minds, Empowering Futures – Your Gateway to Educational Excellence with bioxcelerate.
        </h1>
        <p className={styles.desc}>
        Welcome to bioxcelerate, where education meets innovation. We are a dedicated team passionate about fostering a conducive learning environment for students worldwide.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>250+</h1>
            <p>Collaboration</p>
          </div>
          <div className={styles.box}>
            <h1>1 K+</h1>
            <p>Happy students</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/aboutimg.gif"
          alt="About Image"
          fill
          className={styles.img}
        />
      </div>
    </div>
  )
}

export default AboutPage

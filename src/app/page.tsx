import Image from 'next/image';
import Link from 'next/link';
import { CgNotes, CgWebsite } from "react-icons/cg";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaChalkboardTeacher } from "react-icons/fa";
import styles from "./home.module.css";
import { TiStar } from "react-icons/ti";

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
    {/* container-2 */}
    <div>
      <div className={styles.headertag}><h4>Our Services</h4></div>
      <div className={styles.sub_container}>
        <div className={styles.sub_container_box}>
          <h3><CgNotes />Educational Notes</h3>
          <p>Comprehensive lessons on design covering the latest developments in the field.</p>
          <Link href="/" className={styles.sub_container_link}>Explore Notes<IoIosArrowRoundForward /></Link>
        </div>
        <div className={styles.sub_container_box}>
          <h3><FaChalkboardTeacher />Expert Guidance</h3>
          <p>Get personalized guidance on design from our experienced mentors.</p>
          <Link href="/" className={styles.sub_container_link}>Get Guidance<IoIosArrowRoundForward /></Link>
        </div>
        <div className={styles.sub_container_box}>
          <h3><CgWebsite />Insightful Blogs</h3>
          <p>Stay updated with our blogs, covering the most recent developments in design.</p>
          <Link href="/" className={styles.sub_container_link}>Read Blogs<IoIosArrowRoundForward /></Link>
        </div>
      </div>
    </div>
    {/* container-3 */}
    <div>
      <div className={styles.headertag}><h4>Explore Our Notes</h4></div>
      <div className={styles.notes_container}>
        <div className={styles.sub_notes_container}>
          <h4>Biology</h4>
          <Link href="/"><Image src="/subject3.gif" alt="" width={200} height={100} /></Link>
        </div>
        <div className={styles.sub_notes_container}>
          <h4>Chemistry</h4>
          <Link href="/"><Image src="/subject4.gif" alt="" width={200} height={100} /></Link>
        </div>
        <div className={styles.sub_notes_container}>
          <h4>Physics</h4>
          <Link href="/"><Image src="/subject2.gif" alt="" width={200} height={100} /></Link>
        </div>
      </div>
    </div>
    {/* container-4 */}
    <div className={styles.container_4}>
      <div className={styles.headertag_4}><h4>What Sets Us Apart?</h4></div>
      <div className={styles.sub_container_4}>
        <div className={styles.sub_container_box_4}>
          <h3><CgNotes />Diverse Learning Resources</h3>
          <p>Explore a vast repository of blogs and notes curated by experts in various fields. From in-depth articles to comprehensive study materials, we've got you covered.</p>
        </div>
        <div className={styles.sub_container_box_4}>
          <h3><FaChalkboardTeacher />Stay Updated</h3>
          <p>Our dynamic blog section keeps you informed about the latest trends in education, technology, and beyond. Discover thought-provoking articles written by industry professionals and thought leaders.</p>
        </div>
        <div className={styles.sub_container_box_4}>
          <h3><CgWebsite />Interactive Learning</h3>
          <p>Immerse yourself in interactive learning experiences. Our platform goes beyond static content, offering engaging multimedia resources to enhance your understanding of complex topics.</p>
        </div>
      </div>
    </div>
    {/* container-5 testimonials */}
    <div className={styles.testimonial_container}>
      <div className={styles.testimonial_sub_container}>
        <div className={styles.testimonial_section_header}>
          <h2>what our students say</h2>
        </div>
        <div className={styles.testimonial_content}>
          <div className="testimonial-slder js-testimonial-slider">
            <div className={styles.sub_container_4}>
              <div className={styles.testimonial_item}>
                <div className={styles.testimonial_info}>
                  <Image src="/user_piv_2.avif" alt="" width={200} height={100} />
                  <div className={styles.testimonial_text_box}>
                    <h3 className={styles.testimonial_user_name}>Amar</h3>
                    <span className={styles.testimonial_user_job}>Student</span>
                  </div>
                </div>
                <p>The teacher's notes were like a roadmap, guiding us through the subject and making learning enjoyable.</p>
              </div>
              <div className={styles.testimonial_item}>
                <div className={styles.testimonial_info}>
                  <Image src="/user_piv_2.avif" alt="" width={200} height={100} />
                  <div className={styles.testimonial_text_box}>
                    <h3 className={styles.testimonial_user_name}>Ankit</h3>
                    <span className={styles.testimonial_user_job}>Student</span>
                  </div>
                </div>
                <p>The notes were concise yet comprehensive, making it easy to review and prepare for exams.</p>
              </div>
              <div className={styles.testimonial_item}>
                <div className={styles.testimonial_info}>
                  <Image src="/user_piv_2.avif" alt="" width={200} height={100} />
                  <div className={styles.testimonial_text_box}>
                    <h3 className={styles.testimonial_user_name}>Shivam</h3>
                    <span className={styles.testimonial_user_job}>Student</span>
                  </div>
                </div>
                <p>The notes were a lifesaver! They made studying so much easier and helped me understand the material better.</p>
              </div>
              <div className={styles.testimonial_item}>
                <div className={styles.testimonial_info}>
                  <Image src="/user_piv_2.avif" alt="" width={200} height={100} />
                  <div className={styles.testimonial_text_box}>
                    <h3 className={styles.testimonial_user_name}>Anuj</h3>
                    <span className={styles.testimonial_user_job}>Teacher</span>
                  </div>
                </div>
                <p>The notes were meticulously organized, aiding in effective teaching and student comprehension.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    


  </div>
}


// We are committed to delivering the highest quality service to our customers. Our unique approach combines expertise, innovation, and a customer-first mindset.

// Expertise
// Our team consists of industry experts with years of experience in their respective fields.

// Innovation
// We leverage the latest technologies and innovative